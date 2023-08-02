
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from './Logo-Stamp-thaali-1.png'
function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = ()=>{
      localStorage.removeItem('token');
      navigate('/');
    }
  return (
    <div className="home">
      <nav className="navbar sticky-top ">
        <div className="container-fluid">
            <Link to='/home' className="navbar-brand"><img className='thaali-logo' alt='Thaalli' src={logo} /></Link>
           { location.pathname === '/'?null: <button type="button" className="btn btn-secondary" onClick={handleLogout}>Logout</button>}
        </div>
    </nav>
    </div>
  );
}

export default Navbar;
