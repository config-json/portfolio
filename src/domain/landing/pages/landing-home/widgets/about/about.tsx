export const About = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 px-8 md:gap-16 md:px-16 justify-center items-center">
      <div className="flex flex-col gap-2 w-full lg:w-1/2 max-w-3xl items-center">
        <h3 className="text-2xl md:text-4xl font-medium text-accent">ABOUT</h3>
        <p>
          Insert text about being a developer with x+ years of experience and having a
          "passion" for building React apps.
          <br />
          <br />
          Yours sincerely - a file on the internet
        </p>
      </div>
    </div>
  )
}
