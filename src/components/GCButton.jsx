function GCButton({
  children,
  type,
  view,
  onClick,
  asLink = null,
  link = null,
  disabled = false,
}) {
  const getButtonStyles = (view) => {
    switch (view) {
      case 'green-header':
        return 'w-36 flex justify-center items-center bg-primary-500 h-10 rounded-full text-white xl:w-44 xl:h-12'
      case 'green-form':
        return 'w-full bg-primary-500 h-12 rounded-full text-white xl:text-lg'
      case 'cookies-first':
        return 'w-full bg-primary-500 h-12 rounded-full px-4 text-white xl:text-lg whitespace-nowrap'
      case 'cookies-second':
        return 'w-full border border-primary-500 h-12 px-4 rounded-full text-primary-500 whitespace-nowrap'
      case 'menu':
        return ''
      default:
        return ''
    }
  }

  return asLink ? (
    <a href={link} className={getButtonStyles(view)}>
      {children}
    </a>
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={getButtonStyles(view)}
    >
      {children}
    </button>
  )
}

export default GCButton
