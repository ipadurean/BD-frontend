import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';
import { logout } from '../../auth/ducks/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';


const NavBar = (props) => {
  
  const logout = () => {
    props.logout();
    localStorage.removeItem('jwt');
    props.history.push('/login')
  }

  return (
    <div className="nav-container">
      <a href="/home" className="nav-btn">Home</a>
      <Link to="/about" className="nav-btn">About</Link>
      <a href="/history" className="nav-btn">Ride History</a>
      <button id="bttn" onClick={logout} to="/" >Logout</button>
    </div>
  );
}

function mapDispatchToProps(dispatch){
  return { logout: () => dispatch(logout()) }
}
 
export default connect(null, mapDispatchToProps)(withRouter(NavBar))

