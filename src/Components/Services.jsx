import "./Services.css";
import { FaGlobe, FaCode, FaChartLine } from "react-icons/fa";

const Services = () => {
  return (
    <section className="services">
      <h2 className="services-heading">Our Services</h2>

      <div className="services-container">
        <div className="service-card">
          <FaGlobe className="service-icon" />

          <h3>SEO</h3>

          <p>Improve your search engine rankings and reach more customers.</p>
        </div>

        <div className="service-card">
          <FaCode className="service-icon" />

          <h3>Web Development</h3>

          <p>
            Build responsive, modern, and high-performance web applications.
          </p>
        </div>

        <div className="service-card">
          <FaChartLine className="service-icon" />

          <h3>Marketing</h3>

          <p>
            Grow your business with data-driven digital marketing strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
