import Icons from './Icons'

function Footer() {
  return (
    <footer className="w-full bg-primary-100 px-4 pb-4 pt-6 text-left">
      <div className="flex justify-between border-b border-primary-200 pb-4">
        <div className="flex flex-col">
          <a href="">Services</a>
          <a href="" className="mt-2">
            Work
          </a>
          <a href="" className="mt-2">
            About
          </a>
          <a href="" className="mt-3">
            <Icons name="linkedin" />
          </a>
        </div>
        <p className="w-40 text-sm font-semibold">
          We want to make IT solutions affordable and help businesses achieve great
          results through innovation
        </p>
      </div>
      <div className="flex justify-between pt-4">
        <a href="/">
          <Icons name="logo" width={80} height={20} />
        </a>
        <p className="text-xs text-primary-300">© 2023 All rights reserved</p>
      </div>
      <div className="flex gap-4 pt-3 text-xs text-primary-300 underline">
        <a href="">Privacy Policy</a>
        <a href="">Terms of Service</a>
      </div>
    </footer>
  )
}

export default Footer
