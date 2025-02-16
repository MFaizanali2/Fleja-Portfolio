/* eslint-disable no-unused-vars */
import "./Services.css";

// eslint-disable-next-line react/prop-types
const Services = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {title, subTitle, imgUrl} =  data
  return (
    <div className="card-container">
      <div className="card">
        <img src={imgUrl} alt="City-image" className="card-image"/>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;