import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../../Styles/ReviewForm.css'

class Review extends Component {
   constructor(){
     super()

    
     this.state = {
       review: ""
     }
   }

  //  componentDidMount(){
  //    this.refs['form'].scrollTo(0, 10)
  // }
   


   handleChange = (event) => {
     this.setState({
       review: event.target.value
     })
   }

   validateForm = () => {
    return this.state.review.length > 0
  }

  handleSubmit = (event, review) => {
    event.preventDefault()
    fetch(`https://radiant-fjord-35660.herokuapp.com/trips/${this.props.trip.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
      },
      body: JSON.stringify({
        review
      })
    })
    .then(res => res.json())
    .then(this.setState({submitted: true}))
  }

  

render(){
 
    return (
      <div className="review-form">
        {this.props.submitted?
          <h4>Your review has been posted!</h4> :
          <form onSubmit={(e) => this.props.submit(e, this.state.review)} >
              <FormGroup  controlId="address" bssize="large">
                  <FormControl as="textarea"
                               onChange={this.handleChange}
                               type="text"
                               autoFocus
                  />
              </FormGroup>
              <Button variant="success" size="sm" type="submit" value="Submit" disabled={!this.validateForm()}>Submit</Button>

          </form>}
      </div>
    )
  }
}

export default Review;