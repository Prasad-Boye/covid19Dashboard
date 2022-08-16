import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="error-msg-container">
    <img
      src="https://res.cloudinary.com/dvzwomefi/image/upload/v1638176991/Group_7484_vaeuno.png"
      alt="not-found-pic"
      className="error-logo"
    />
    <h1 className="not-found-heading">PAGE NOT FOUND</h1>
    <p className="error-description">
      we are sorry, the page you requested could not be found
    </p>
    <Link to="/" className="nav-link">
      <button type="button" className="error-home-btn">
        Home
      </button>
    </Link>
  </div>
)

export default NotFound
