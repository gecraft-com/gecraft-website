import FormContactUs from './FormContactUs'

function ContactUs() {
  return (
    <div
      id="contactUs"
      className="px-[5.14vw] pb-[57.95vw] pt-[22.57vw] text-left sm:flex sm:gap-x-[13.02vw] sm:px-[5.92vw] sm:pb-[12vw] sm:pt-[5.3vw] lg:gap-x-[15.95vw] lg:px-[3.13vw] lg:pb-[12vw] lg:pt-[3.86vw] 2xl:gap-x-[15.61vw]"
    >
      <div className="flex flex-col">
        <h3 className="animation-timeline ml-[2.84vw] animate-emergence whitespace-nowrap text-left text-[3.08vw] font-extrabold uppercase before:mr-[1.3vw] before:inline-flex before:h-[2.31vw] before:w-[2.31vw] before:rounded-full before:bg-basic sm:ml-0 sm:text-[1.06vw] sm:before:mr-[0.45vw] sm:before:h-[0.8vw] sm:before:w-[0.8vw] lg:text-[0.63vw] lg:before:mr-[0.27vw] lg:before:h-[0.47vw] lg:before:w-[0.47vw] 2xl:text-[0.35vw] 2xl:before:mr-[0.15vw] 2xl:before:h-[0.263vw] 2xl:before:w-[0.263vw]">
          Contact us
        </h3>

        <div className="mt-[5.15vw] flex items-center sm:mt-[3.53vw] lg:mt-[2.09vw] 2xl:mt-[1.17vw]">
          <a href="https://gecraft.com/">
            <img
              src="img/logo_green.svg"
              alt="logo"
              className="animation-timeline w-[33.35vw] animate-emergence sm:w-[11.48vw] lg:w-[6.77vw] 2xl:w-[5.17vw]"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/gecraft/?viewAsMember=true"
            target="_blank"
          >
            <img
              src="img/in.svg"
              alt="linkedIn"
              className="ml-[8.98vw] w-[7.7vw] sm:ml-[3.09vw] sm:w-[2.65vw] lg:ml-[1.82vw] lg:w-[1.57vw] 2xl:ml-[1.02vw] 2xl:w-[1.2vw]"
            />
          </a>
        </div>
      </div>
      <FormContactUs />
    </div>
  )
}

export default ContactUs
