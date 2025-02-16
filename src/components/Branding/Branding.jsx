import './Branding.css'

// eslint-disable-next-line react/prop-types
const Branding = ({data}) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const {title, num, title1, title2, title3} = data
  return (
    <div className='branding-wrapper'>
      <div className="branding-content">
      <h1><span>{num}</span>{title}</h1>
      <h6>{title1}</h6>
      <h6>{title2}</h6>
      <h6>{title3}</h6>
      </div>
    </div>
  )
}

export default Branding
