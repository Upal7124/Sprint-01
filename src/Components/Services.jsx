import { FaGlobe, FaCode, FaChartLine } from "react-icons/fa";

const Services = () => {
  return (
    <section className="px-6 pt-8 pb-16" id="services">
      <h2 className="mb-10 text-center text-[2rem] font-bold md:text-[2.5rem] dark:text-black">
        Our Services
      </h2>

      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="cursor-pointer rounded-2xl bg-white/30 p-6 text-center shadow-[0_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)] dark:border dark:border-white/10 dark:bg-[rgba(30,30,30,0.45)] dark:text-[#f5f5f5] dark:shadow-[0_8px_24px_rgba(0,0,0,0.45)] dark:hover:bg-[rgba(40,40,40,0.6)] dark:hover:shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <FaGlobe className="mx-auto mb-4 text-5xl dark:text-[#ffd54f]" />

          <h3 className="mb-4 text-2xl font-semibold dark:text-white">SEO</h3>

          <p className="leading-[1.7] text-gray-700 dark:text-gray-300">
            Improve your search engine rankings and reach more customers.
          </p>
        </div>

        <div className="cursor-pointer rounded-2xl bg-white/30 p-6 text-center shadow-[0_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)] dark:border dark:border-white/10 dark:bg-[rgba(30,30,30,0.45)] dark:text-[#f5f5f5] dark:shadow-[0_8px_24px_rgba(0,0,0,0.45)] dark:hover:bg-[rgba(40,40,40,0.6)] dark:hover:shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <FaCode className="mx-auto mb-4 text-5xl dark:text-[#ffd54f]" />

          <h3 className="mb-4 text-2xl font-semibold dark:text-white">
            Web Development
          </h3>

          <p className="leading-[1.7] text-gray-700 dark:text-gray-300">
            Build responsive, modern, and high-performance web applications.
          </p>
        </div>

        <div className="cursor-pointer rounded-2xl bg-white/30 p-6 text-center shadow-[0_8px_20px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_14px_30px_rgba(0,0,0,0.25)] dark:border dark:border-white/10 dark:bg-[rgba(30,30,30,0.45)] dark:text-[#f5f5f5] dark:shadow-[0_8px_24px_rgba(0,0,0,0.45)] dark:hover:bg-[rgba(40,40,40,0.6)] dark:hover:shadow-[0_14px_35px_rgba(0,0,0,0.6)]">
          <FaChartLine className="mx-auto mb-4 text-5xl dark:text-[#ffd54f]" />

          <h3 className="mb-4 text-2xl font-semibold dark:text-white">
            Marketing
          </h3>

          <p className="leading-[1.7] text-gray-700 dark:text-gray-300">
            Grow your business with data-driven digital marketing strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
