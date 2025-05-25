import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import About from "../components/About/About";
import { AboutData } from "../utils/constant/About"

const Abuot = () => {
  return (
    <div>
      <Header />
      <About data={AboutData} />
      <Footer />
    </div>
  )
}

export default Abuot
