import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../Styles/ReviewForm.css';
import { addReview } from '../Ducks/actions';
import { connect } from "react-redux";

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

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.sendReview(this.props.trip.id, this.state.review)
    }

  

render(){
    const { submitted } = this.props.rideHistory
    return (
        <div className="review-form">
            {submitted?
              <h4>Your review has been posted!</h4> :
              <form onSubmit={this.handleSubmit} >
                  <FormGroup  controlId="review" bssize="large">
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


function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    sendReview: (tripId, review) => dispatch(addReview(tripId, review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Review);