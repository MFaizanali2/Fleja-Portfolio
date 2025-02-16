import "./Blog.css";

// eslint-disable-next-line react/prop-types
const Blog = ({data}) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {date, title, buttonText, imageUrl} = data
    console.log(data)
  return (
    <div className="card">
      <img src={imageUrl} alt="Workspace" className="card-image" />
      <div className="card-content">
        <p className="card-date">{date}</p>
        <h2 className="card-title">{title}</h2>
        <a href="#" className="card-button">{buttonText} »</a>
      </div>
    </div>
  );
};

export default Blog;
