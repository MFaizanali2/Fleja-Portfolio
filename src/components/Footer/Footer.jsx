import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import footerData from "../../utils/constant/Footer.js";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section">
          <h2 className="logo"><img src={footerData.imgUrl} alt="" /></h2>
          <p>{footerData.description}</p>
          <div className="social-icons">
            {footerData.socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            {footerData.quickLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Recent Posts</h3>
          <ul>
            {footerData.recentPosts.map((post, index) => (
              <li key={index}>
                <a href={post.url}>{post.title}</a>
                <span>{post.date}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>{footerData.contact.description}</p>
          <p><i className="fas fa-map-marker-alt"></i> {footerData.contact.address}</p>
          <p><i className="fas fa-phone"></i> {footerData.contact.phone}</p>
          <p><i className="fas fa-envelope"></i> {footerData.contact.email}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {footerData.brandName}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
