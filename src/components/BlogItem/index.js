// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData

  return (
    <li className="list-container">
      <Link to={`/blogs/${id}`} className="link-item">
        <div className="blog-item-container">
          <img src={imageUrl} alt={`item${id}`} className="main-img" />

          <div className="blog-item-details">
            <h1 className="title">{topic}</h1>
            <h1>{title}</h1>
            <div className="author-container">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar-url" />
              <p className="author-name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
