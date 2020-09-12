import React from 'react';
import { connect } from "react-redux";
import {
  SelectOptionInnerBox,
  OptionBox,
  QuarterBox,
  Quarters
} from '../../styles/StyledSelect';

const StartTimeOptions = (props) => {
  return (
    <SelectOptionInnerBox>
      <FlexRow key='1'>
        <OptionBox onMouseOver={this.setQuarters} data-val='0'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='15'>:15</QuarterBox>
          <QuarterBox data-val='30'>:30</QuarterBox>
          <QuarterBox data-val='45'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='2'>
        <OptionBox onMouseOver={this.setQuarters} data-val='60'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='75'>:15</QuarterBox>
          <QuarterBox data-val='90'>:30</QuarterBox>
          <QuarterBox data-val='105'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='3'>
        <OptionBox onMouseOver={this.setQuarters} data-val='120'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='135'>:15</QuarterBox>
          <QuarterBox data-val='150'>:30</QuarterBox>
          <QuarterBox data-val='165'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='4'>
        <OptionBox onMouseOver={this.setQuarters} data-val='180'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='195'>:15</QuarterBox>
          <QuarterBox data-val='210'>:30</QuarterBox>
          <QuarterBox data-val='225'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='5'>
        <OptionBox onMouseOver={this.setQuarters} data-val='240'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='255'>:15</QuarterBox>
          <QuarterBox data-val='270'>:30</QuarterBox>
          <QuarterBox data-val='285'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='6'>
        <OptionBox onMouseOver={this.setQuarters} data-val='300'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='315'>:15</QuarterBox>
          <QuarterBox data-val='330'>:30</QuarterBox>
          <QuarterBox data-val='345'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='7'>
        <OptionBox onMouseOver={this.setQuarters} data-val='360'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='365'>:15</QuarterBox>
          <QuarterBox data-val='390'>:30</QuarterBox>
          <QuarterBox data-val='405'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='8'>
        <OptionBox onMouseOver={this.setQuarters} data-val='420'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='435'>:15</QuarterBox>
          <QuarterBox data-val='450'>:30</QuarterBox>
          <QuarterBox data-val='465'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='9'>
        <OptionBox onMouseOver={this.setQuarters} data-val='480'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='495'>:15</QuarterBox>
          <QuarterBox data-val='510'>:30</QuarterBox>
          <QuarterBox data-val='525'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='10'>
        <OptionBox onMouseOver={this.setQuarters} data-val='540'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='555'>:15</QuarterBox>
          <QuarterBox data-val='570'>:30</QuarterBox>
          <QuarterBox data-val='585'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='11'>
        <OptionBox onMouseOver={this.setQuarters} data-val='600'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='615'>:15</QuarterBox>
          <QuarterBox data-val='630'>:30</QuarterBox>
          <QuarterBox data-val='645'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='12'>
        <OptionBox onMouseOver={this.setQuarters} data-val='660'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='675'>:15</QuarterBox>
          <QuarterBox data-val='690'>:30</QuarterBox>
          <QuarterBox data-val='705'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='13'>
        <OptionBox onMouseOver={this.setQuarters} data-val='720'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='735'>:15</QuarterBox>
          <QuarterBox data-val='750'>:30</QuarterBox>
          <QuarterBox data-val='765'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='14'>
        <OptionBox onMouseOver={this.setQuarters} data-val='780'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='795'>:15</QuarterBox>
          <QuarterBox data-val='810'>:30</QuarterBox>
          <QuarterBox data-val='825'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='15'>
        <OptionBox onMouseOver={this.setQuarters} data-val='840'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='855'>:15</QuarterBox>
          <QuarterBox data-val='870'>:30</QuarterBox>
          <QuarterBox data-val='885'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='16'>
        <OptionBox onMouseOver={this.setQuarters} data-val='900'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='915'>:15</QuarterBox>
          <QuarterBox data-val='930'>:30</QuarterBox>
          <QuarterBox data-val='945'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='17'>
        <OptionBox onMouseOver={this.setQuarters} data-val='960'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='975'>:15</QuarterBox>
          <QuarterBox data-val='990'>:30</QuarterBox>
          <QuarterBox data-val='1005'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='18'>
        <OptionBox onMouseOver={this.setQuarters} data-val='1020'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='1035'>:15</QuarterBox>
          <QuarterBox data-val='1050'>:30</QuarterBox>
          <QuarterBox data-val='1065'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='19'>
        <OptionBox onMouseOver={this.setQuarters} data-val='1080'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='1095'>:15</QuarterBox>
          <QuarterBox data-val='1110'>:30</QuarterBox>
          <QuarterBox data-val='1125'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='20'>
        <OptionBox onMouseOver={this.setQuarters} data-val='1140'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='1155'>:15</QuarterBox>
          <QuarterBox data-val='1170'>:30</QuarterBox>
          <QuarterBox data-val='1185'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='21'>
        <OptionBox onMouseOver={this.setQuarters} data-val='1200'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='1215'>:15</QuarterBox>
          <QuarterBox data-val='1230'>:30</QuarterBox>
          <QuarterBox data-val='1245'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='22'>
        <OptionBox onMouseOver={this.setQuarters} data-val='1260'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='1275'>:15</QuarterBox>
          <QuarterBox data-val='1290'>:30</QuarterBox>
          <QuarterBox data-val='1305'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='23'>
        <OptionBox onMouseOver={this.setQuarters} data-val='1320'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='1335'>:15</QuarterBox>
          <QuarterBox data-val='1350'>:30</QuarterBox>
          <QuarterBox data-val='1365'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
      <FlexRow key='24'>
        <OptionBox onMouseOver={this.setQuarters} data-val='1380'>
          {}
        </OptionBox>
        <Quarters>
          <QuarterBox data-val='1395'>:15</QuarterBox>
          <QuarterBox data-val='1410'>:30</QuarterBox>
          <QuarterBox data-val='1425'>:45</QuarterBox>
        </Quarters>
      </FlexRow>
    </SelectOptionInnerBox>
  )
}

function mapStateToProps(state) {
  return { home: state.home }
}


export default connect(mapStateToProps, null)(StartTimeOptions);