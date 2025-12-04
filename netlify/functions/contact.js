/* global process */

import { Resend } from 'resend'

import { escapeHtml } from '../../src/shared/escapeHtml'
import { validateEmail, validateGoals, validateName } from '../../src/shared/validateForm'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const SENDER_EMAIL = process.env.SENDER_EMAIL
const ADMIN_EMAIL = process.env.ADMIN_EMAIL

if (!RESEND_API_KEY || !SENDER_EMAIL || !ADMIN_EMAIL) {
  console.error('❌ Missing required environment variables:', {
    RESEND_API_KEY: !!RESEND_API_KEY,
    SENDER_EMAIL: !!SENDER_EMAIL,
    ADMIN_EMAIL: !!ADMIN_EMAIL,
  })
}

export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  try {
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({
          error: 'Method Not Allowed. Use POST.',
        }),
      }
    }

    if (!RESEND_API_KEY || !SENDER_EMAIL || !ADMIN_EMAIL) {
      const missing = {
        RESEND_API_KEY: !!RESEND_API_KEY,
        SENDER_EMAIL: !!SENDER_EMAIL,
        ADMIN_EMAIL: !!ADMIN_EMAIL,
      }
      console.error('❌ Missing required environment variables at runtime:', missing)
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          error: 'Email configuration is incomplete on the server.',
          details: missing,
        }),
      }
    }

    const resend = new Resend(RESEND_API_KEY)

    let body
    try {
      body = JSON.parse(event.body || '{}')
    } catch (e) {
      console.error('❌ JSON parsing error:', e)
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: 'Invalid request body. Expected valid JSON.',
        }),
      }
    }

    const { name, email, company, budget, goals, onPage } = body

    const safeName = name ?? ''
    const safeEmail = email ?? ''
    const safeCompany = company ?? ''
    const safeBudget = budget ?? ''
    const safeGoals = goals ?? ''

    const nameError = validateName(safeName, onPage)
    const emailError = validateEmail(safeEmail)
    const goalsError = validateGoals(safeGoals)

    if ((onPage && nameError) || emailError || goalsError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          error: nameError || emailError || goalsError,
        }),
      }
    }

    const html = `
      <h2>Message from GeCraft Website by ${escapeHtml(safeName)} - ${escapeHtml(safeEmail)}</h2>
      <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
      <p><strong>Company:</strong> ${escapeHtml(safeCompany)}</p>
      <p><strong>Project budget:</strong> ${escapeHtml(safeBudget)}</p>
      <p><strong>Message:</strong><br>${escapeHtml(safeGoals).replace(/\n/g, '<br>')}</p>
    `

    const response = await resend.emails.send({
      from: SENDER_EMAIL,
      to: ADMIN_EMAIL,
      subject: `New Contact Form Message from GeCraft Website by ${escapeHtml(safeName)} - ${escapeHtml(safeEmail)}`,
      html,
    })

    if (!response || response.error) {
      console.error('❌ Resend API error:', response)
      return {
        statusCode: 502,
        headers,
        body: JSON.stringify({
          success: false,
          error: 'Failed to send email through Resend API.',
          details: response?.error,
        }),
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true }),
    }
  } catch (err) {
    console.error('❌ Unexpected error:', err)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
      }),
    }
  }
}
