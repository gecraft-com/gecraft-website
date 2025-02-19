import Form from './Form'
import Icons from './Icons'

function Footer() {
  const today = new Date()
  const currentYear = today.getFullYear()

  return (
    <footer className="w-full bg-primary-100 px-4 pb-4 pt-6 text-left sm:px-8 sm:pb-7 sm:pt-11 xl:px-20 xl:pb-9 xl:pt-14 2xl:px-40">
      <div className="mx-auto max-w-[100.188rem]">
        <div className="flex justify-between border-b border-primary-200 pb-4">
          <div className="flex w-full justify-between sm:flex-col">
            <div className="flex flex-col">
              <a href="/services" className="w-1/2">
                Services
              </a>
              <a href="/work" className="mt-2 w-1/2 sm:mt-3">
                Work
              </a>
              <a href="/about" className="mt-2 w-1/2 sm:mt-3">
                About
              </a>
              <a href="" className="mt-3 w-1/2 sm:mt-6">
                <Icons name="linkedin" />
              </a>
            </div>
            <p className="w-40 text-sm sm:mt-9 sm:w-80 sm:text-base sm:leading-5 xl:w-full">
              We want to make IT solutions affordable <br className="hidden xl:block" />{' '}
              and help businesses achieve great results through innovation
            </p>
          </div>
          <Form />
        </div>
        <div className="flex items-center justify-between pt-4 sm:pt-6">
          <a href="/">
            <Icons name="logo" width={80} height={20} />
          </a>
          <div className="hidden gap-4 text-base text-primary-300 underline sm:flex">
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
          </div>
          <p className="text-xs text-primary-300 sm:text-base">
            © {currentYear} All rights reserved
          </p>
        </div>
        <div className="flex gap-4 pt-3 text-xs text-primary-300 underline sm:hidden">
          <a href="">Privacy Policy</a>
          <a href="">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
