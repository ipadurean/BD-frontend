import React, { Component } from 'react';
import '../style.css';
import { addReview } from '../ducks/operations';
import { closeReview } from '../ducks/actions';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { FixedContainer } from '../../styles/StyledContainers';
import { Button3 } from '../../styles/StyledButtons';
import { StyledForm } from '../../styles/StyledForms';
import { Title1, TextArea1 } from '../../styles/StyledText';
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
    this.props.sendReview(this.props.rideSummary.tripId, this.state.review + ` (${this.props.auth.user.username})`)
  }

  closeReview = () => {
    this.props.close()
  }

  
  render(){
    const { submitted, submitting } = this.props.rideSummary
  
    return (
      <FixedContainer className="normal">
        <StyledForm onSubmit={this.handleSubmit} >
          <img onClick={this.closeReview} alt="close" id="close" src={close} />
          {submitting ?
            <Title1>Loading...</Title1> :
            submitted ?
            <Title1>Your review has been posted!</Title1> :
              <>
                <TextArea1 type="text" onChange={this.handleChange} />
                <Button3 type="submit" disabled={this.validateForm()}>Submit</Button3>
              </>}
        </StyledForm>
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
    sendReview: (tripId, review) => dispatch(addReview(tripId, review)),
    close: () => dispatch(closeReview())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);