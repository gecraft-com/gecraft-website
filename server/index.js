/* eslint-disable no-undef */

import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { Resend } from 'resend'

import { escapeHtml } from '../src/utils/escapeHtml'

dotenv.config()

const app = express()

const RESEND_API_KEY = process.env.RESEND_API_KEY
const SENDER_EMAIL = process.env.SENDER_EMAIL
const ADMIN_EMAIL = process.env.ADMIN_EMAIL

if (!RESEND_API_KEY || !SENDER_EMAIL || !ADMIN_EMAIL) {
  console.error(
    '❌ Missing environment variables:',
    JSON.stringify(
      {
        RESEND_API_KEY: !!RESEND_API_KEY,
        SENDER_EMAIL: !!SENDER_EMAIL,
        ADMIN_EMAIL: !!ADMIN_EMAIL,
      },
      null,
      2
    )
  )
  process.exit(1)
}

const resend = new Resend(RESEND_API_KEY)

app.use(cors())
app.use(express.json())

app.all('/api/contact', (req, res, next) => {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Use POST.',
    })
  }
  next()
})

app.post('/api/contact', async (req, res) => {
  const {
    name = '',
    email = '',
    company = '',
    budget = '',
    goals = '',
    onPage = false,
  } = req.body

  if (!email || !goals) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email format.' })
  }

  if ((onPage && (!name || name.length < 2)) || goals.length < 10) {
    return res.status(400).json({ success: false, error: 'Invalid field constraints.' })
  }

  const html = `
    <h2>Message from GeCraft Website by ${escapeHtml(name)} - ${escapeHtml(email)}</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Project budget:</strong> ${escapeHtml(budget)}</p>
    <p><strong>Message:</strong><br>${escapeHtml(goals)}</p>
  `

  try {
    const response = await resend.emails.send({
      from: SENDER_EMAIL,
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${name} - ${email}`,
      html,
    })

    if (!response || response.error) {
      console.error('❌ Resend API error:', response)
      return res.status(502).json({
        success: false,
        error: 'Failed to send email through Resend API.',
        details: response.error,
      })
    }

    console.log('✅ Email sent:', response)

    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      id: response.data?.id,
    })
  } catch (err) {
    console.error('❌ Unexpected error:', err)

    return res.status(500).json({
      success: false,
      error: 'Unexpected server error while sending email.',
      details: err instanceof Error ? err.message : err,
    })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
