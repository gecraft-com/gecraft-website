import Form from '../components/Form'

function ContactUsPage() {
  return (
    <div className="rounded-3xl bg-primary-850 px-7 py-5 text-white sm:px-12 sm:py-11 xl:rounded-[4rem] xl:px-14 xl:py-12">
      <h2 className="text-3xl font-semibold uppercase sm:text-5xl xl:text-6xl">
        Let&apos;s build something great together
      </h2>
      <p className="mt-2 text-lg sm:mt-3 sm:text-3xl xl:mt-6 xl:text-4xl">
        Tell us about your project by filling out the form below,
        <br className="hidden xl:block" /> and we&apos;ll reach out to schedule an
        introductory call!
      </p>
      <div className="mt-7 sm:mt-11 xl:mt-16 xl:flex xl:flex-row-reverse xl:gap-10">
        <div className="xl:flex xl:min-w-96 xl:flex-col 2xl:min-w-[36rem]">
          <h3 className="text-lg font-semibold text-primary-900 sm:text-xl xl:text-3xl">
            What to Expect:
          </h3>
          <ul className="mt-3 text-sm text-primary-900 sm:text-lg xl:text-xl">
            <li>— A quick response from our team</li>
            <li>— A free introductory call to discuss your needs</li>
            <li>— Expert insights and recommendations</li>
          </ul>
          <h3 className="mt-4 text-lg font-semibold text-primary-900 sm:text-xl xl:mt-6 xl:text-3xl">
            Let’s create <br className="sm:hidden" /> something amazing!
          </h3>
        </div>
        <Form onPage />
      </div>
    </div>
  )
}

export default ContactUsPage
