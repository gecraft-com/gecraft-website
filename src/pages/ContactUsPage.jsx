import { Form } from '../components/Form'

export const ContactUsPage = () => {
  return (
    <div className="bg-secondary-200 rounded-3xl px-7 py-5 md:px-12 md:py-11 xl:rounded-[4rem] xl:px-14 xl:py-12">
      <h2 className="font-[Faberge] text-3xl uppercase md:text-5xl xl:text-6xl">
        Let&apos;s build something great together
      </h2>
      <p className="mt-2 md:mt-3 md:text-3xl xl:mt-6 xl:text-4xl">
        Tell us about your project by filling out the form below,
        <br className="hidden xl:block" /> and we&apos;ll reach out to schedule an
        introductory call!
      </p>
      <div className="mt-7 md:mt-11 xl:mt-16 xl:flex xl:flex-row-reverse xl:gap-10">
        <div className="xl:flex xl:min-w-96 xl:flex-col 2xl:min-w-[36rem]">
          <h3 className="font-medium md:text-xl xl:text-3xl">What to Expect:</h3>
          <ul className="mt-3 xl:text-lg">
            <li>— A quick response from our team</li>
            <li>— A free introductory call to discuss your needs</li>
            <li>— Expert insights and recommendations</li>
          </ul>
          <h3 className="mt-4 font-medium md:text-xl xl:mt-6 xl:text-3xl">
            Let’s create something amazing!
          </h3>
        </div>
        <Form onPage />
      </div>
    </div>
  )
}
