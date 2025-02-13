function GCButton({ children, type, onClick }) {
  const getButtonStyles = (type) => {
    switch (type) {
      case 'green-header':
        return 'w-36 bg-primary-500 h-10 rounded-full text-white xl:w-44 xl:h-12'
      case 'green-form':
        return 'w-full bg-primary-500 h-12 rounded-full text-white xl:text-lg'
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
