/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Banner.css';

const Banner = ({ data }) => {
    const { title, text1, text2, text3, btn, imgUrl, title1 } = data;

    const socialIcons = [
        { icon: faFacebook, link: "https://facebook.com" },
        { icon: faTwitter, link: "https://twitter.com" },
        { icon: faLinkedin, link: "https://linkedin.com" },
        { icon: faInstagram, link: "https://instagram.com" },
        { icon: faGithub, link: "https://github.com" },
        { icon: faYoutube, link: "https://youtube.com" }
    ];

    return (
        <div className="banner-wrapper">
            <div className="banner-content">
                <div className="banner-img">
                    <img src={imgUrl} alt="Banner" />
                </div>
                <div className="banner-text">
                    <h1>{title}</h1>
                    <h1><span>{title1}</span></h1>
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                    <button className="btn">{btn}</button>
                    <div className="banner-icons">
                        {socialIcons.map((item, index) => (
                            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={item.icon} size="2x" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
