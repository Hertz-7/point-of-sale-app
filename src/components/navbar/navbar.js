
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
            <a className="navbar-brand" href="/home">logo</a>
           { location.pathname === '/'?null: <button type="button" className="btn btn-secondary" onClick={handleLogout}>Logout</button>}
        </div>
    </nav>
    </div>
  );
}

export default Navbar;
