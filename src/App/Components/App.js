import React, { Component } from "react";
import Header from './Header';
import { Route, Redirect, Switch } from 'react-router-dom';
import RideHistory from '../../History/Components/RideHistory';
import Home from '../../Home/Components/Home';
import Register from "../../Auth/Components/Register";
import Login from '../../Auth/Components/Login'
import '../../Styles/App.css';
import About from './About'
import { connect } from "react-redux";
import DriverProfile from "../../Booking/Components/DriverProfile";
import { fetchDrivers }  from '../Ducks/actions';
import { authorize } from '../../Auth/Ducks/actions';
import NavBar from '../../App/Components/NavBar';
import { withRouter } from 'react-router';




class App extends Component {
 

  componentDidMount(){
    this.props.fetchDrivers();
    localStorage.getItem('jwt') && this.props.authorize(this.props.history);
  }
      

  
  // sortByRate = () => {
  //   this.props.loggedIn?
  //   this.setprops(prevprops => {
  //     return {
  //       drivers: prevprops.drivers.sort(function(a, b){return a.rate-b.rate})
  //     }
  //   }) :
  //   history.push("/")
  // }

  // sortByRating = () => {
  //   this.props.loggedIn? 
  //   this.setprops(prevprops => {
  //     return {
  //       drivers: prevprops.drivers.sort(function(a, b){return b.rating-a.rating})
  //     }
  //   }):
  //   history.push("/")
  // }

 

  // searchDrivers = (keyword) => {
  //   keyword?
  //     this.setprops({
  //           filter: this.props.drivers.filter(el => (el.username + " " + el.description+ " " + el.car).toLowerCase().includes(keyword.toLowerCase()))
  //     }):
  //     alert("type something!")
  //  }

  //  resetSearch = () => {
  //    this.setprops({
  //      filter: false
  //    })
  //  }


  render(){
   console.log(this.props)
    const { drivers, auth } = this.props
   
      return(
        <div>
        <Header />
        {drivers.loading && <div className="loading">Loading...</div>}
          
            <NavBar />
            <Switch>
                <Route exact path='/' render={()=> {
                    return localStorage.getItem('jwt')? 
                        <Home /> :
                        <Redirect to="/login"/>
                
                }} />
                <Route exact path='/login' render={() => {
                    return auth.authorized ? 
                          <Redirect to="/"/> : 
                          <Login /> }}/>
               
                <Route exact path="/history" render={() => {
                    return auth.authorized && <RideHistory /> }} />
                <Route exact path="/register" component={Register} />
                <Route exact path='/about' component={About} />
                <Route exact path="/:name"  render={({ match }) => {
                            const { name } = match.params
                            const driver = drivers.drivers.find(el => el.name === name)
                          return driver? <DriverProfile driver={driver}/> :
                                         <div>Page not found</div>}} />
            </Switch>   
          
      </div>
      )
  }
}



function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return { 
    fetchDrivers: () => dispatch(fetchDrivers()),
    authorize: (history) => dispatch(authorize(history))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))
