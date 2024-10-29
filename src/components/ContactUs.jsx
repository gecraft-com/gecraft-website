import FormContactUs from './FormContactUs'

function ContactUs() {
  return (
    <div
      id="contactUs"
      className="px-[5.14vw] pb-[57.95vw] pt-[22.57vw] text-left md:flex md:gap-x-[13.02vw] md:px-[5.92vw] md:pb-[12vw] md:pt-[5.3vw] lg:gap-x-[15.95vw] lg:px-[3.13vw] lg:pb-[12vw] lg:pt-[3.86vw] 2xl:gap-x-[15.61vw]"
    >
      <div className="flex flex-col">
        <h3 className="animation-timeline animate-emergence ml-[2.84vw] whitespace-nowrap text-left text-[3.08vw] font-extrabold uppercase before:mr-[1.3vw] before:inline-flex before:h-[2.31vw] before:w-[2.31vw] before:rounded-full before:bg-basic md:ml-0 md:text-[1.06vw] md:before:mr-[0.45vw] md:before:h-[0.8vw] md:before:w-[0.8vw] lg:text-[0.63vw] lg:before:mr-[0.27vw] lg:before:h-[0.47vw] lg:before:w-[0.47vw] 2xl:text-[0.35vw] 2xl:before:mr-[0.15vw] 2xl:before:h-[0.263vw] 2xl:before:w-[0.263vw]">
          Contact us
        </h3>
        <p className="animation-timeline animate-emergence mt-[7.7vw] text-[5.15vw] font-bold uppercase md:mt-[2.65vw] md:text-[1.77vw] lg:mt-[1.57vw] lg:text-[1.05vw] 2xl:mt-[1.46vw] 2xl:text-[0.59vw]">
          Phone
        </p>
        <a
          href="tel:+995558599550"
          className="animation-timeline animate-emergence mt-[1.3vw] text-[6.7vw] font-bold md:mt-[0.45vw] md:text-[2.3vw] lg:mt-[0.27vw] lg:text-[1.36vw] 2xl:mt-[0.15vw] 2xl:text-[1.4vw]"
        >
          +(995) 558 599 550
        </a>
        <a
          href="tel:+16475940256"
          className="animation-timeline animate-emergence mt-[1.3vw] text-[6.7vw] font-bold md:mt-[0.45vw] md:text-[2.3vw] lg:mt-[0.27vw] lg:text-[1.36vw] 2xl:mt-[0.15vw] 2xl:text-[1.4vw]"
        >
          +1 (647) 594 0256
        </a>
        <p className="animation-timeline animate-emergence mt-[5.15vw] text-[5.15vw] font-bold uppercase md:mt-[1.77vw] md:text-[1.77vw] lg:mt-[1.05vw] lg:text-[1.05vw] 2xl:mt-[0.59vw] 2xl:text-[0.59vw]">
          Email
        </p>
        <a
          href="mailto:info@gecraft.com"
          className="animation-timeline animate-emergence mt-[1.3vw] text-[6.7vw] font-bold md:mt-[0.45vw] md:text-[2.3vw] lg:mt-[0.27vw] lg:text-[1.36vw] 2xl:mt-[0.15vw] 2xl:text-[1.4vw]"
        >
          info@gecraft.com
        </a>
        <img
          src="img/logo_green.svg"
          alt="logo"
          className="animation-timeline animate-emergence mt-[5.15vw] w-[33.35vw] md:mt-[3.53vw] md:w-[11.48vw] lg:mt-[2.09vw] lg:w-[6.77vw] 2xl:mt-[1.17vw] 2xl:w-[5.17vw]"
        />
      </div>
      <FormContactUs />
    </div>
  )
}

export default ContactUs
