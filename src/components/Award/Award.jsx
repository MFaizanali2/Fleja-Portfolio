import './Award.css'

// eslint-disable-next-line react/prop-types
const Award = ({data}) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const {title, subTitle} = data
  return (
    <div className='award-wrapper'>
      <div className="award-content">
      <h1>{title}</h1>
      <h6>{subTitle}</h6>
      </div>
    </div>
  )
}

export default Award
