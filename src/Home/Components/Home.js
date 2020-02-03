import React, { Component } from "react";
import '../../Styles/Home.css';
import NavBar from '../../App/Components/NavBar'
import SearchAvailability from "./SearchAvailability";
import { connect } from "react-redux";
import { authorize } from '../../Auth/Ducks/actions';




class Home extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     selectedDriver: null,
  //     timeToBook:{}
  //   }
  // }

  componentDidMount(){
     this.props.authorize()
  }

   
  //   selectDriver = (driver, time) => {
  //   this.setState({ 
  //     selectedDriver: driver,
  //     timeToBook: time 
  //   })
  // }

  // back = () => {
  //   this.setState({ selectedDriver: null })
  // }



  render(){
 
      return(
       <div className="home-container">
           <p>  Welcome <em>{this.props.auth.user.username}</em> !</p>  
           <NavBar  />
           <SearchAvailability drivers={this.props.drivers.drivers} /> 
           }
       </div>  
        )
    }
}


function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return { 
    authorize: () => dispatch(authorize()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)