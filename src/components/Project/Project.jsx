import './Project.css'

// eslint-disable-next-line react/prop-types
const Project = ({data}) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {img1, img2, img3, img4, img5, img6} = data
  return (
    <div className='project-wrapper'>
        <div className="img-01">
            <div className="first">
                <img src={img1} alt="" />
                </div>

            <div className="second">
                <div className="one">
                <img src={img2} alt="" />
                </div>
                <div className="two">
                <img src={img3} alt="" />
                </div>
            </div>
        </div>
        <div className="img-01">
            <div className="second">
            <div className="one">
            <img src={img4} alt="" />
            </div>
            <div className="two">
            <img src={img5} alt="" />
            </div>
            </div>

            <div className="first">
            <img src={img6} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Project
