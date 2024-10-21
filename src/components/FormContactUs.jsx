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
        <Form className="flex w-full flex-col items-end gap-y-[3vw] pt-[12.84vw]">
          <Field
            id="name"
            name="name"
            placeholder="Name"
            type="name"
            className="h-[24.11vw] w-full rounded-full bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15"
          />
          <Field
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            className="h-[24.11vw] w-full rounded-full bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15"
          />
          <Field
            id="phone"
            name="phone"
            placeholder="Phone"
            type="phone"
            className="h-[24.11vw] w-full rounded-full bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15"
          />
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Message"
            type="text"
            className="h-[52.32vw] w-full rounded-[15vw] bg-basic px-[13.35vw] py-[11.55vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15"
          />

          <button type="submit">
            <img
              src="img/submit.svg"
              alt="submit"
              className="rounded-full bg-buttonHover px-[7.7vw] py-[8.34vw]"
            />
          </button>
        </Form>
      </Formik>
    </div>
  )
}

export default FormContactUs
