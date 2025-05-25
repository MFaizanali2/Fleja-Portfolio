import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import { ServicesData } from "../utils/constant/Services";

const Service = () => {
  return (
    <div>
      <Header />
      <div className="services">
        <h6>MY SERVICES</h6>
        <h2>Interactive Services Offered Me</h2>
        <div className="services-box">
          {ServicesData.map((item, index) => {
            return <Services key={index} data={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
