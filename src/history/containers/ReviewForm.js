import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../styles/ReviewForm.css';
import { addReview } from '../ducks/operations';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

class ReviewForm extends Component {
  constructor(){
      super()
      this.state = {
          review: ""
      }
  }

  handleChange = (event) => {
    this.setState({
      review: event.target.value + ` (${this.props.auth.user.username})`
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
    console.log(submitted)
   
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

ReviewForm.propTypes = {
  submitted: PropTypes.bool.isRequired
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return {
    sendReview: (tripId, review) => dispatch(addReview(tripId, review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);