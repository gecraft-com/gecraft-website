import { Team } from '../components/Team'

export const AboutPage = () => {
  return (
    <>
      <div className="relative md:static md:flex md:items-center md:gap-6 xl:gap-20 2xl:gap-28">
        <img
          src="/gecraft-logo.png"
          alt="GeCraft logo"
          className="absolute top-28 -right-12 -z-10 w-92 -rotate-12 opacity-10 md:static md:top-auto md:right-auto md:h-60 md:w-60 md:rotate-0 md:opacity-100 xl:h-80 xl:w-80 2xl:h-125 2xl:w-125"
        />
        <div>
          <h2 className="text-primary-700 text-sm font-semibold xl:text-xl 2xl:text-3xl">
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
          <div className="mt-6 flex flex-col gap-2 md:mt-4 md:flex-row md:justify-between xl:mt-7 2xl:mt-20">
            <div className="border-l-primary-500 border-l-2 px-3 py-1 md:w-1/3 md:px-4">
              <p className="text-lg font-semibold md:text-xl xl:text-4xl 2xl:text-5xl">
                7
              </p>
              <p className="text-primary-800 text-sm 2xl:text-lg">
                years <br className="hidden md:block xl:hidden" />
                in business
              </p>
            </div>
            <div className="border-l-primary-500 border-l-2 px-3 py-1 md:w-1/3 md:px-4">
              <p className="text-lg font-semibold md:text-xl xl:text-4xl 2xl:text-5xl">
                9+
              </p>
              <p className="text-primary-800 text-sm 2xl:text-lg">
                specialists <br className="hidden md:block xl:hidden" />
                in the team
              </p>
            </div>
            <div className="border-l-primary-500 border-l-2 px-3 py-1 md:w-1/3 md:px-4">
              <p className="text-lg font-semibold md:text-xl xl:text-4xl 2xl:text-5xl">
                +40
              </p>
              <p className="text-primary-800 text-sm 2xl:text-lg">
                works <br className="hidden md:block xl:hidden" />
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
