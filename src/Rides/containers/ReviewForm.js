import React, { Component } from 'react';
import '../style.css';
import { addReview } from '../ducks/operations';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { FixedContainer } from '../../styles/StyledContainers';
import { Button1 } from '../../styles/StyledButtons';
import { StyledForm } from '../../styles/StyledForms';
import close from '../../utils/assets/close.svg';

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
      <FixedContainer>
        {submitted?
          <h4>Your review has been posted!</h4> :
          <StyledForm id="review" onSubmit={this.handleSubmit} >
            <img style={{ 'width': '15px', 'float': 'right', 'margin':'3px' }} onClick={this.cancelReview} alt="close" id="close" src={close} />
            <textarea type="text" onChange={this.handleChange} />
            <Button1 type="submit" disabled={this.validateForm()}>Submit</Button1>
          </StyledForm>}
      </FixedContainer>
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