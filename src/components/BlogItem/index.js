import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {title, description, publishedDate} = itemDetails

  return (
    <li className="post-container">
      <h1 className="heading">{title}</h1>
      <p className="para">{publishedDate}</p>
      <p className="para">{description}</p>
    </li>
  )
}

export default BlogItem
