import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <h1>movieDb</h1>
    <div className="btn-nav-container">
      <Link to="/">
        <button type="button">Popular</button>
      </Link>
      <Link to="/top-rated">
        <button type="button">Top Rated</button>
      </Link>
      <Link to="/upcoming">
        <button type="button">Upoming</button>
      </Link>
    </div>
    <div className="search-container">
      <input type="search" />
      <button type="button">search</button>
    </div>
  </nav>
)
export default Header
