import { Field, Form, Formik } from 'formik'

function FormContactUs() {
  return (
    <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          alert(JSON.stringify(values, null, 2))
        }}
      >
        <Form className="grid w-full gap-y-[3vw] pt-[12.84vw] md:grid-cols-2 md:gap-x-[0.45vw] md:gap-y-[0.8vw] md:pt-0 lg:gap-x-[0.25vw] lg:gap-y-[0.5vw] 2xl:gap-x-[0.29vw] 2xl:gap-y-[0.29vw]">
          <Field
            id="name"
            name="name"
            placeholder="Name"
            type="name"
            className="h-[24.11vw] w-full rounded-full bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:h-[8.3vw] md:px-[4.5vw] md:text-[2.3vw] lg:h-[4.9vw] lg:px-[2.7vw] lg:text-[1.3vw] 2xl:h-[4.94vw]"
          />
          <Field
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            className="h-[24.11vw] w-full rounded-full bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:h-[8.3vw] md:px-[4.5vw] md:text-[2.3vw] lg:h-[4.9vw] lg:px-[2.7vw] lg:text-[1.3vw] 2xl:h-[4.94vw]"
          />
          <Field
            id="phone"
            name="phone"
            placeholder="Phone"
            type="phone"
            className="h-[24.11vw] w-full rounded-full bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:col-start-1 md:col-end-3 md:h-[8.3vw] md:px-[4.5vw] md:text-[2.3vw] lg:h-[4.9vw] lg:px-[2.7vw] lg:text-[1.3vw] 2xl:h-[4.94vw]"
          />
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Message"
            type="text"
            className="h-[52.32vw] w-full rounded-[15vw] bg-basic px-[13.35vw] py-[11.55vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:col-start-1 md:col-end-3 md:h-[18vw] md:rounded-[5vw] md:px-[4.5vw] md:py-[3.98vw] md:text-[2.3vw] lg:h-[10.62vw] lg:rounded-[3.4vw] lg:px-[2.7vw] lg:py-[2.35vw] lg:text-[1.3vw]"
          />

          <button type="submit" className="justify-self-end md:col-start-2">
            <img
              src="img/submit.svg"
              alt="submit"
              className="rounded-full bg-buttonHover px-[7.7vw] py-[8.34vw] md:px-[2.61vw] md:py-[2.83vw] lg:px-[1.54vw] lg:py-[1.67vw] 2xl:px-[0.86vw] 2xl:py-[0.94vw]"
            />
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormContactUs
