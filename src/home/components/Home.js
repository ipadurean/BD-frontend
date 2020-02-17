import React from "react";
import '../styles/Home.css';
import SearchAvailability from "../containers/SearchAvailability";
import { connect } from "react-redux";
import PropTypes from 'prop-types';




const Home = (props) => {

  const { user, loading } = props
  return (
    <div className="home-container">
      {loading? <div>Loading...</div> : <div>Welcome <em>{user.username}</em> !</div>} 
      <SearchAvailability /> 
    </div>  
  )
}

Home.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    username: PropTypes.string
  })
}

function mapStateToProps(state){
  return {
    user: state.auth.user,
    loading: state.auth.loading
  }
}

export default connect(mapStateToProps, null)(Home)