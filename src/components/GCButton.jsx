function GCButton({ children, type, onClick }) {
  const getButtonStyles = (type) => {
    switch (type) {
      case 'contact-us-header':
        return 'w-36 bg-primary-500 h-10 rounded-full text-white'
      case 'read-more':
        return 'w-full border border-primary-500 h-10 rounded-full text-primary-500'
      case 'menu':
        return ''
      default:
        return ''
    }
  }

  return (
    <button type="button" onClick={onClick} className={getButtonStyles(type)}>
      {children}
    </button>
  )
}

export default GCButton
