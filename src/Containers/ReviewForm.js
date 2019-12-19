import React, { Component } from 'react';
import { FormGroup, FormControl } from "react-bootstrap";
import '../styles/ReviewForm.css'

class Review extends Component {
   constructor(){
     super()
     this.state = {
       review: "",
       submitted: false
     }
   }


   handleChange = (event) => {
     this.setState({
       review: event.target.value
     })
   }

   validateForm = () => {
    return this.state.review.length > 0
  }

   handleSubmit = (tripId, event) => {
    event.preventDefault()
    fetch(`https://radiant-fjord-35660.herokuapp.com/trips/${tripId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        review: this.state.review
      })
    })
    .then(res => res.json())
    .then(this.setState({submitted: true}))
  }

render(){
 
    return (
      <div className="review-form">
        {this.state.submitted?
          <h4>Your review has been posted!</h4> :
          <form  onSubmit={(e) => this.handleSubmit(this.props.trip.id, e)} >
              <FormGroup  controlId="address" bssize="large">
                  <FormControl as="textarea"
                      onChange={this.handleChange}
                      type="text"
                    />
              </FormGroup>
              <input type="submit" value="Submit" disabled={!this.validateForm()}/>

          </form>}
      </div>
    )
  }
}

export default Review;