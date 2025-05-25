import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Project from "../components/Project/Project"
// import Some from "../components/Some/Some"
import { ProjectData } from "../utils/constant/Project"
// import { SomeData } from "../utils/constant/Some"


const Work = () => {
  return (
    <div>
      <Header />
      {/* <Some data={SomeData} /> */}
      <Project data={ProjectData} />
      <Footer />
    </div>
  )
}

export default Work
