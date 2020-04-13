import React, { Component } from 'react';
import '../style.css';
import { addReview } from '../ducks/operations';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { StyledContainer } from '../../styles/StyledContainers';
import { ButtonMain } from '../../styles/StyledButtons';

class ReviewForm extends Component {
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
    return !this.state.review.length > 0
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.sendReview(this.props.trip.id, this.state.review + ` (${this.props.auth.user.username})`)
  }

  
  render(){
    const { submitted } = this.props.rideHistory
    return (
      <StyledContainer>
        {submitted?
          <h4>Your review has been posted!</h4> :
          <form id="review" onSubmit={this.handleSubmit} >
            <textarea type="text" onChange={this.handleChange} />
            <ButtonMain type="submit" disabled={this.validateForm()}>Submit</ButtonMain>
          </form>}
      </StyledContainer>
    )
  }
}

ReviewForm.propTypes = {
  submitted: PropTypes.bool
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