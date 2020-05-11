import React, { Component } from 'react';
import { FixedContainer } from '../../styles/StyledContainers';
import close from '../../utils/assets/close.svg';
import { Close } from '../../styles/StyledButtons';
import { closeForm } from '../ducks/actions';
import { connect } from "react-redux";
import { addRating } from '../ducks/operations';

class RatingForm extends Component {


  closeRating = () => {
    this.props.close()
  }
 

  render() {
    return (
      <FixedContainer>
        <Close onClick={this.closeRating} alt="close" src={close} />
      </FixedContainer>
    )
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    sendRating: (tripId, rating) => dispatch(addRating(tripId, rating)),
    close: () => dispatch(closeForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RatingForm);