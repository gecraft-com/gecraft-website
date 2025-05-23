import Team from '../components/Team'

function AboutPage() {
  return (
    <>
      <div className="relative sm:static sm:flex sm:items-center sm:gap-6 xl:gap-20 2xl:gap-28">
        <img
          src="/gecraft-logo.webp"
          alt="GeCraft logo"
          className="absolute -right-12 top-28 -z-10 w-[22.98rem] -rotate-12 opacity-10 sm:static sm:right-auto sm:top-auto sm:h-60 sm:w-60 sm:rotate-0 sm:opacity-100 xl:h-80 xl:w-80 2xl:h-[31.25rem] 2xl:w-[31.25rem]"
        />
        <div>
          <h2 className="text-sm font-semibold text-primary-700 xl:text-xl 2xl:text-3xl">
            About
          </h2>
          <p className="mt-2 xl:mt-2.5 xl:text-xl 2xl:mt-4 2xl:text-3xl">
            Founded in 2018, GeCraft is a tech company specializing in web development,
            mobile apps, blockchain solutions, and AI-driven technologies. With years of
            experience, we turn bold ideas into scalable, high-performance digital
            products
          </p>
          <p className="mt-2 xl:mt-2.5 xl:text-xl 2xl:mt-4 2xl:text-3xl">
            Let’s build something great together!
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:mt-4 sm:flex-row sm:justify-between xl:mt-7 2xl:mt-20">
            <div className="border-l-2 border-l-primary-500 px-3 py-1 sm:w-1/3 sm:px-4">
              <p className="text-lg font-semibold sm:text-xl xl:text-4xl 2xl:text-5xl">
                7
              </p>
              <p className="text-sm text-primary-800 2xl:text-lg">
                years <br className="hidden sm:block xl:hidden" />
                in business
              </p>
            </div>
            <div className="border-l-2 border-l-primary-500 px-3 py-1 sm:w-1/3 sm:px-4">
              <p className="text-lg font-semibold sm:text-xl xl:text-4xl 2xl:text-5xl">
                9+
              </p>
              <p className="text-sm text-primary-800 2xl:text-lg">
                specialists <br className="hidden sm:block xl:hidden" />
                in the team
              </p>
            </div>
            <div className="border-l-2 border-l-primary-500 px-3 py-1 sm:w-1/3 sm:px-4">
              <p className="text-lg font-semibold sm:text-xl xl:text-4xl 2xl:text-5xl">
                +40
              </p>
              <p className="text-sm text-primary-800 2xl:text-lg">
                works <br className="hidden sm:block xl:hidden" />
                performed
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team />
    </>
  )
}

export default AboutPage
