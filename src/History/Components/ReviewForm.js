import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../../styles/ReviewForm.css'

class Review extends Component {
   constructor(){
     super()
     this.state = {
       review: ""
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

  

render(){
 
    return (
      <div className="review-form">
        {this.props.submitted?
          <h4>Your review has been posted!</h4> :
          <form  onSubmit={(e) => this.props.submit(e, this.state.review)} >
              <FormGroup  controlId="address" bssize="large">
                  <FormControl as="textarea"
                      onChange={this.handleChange}
                      type="text"
                    />
              </FormGroup>
              <Button variant="success" size="sm" type="submit" value="Submit" disabled={!this.validateForm()}>Submit</Button>

          </form>}
      </div>
    )
  }
}

export default Review;