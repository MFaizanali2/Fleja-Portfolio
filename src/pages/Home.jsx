import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Branding from "../components/Branding/Branding";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Skills from "../components/Skills/Skills";
import Award from "../components/Award/Award";
import Some from "../components/Some/Some";
import Project from "../components/Project/Project";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";



import { BannerText1 } from "../utils/constant/Banner";
import { BrandingData } from "../utils/constant/Branding";
import { AboutData } from "../utils/constant/About";
import { ServicesData } from "../utils/constant/Services";
import { ContactData } from "../utils/constant/Contact";
import { AwardData } from "../utils/constant/Award";
import { SomeData } from "../utils/constant/Some";
import { ProjectData } from "../utils/constant/Project";
import { BlogData } from "../utils/constant/Blog";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner data={BannerText1} />
      <div className="branding-box">
        {BrandingData.map((item, index) => {
          return <Branding key={index} data={item} />;
        })}
      </div>
      <About data={AboutData} />
      <div className="services">
        <h6>MY SERVICES</h6>
        <h2>Interactive Services Offered Me</h2>
        <div className="services-box">
          {ServicesData.map((item, index) => {
            return <Services key={index} data={item} />;
          })}
        </div>
      </div>

      <Contact data={ContactData} />
      <Skills />

      <div className="award-box">
        {AwardData.map((item, index) => {
          return <Award key={index} data={item} />;
        })}
      </div>

      <Some data={SomeData} />
      <Project data={ProjectData} />

      <div className="blog">
        <div className="blog-box">
          {BlogData.map((item, index) => {
            return <Blog key={index} data={item} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
