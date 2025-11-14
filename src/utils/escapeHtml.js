export const escapeHtml = (str) => {
  if (typeof str !== 'string') return ''
  return str.replace(
    /[&<>"']/g,
    (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[m]
  )
}
