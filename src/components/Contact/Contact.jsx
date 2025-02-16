/* eslint-disable no-unused-vars */
import './Contact.css'
// eslint-disable-next-line react/prop-types
const Contact = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {title, subTitle, btn, text} = data
  return (
    <div className="contact-wrapper">
        <div className="contact-text">
            <h6><span>{subTitle}</span></h6>
            <h1>{title}</h1>
            <p>{text}</p>
            <button className='btn'>{btn}</button>
        </div>
    </div>
  )
}

export default Contact
