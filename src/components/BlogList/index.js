import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <>
      <div className="profile-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="image"
        />
        <h1 className="heading">Wade Warren</h1>
        <p className="para">Software developer at UK</p>
      </div>
      <ul className="blogs-list">
        {blogsList.map(eachItem => (
          <BlogItem key={eachItem.id} itemDetails={eachItem} />
        ))}
      </ul>
    </>
  )
}

export default BlogList
