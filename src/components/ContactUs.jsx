import FormContactUs from './FormContactUs'

function ContactUs() {
  return (
    <div className="px-[5.14vw] pb-[57.95vw] pt-[22.57vw] text-left">
      <h3 className="ml-[2.84vw] whitespace-nowrap text-left text-[3.08vw] font-extrabold uppercase before:mr-[1.3vw] before:inline-flex before:h-[2.31vw] before:w-[2.31vw] before:rounded-full before:bg-basic md:ml-0 md:text-[1.06vw] md:before:mr-[0.45vw] md:before:h-[0.8vw] md:before:w-[0.8vw] lg:text-[0.63vw] lg:before:mr-[0.27vw] lg:before:h-[0.47vw] lg:before:w-[0.47vw] 2xl:text-[0.35vw] 2xl:before:mr-[0.15vw] 2xl:before:h-[0.263vw] 2xl:before:w-[0.263vw]">
        Contact us
      </h3>
      <p className="mt-[7.7vw] text-[5.15vw] font-bold uppercase">Phone</p>
      <p className="mt-[1.3vw] text-[6.7vw] font-bold">+995 558 599 550</p>
      <p className="mt-[1.3vw] text-[6.7vw] font-bold">+1 647 594 0256</p>
      <p className="mt-[6vw] text-[5.15vw] font-bold uppercase">Email</p>
      <p className="mt-[1.3vw] text-[6.7vw] font-bold">info@gecraft.com</p>
      <p className="mt-[6vw] flex items-center text-[6vw] font-bold">
        <img src="img/logo_green.svg" alt="logo" className="mr-[1.9vw]" /> GeCraft
      </p>
      <FormContactUs />
    </div>
  )
}

export default ContactUs
