import clsx from 'clsx'

export const GCInput = ({
  value,
  placeholder,
  name,
  id,
  isTextarea,
  errorText,
  onChange,
  onBlur,
  variant = 'secondary',
  type = 'text',
  isOnPage = true,
  className,
}) => {
  const baseStyles =
    'w-full rounded-lg border-2 px-4 py-3 bg-black-00 text-black-950 focus:outline-none placeholder:text-black-300'
  const inputStyles = 'h-12'
  const textAreaStyles = isOnPage
    ? 'min-h-42.5 h-42.5 block pt-3.5 col-span-2'
    : 'min-h-22 h-22 block pt-3.5'
  const variantStyles = {
    secondary: isOnPage ? 'border-black-500' : 'border-black-300',
    danger: 'border-error-1',
  }

  const hasError = !!errorText
  const inputId = id || name

  return (
    <>
      <label className={clsx('group relative', className)}>
        {isTextarea ? (
          <>
            <textarea
              id={inputId}
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              className={clsx(
                baseStyles,
                inputStyles,
                variantStyles[variant],
                textAreaStyles
              )}
            />
            <span
              className={clsx(
                'absolute left-4',
                'cursor-text duration-200',
                'group-focus-within:top-0.5 group-focus-within:text-xs group-focus-within:opacity-35',
                {
                  'top-0.5 text-xs opacity-35': value,
                  'top-4': !value,
                }
              )}
            >
              {placeholder}
            </span>
            {isOnPage && (
              <div
                className={clsx(
                  'text-black-300 absolute bottom-4 left-4',
                  'cursor-text duration-200',
                  'group-focus-within:scale-0 group-focus-within:opacity-0',
                  { 'scale-0 opacity-0': value }
                )}
              >
                <p>Helpful things to include:</p>
                <ul className="leading-6">
                  <li>— Your problem</li>
                  <li>— Your location</li>
                  <li>— How you heard about us</li>
                </ul>
              </div>
            )}
            {hasError && errorText && (
              <span className="text-error-1 absolute top-0 right-4 text-sm">
                {errorText}
              </span>
            )}
          </>
        ) : (
          <>
            <input
              id={inputId}
              name={name}
              value={value}
              type={type}
              onChange={onChange}
              onBlur={onBlur}
              className={clsx(baseStyles, inputStyles, variantStyles[variant])}
            />
            <span
              className={clsx(
                'absolute top-1/2 left-4 -translate-y-1/2',
                'cursor-text duration-200',
                'group-focus-within:top-2.5 group-focus-within:text-xs group-focus-within:opacity-35',
                {
                  'top-2.5 text-xs opacity-35': value,
                }
              )}
            >
              {placeholder}
            </span>
            {hasError && errorText && (
              <span className="text-error-1 absolute top-0 right-4 text-sm">
                {errorText}
              </span>
            )}
          </>
        )}
      </label>
    </>
  )
}

GCInput.displayName = 'GCInput'
