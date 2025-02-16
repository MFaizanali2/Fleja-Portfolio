/* eslint-disable no-unused-vars */
import './Some.css'
// eslint-disable-next-line react/prop-types
const Some = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const {title,text} = data
  return (
    <div className="some-wrapper">
        <div className="some-text">
            <h6><span>{text}</span></h6>
            <h1>{title}</h1>
        </div>
    </div>
  )
}

export default Some
