import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { BlogData } from "../utils/constant/Blog";

const Contact = () => {
  return (
    <div>
      <Header />
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

export default Contact;
