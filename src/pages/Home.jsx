import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Branding from "../components/Branding/Branding"
import About from "../components/About/About"
import Services from "../components/Services/Services"
import Contact from "../components/Contact/Contact"


import { BannerText1 } from "../utils/constant/Banner"
import { BrandingData } from "../utils/constant/Branding"
import { AboutData } from "../utils/constant/About"
import { ServicesData } from "../utils/constant/Services"
import { ContactData } from "../utils/constant/Contact"

const Home = () => {
  return (
    <div>
      <Header />
      <Banner data={BannerText1} />
      <div className="branding-box">
        {BrandingData.map((item , index)=>{
          return(
            <Branding key={index} data={item}/>
          )
        })}
      </div>
      <About data={AboutData} />
      <div className="services">
        <h6>MY SERVICES</h6>
        <h2>Interactive Services Offered Me</h2>
      <div className="services-box">
        {ServicesData.map((item , index)=>{
          return(
            <Services key={index} data={item}/>
          )
        })}
      </div>
      </div>

      <Contact data={ContactData}/>

    </div>
  )
}

export default Home