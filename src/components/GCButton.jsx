import { Link } from 'react-router-dom'

export const GCButton = ({
  children,
  type = 'button',
  view,
  onClick,
  asLink = false,
  link = null,
  disabled = false,
  className,
}) => {
  const getButtonStyles = (view) => {
    if (disabled) {
      const baseClasses = 'cursor-not-allowed rounded-full text-black-500 bg-black-400'

      return `${baseClasses} ${className}`
    }

    const baseClasses = 'cursor-pointer rounded-full text-black-00 duration-100'

    switch (view) {
      case 'primary':
        return `${baseClasses} ${className} bg-primary-950 text-lg font-medium hover:bg-black-900 active:bg-black-600`
      case 'secondary':
        return `${baseClasses} ${className} bg-primary-500 text-lg font-medium hover:bg-primary-600 active:bg-primary-700`
      default:
        return `${baseClasses} ${className}`
    }
  }

  return asLink ? (
    <Link to={link} className={getButtonStyles(view)} onClick={onClick}>
      {children}
    </Link>
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
