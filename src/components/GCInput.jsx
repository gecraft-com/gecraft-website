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
      {isTextarea ? (
        <div className="col-span-2">
          <label className="group relative">
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
          </label>
        </div>
      ) : (
        <label className="group relative">
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
        </label>
      )}
    </>
    // <div className={clsx('relative w-full', className)}>
    //   {showLabel && (
    //     <label
    //       htmlFor={inputId}
    //       className={clsx(
    //         'text-black-950 block font-medium',
    //         labelClassName ? labelClassName : 'text-lg'
    //       )}
    //     >
    //       {label || placeholder}
    //     </label>
    //   )}
    //   {isTextarea ? (
    //     <>
    //       <textarea
    //         id={inputId}
    //         name={name}
    //         ref={ref}
    //         className={clsx(
    //           baseStyles,
    //           textAreaStyles,
    //           variantStyles[variant],
    //           disabledStyles
    //         )}
    //         placeholder={placeholder}
    //         value={value}
    //         onChange={onChange}
    //         onBlur={onBlur}
    //         maxLength={maxLength}
    //         disabled={disabled}
    //       />
    //       {hasError && showWarningIcon && (
    //         <WarningIcon className="text-error-500 absolute top-3 right-3 h-6 w-6" />
    //       )}
    //       {hasError && <p className="text-error-500 mt-1 text-sm">{errorText}</p>}
    //     </>
    //   ) : (
    //     <>
    //       <div className="relative flex w-full items-center">
    //         <input
    //           id={inputId}
    //           ref={ref}
    //           type={isNumberInput ? 'text' : type}
    //           inputMode={isNumberInput ? 'decimal' : undefined}
    //           name={name}
    //           className={clsx(
    //             baseStyles,
    //             inputStyles,
    //             variantStyles[variant],
    //             disabledStyles
    //           )}
    //           placeholder={placeholder}
    //           value={isNumberInput ? formatNumberValue(value) : value}
    //           onChange={handleChange}
    //           onBlur={onBlur}
    //           pattern={pattern}
    //           maxLength={maxLength}
    //           disabled={disabled}
    //           min={min}
    //           required={required}
    //         />
    //         {hasError && showWarningIcon && (
    //           <WarningIcon className="text-error-500 absolute right-3 h-6 w-6" />
    //         )}
    //       </div>
    //       {hasError && <p className="text-error-500 mt-1 text-sm">{errorText}</p>}
    //     </>
    //   )}
    // </div>
  )
}

GCInput.displayName = 'GCInput'
