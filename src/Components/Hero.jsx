const Hero = () => {
  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center"
      id="home"
    >
      <div className="max-w-4xl rounded-xl bg-white/20 p-8 backdrop-blur-md dark:bg-zinc-900/45">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-black md:text-6xl dark:text-white">
          Transforming Ideas into Powerful Digital Solutions
        </h1>

        <p className="text-base leading-7 text-black md:text-lg dark:text-gray-300">
          We help businesses innovate, scale, and succeed through custom
          software, modern web applications, cloud technologies, and AI-driven
          solutions—built with quality, security, and your success in mind.
        </p>
      </div>

      <button className="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-blue-700 dark:bg-[#1b1b1b] dark:text-white dark:hover:bg-white dark:hover:text-black">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
