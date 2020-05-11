import React, { Component } from 'react';
import '../style.css';
import { addReview } from '../ducks/operations';
import { closeForm } from '../ducks/actions';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { FixedContainer } from '../../styles/StyledContainers';
import { Button3 } from '../../styles/StyledButtons';
import { StyledForm } from '../../styles/StyledForms';
import { Title, Title1 } from '../../styles/StyledText';
import { TextArea1 } from '../../styles/StyledInputs';
import close from '../../utils/assets/close.svg';
import { Close } from '../../styles/StyledButtons';

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
    this.props.sendReview(this.props.rideSummary.tripId, this.state.review + ` (*${this.props.auth.user.username})`)
  }

  closeReview = () => {
    this.props.close()
  }

  
  render(){
    const { submitted, submitting } = this.props.rideSummary
  
    return (
      <FixedContainer>
        <Close onClick={this.closeReview} alt="close" src={close} />
          <StyledForm onSubmit={this.handleSubmit} >
          {submitting ?
            <Title1>Loading...</Title1> :
            submitted ?
            <Title>Your review has been posted!</Title> :
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
    close: () => dispatch(closeForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);