import React, { Component } from 'react';
import { FlexColumn, FixedContainer1, FlexRow1 } from '../../styles/StyledContainers';
import close from '../../utils/assets/close.svg';
import { Close1, Star } from '../../styles/StyledButtons';
import { closeForm } from '../ducks/actions';
import { connect } from "react-redux";
import { addRating } from '../ducks/operations';
import starEmpty from '../../utils/assets/star-empty.svg';
import starSolid from '../../utils/assets/star-solid.svg';
import { Title, Title1 } from '../../styles/StyledText';


class RatingForm extends Component {
  constructor() {
    super()
    this.state = {
      rating: 0
    }
  }


  closeRating = () => {
    this.props.close()
  }

  renderRating = (k) => {
    let i = 1;
    let arr = [];
    while (i <= 5) {
      if (i <= k) arr.push(<Star key={i} className='rating' id={i} alt="star" src={starSolid} />)
      else arr.push(<Star key={i} className='rating' id={i} alt="star" src={starEmpty} />)
      i += 1;
    }
    return arr
  }

  handleChange = (event) => {
    event.target.alt = 'star' &&
      this.setState({
        rating: event.target.id
      })
  }

  resetRating = () => {
    this.setState({
      rating: 0
    })
  }

  handleSubmit = (event) => {
    const { tripId } = this.props.rideSummary
    event.preventDefault();
    this.props.sendRating(tripId, event.target.id);
    this.setState({
      rating: event.target.id
    });
}
 

  render() {
    const { submittingRating, ratingSubmitted } = this.props.rideSummary
    return (
      <FixedContainer1>
        <FlexColumn>
          <Close1 onClick={this.closeRating} alt="close" src={close} />
          {submittingRating ?
            <Title1>Loading...</Title1> :
            ratingSubmitted ?
              <Title>Your rating has been posted!</Title> :
              <FlexRow1 onMouseOver={this.handleChange}
                onMouseOut={this.resetRating}
                onClick={this.handleSubmit}
                style={{ 'margin': '0px 30px 30px 30px' }}>
                {this.renderRating(this.state.rating)}
              </FlexRow1>}
        </FlexColumn>
      </FixedContainer1>
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