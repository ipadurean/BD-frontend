import React from 'react';
import { connect } from "react-redux";
import {
  SelectOptionInnerBox,
  OptionBox,
  QuarterBox,
  Quarters
} from '../../styles/StyledSelect';
import { FlexRow } from '../../styles/StyledContainers';
import { showQuarters } from '../ducks/actions';

const EndTimeOptions = (props) => {

  const { quarters, start } = props.home

  const setQuarters = (event) => {
    props.showQuarters(parseInt(event.target.dataset.val))
  }


  return (
    <SelectOptionInnerBox>
      {(60 >= (start + 15)) && <FlexRow key='2'>
        <OptionBox onMouseOver={setQuarters} data-val='60'>
          01:00
        </OptionBox>
        {quarters === 60 && <Quarters>
         {30 > start && <QuarterBox data-val='75'>:15</QuarterBox>}
         {45 > start && <QuarterBox data-val='90'>:30</QuarterBox>}
         {60 > start && <QuarterBox data-val='105'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(120 >= (start + 15)) && <FlexRow key='3'>
        <OptionBox onMouseOver={setQuarters} data-val='120'>
          02:00
        </OptionBox>
        {quarters === 120 && <Quarters>
         {90 > start && <QuarterBox data-val='135'>:15</QuarterBox>}
         {105 > start && <QuarterBox data-val='150'>:30</QuarterBox>}
         {120 > start && <QuarterBox data-val='165'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(180 >= (start + 15)) && <FlexRow key='4'>
        <OptionBox onMouseOver={setQuarters} data-val='180'>
          03:00
        </OptionBox>
        {quarters === 180 && <Quarters>
         {150 > start && <QuarterBox data-val='195'>:15</QuarterBox>}
         {165 > start && <QuarterBox data-val='210'>:30</QuarterBox>}
         {180 > start && <QuarterBox data-val='225'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(240 >= (start + 15)) && <FlexRow key='5'>
        <OptionBox onMouseOver={setQuarters} data-val='240'>
          04:00
        </OptionBox>
        {quarters === 240 && <Quarters>
         {210 > start && <QuarterBox data-val='255'>:15</QuarterBox>}
         {225 > start && <QuarterBox data-val='270'>:30</QuarterBox>}
         {240 > start && <QuarterBox data-val='285'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(300 >= (start + 15)) && <FlexRow key='6'>
        <OptionBox onMouseOver={setQuarters} data-val='300'>
          05:00
        </OptionBox>
        {quarters === 300 && <Quarters>
         {270 > start && <QuarterBox data-val='315'>:15</QuarterBox>}
         {285 > start && <QuarterBox data-val='330'>:30</QuarterBox>}
         {300 > start && <QuarterBox data-val='345'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(360 >= (start + 15)) && <FlexRow key='7'>
        <OptionBox onMouseOver={setQuarters} data-val='360'>
          06:00
        </OptionBox>
        {quarters === 360 && <Quarters>
         {330 > start && <QuarterBox data-val='375'>:15</QuarterBox>}
         {345 > start && <QuarterBox data-val='390'>:30</QuarterBox>}
         {360 > start && <QuarterBox data-val='405'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(420 >= (start + 15)) && <FlexRow key='8'>
        <OptionBox onMouseOver={setQuarters} data-val='420'>
          07:00
        </OptionBox>
        {quarters === 420 && <Quarters>
         {390 > start && <QuarterBox data-val='435'>:15</QuarterBox>}
         {405 > start && <QuarterBox data-val='450'>:30</QuarterBox>}
         {420 > start && <QuarterBox data-val='465'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(480 >= (start + 15)) && <FlexRow key='9'>
        <OptionBox onMouseOver={setQuarters} data-val='480'>
          08:00
        </OptionBox>
        {quarters === 480 && <Quarters>
         {450 > start && <QuarterBox data-val='495'>:15</QuarterBox>}
         {465 > start && <QuarterBox data-val='510'>:30</QuarterBox>}
         {480 > start && <QuarterBox data-val='525'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(540 >= (start + 15)) && <FlexRow key='10'>
        <OptionBox onMouseOver={setQuarters} data-val='540'>
          09:00
        </OptionBox>
        {quarters === 540 && <Quarters>
         {510 > start && <QuarterBox data-val='555'>:15</QuarterBox>}
         {525 > start && <QuarterBox data-val='570'>:30</QuarterBox>}
         {540 > start && <QuarterBox data-val='585'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(600 >= (start + 15)) && <FlexRow key='11'>
        <OptionBox onMouseOver={setQuarters} data-val='600'>
          10:00
        </OptionBox>
        {quarters === 600 && <Quarters>
         {570 > start && <QuarterBox data-val='615'>:15</QuarterBox>}
         {585 > start && <QuarterBox data-val='630'>:30</QuarterBox>}
         {600 > start && <QuarterBox data-val='645'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(660 >= (start + 15)) && <FlexRow key='12'>
        <OptionBox onMouseOver={setQuarters} data-val='660'>
          11:00
        </OptionBox>
        {quarters === 660 && <Quarters>
         {630 > start && <QuarterBox data-val='675'>:15</QuarterBox>}
         {645 > start && <QuarterBox data-val='690'>:30</QuarterBox>}
         {660 > start && <QuarterBox data-val='705'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(720 >= (start + 15)) && <FlexRow key='13'>
        <OptionBox onMouseOver={setQuarters} data-val='720'>
          12:00
        </OptionBox>
        {quarters === 720 && <Quarters>
         {690 > start && <QuarterBox data-val='735'>:15</QuarterBox>}
         {705 > start && <QuarterBox data-val='750'>:30</QuarterBox>}
         {720 > start && <QuarterBox data-val='765'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(780 >= (start + 15)) && <FlexRow key='14'>
        <OptionBox onMouseOver={setQuarters} data-val='780'>
          13:00
        </OptionBox>
        {quarters === 780 && <Quarters>
         {750 > start && <QuarterBox data-val='795'>:15</QuarterBox>}
         {765 > start && <QuarterBox data-val='810'>:30</QuarterBox>}
         {780 > start && <QuarterBox data-val='825'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(840 >= (start + 15)) && <FlexRow key='15'>
        <OptionBox onMouseOver={setQuarters} data-val='840'>
          14:00
        </OptionBox>
        {quarters === 840 && <Quarters>
         {810 > start && <QuarterBox data-val='855'>:15</QuarterBox>}
         {825 > start && <QuarterBox data-val='870'>:30</QuarterBox>}
         {840 > start && <QuarterBox data-val='885'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(900 >= (start + 15)) && <FlexRow key='16'>
        <OptionBox onMouseOver={setQuarters} data-val='900'>
          15:00
        </OptionBox>
        {quarters === 900 && <Quarters>
         {870 > start && <QuarterBox data-val='915'>:15</QuarterBox>}
         {885 > start && <QuarterBox data-val='930'>:30</QuarterBox>}
         {900 > start && <QuarterBox data-val='945'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(960 >= (start + 15)) && <FlexRow key='17'>
        <OptionBox onMouseOver={setQuarters} data-val='960'>
          16:00
        </OptionBox>
        {quarters === 960 && <Quarters>
         {930 > start && <QuarterBox data-val='975'>:15</QuarterBox>}
         {945 > start && <QuarterBox data-val='990'>:30</QuarterBox>}
         {960 > start && <QuarterBox data-val='1005'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(1020 >= (start + 15)) && <FlexRow key='18'>
        <OptionBox onMouseOver={setQuarters} data-val='1020'>
          17:00
        </OptionBox>
        {quarters === 1020 && <Quarters>
         {990 > start && <QuarterBox data-val='1035'>:15</QuarterBox>}
         {1005 > start && <QuarterBox data-val='1050'>:30</QuarterBox>}
         {1020 > start && <QuarterBox data-val='1065'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(1080 >= (start + 15)) && <FlexRow key='19'>
        <OptionBox onMouseOver={setQuarters} data-val='1080'>
          18:00
        </OptionBox>
        {quarters === 1080 && <Quarters>
         {1050 > start && <QuarterBox data-val='1095'>:15</QuarterBox>}
         {1065 > start && <QuarterBox data-val='1110'>:30</QuarterBox>}
         {1080 > start && <QuarterBox data-val='1125'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(1140 >= (start + 15)) && <FlexRow key='20'>
        <OptionBox onMouseOver={setQuarters} data-val='1140'>
          19:00
        </OptionBox>
        {quarters === 1140 && <Quarters>
         {1110 > start && <QuarterBox data-val='1155'>:15</QuarterBox>}
         {1125 > start && <QuarterBox data-val='1170'>:30</QuarterBox>}
         {1140 > start && <QuarterBox data-val='1185'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(1200 >= (start + 15)) && <FlexRow key='21'>
        <OptionBox onMouseOver={setQuarters} data-val='1200'>
          20:00
        </OptionBox>
        {quarters === 1200 && <Quarters>
         {1170 > start && <QuarterBox data-val='1215'>:15</QuarterBox>}
         {1185 > start && <QuarterBox data-val='1230'>:30</QuarterBox>}
         {1200 > start && <QuarterBox data-val='1245'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(1260 >= (start + 15)) && <FlexRow key='22'>
        <OptionBox onMouseOver={setQuarters} data-val='1260'>
          21:00
        </OptionBox>
        {quarters === 1260 && <Quarters>
         {1230 > start && <QuarterBox data-val='1275'>:15</QuarterBox>}
         {1245 > start && <QuarterBox data-val='1290'>:30</QuarterBox>}
         {1260 > start && <QuarterBox data-val='1305'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(1320 >= (start + 15)) && <FlexRow key='23'>
        <OptionBox onMouseOver={setQuarters} data-val='1320'>
          22:00
        </OptionBox>
        {quarters === 1320 && <Quarters>
         {1290 > start && <QuarterBox data-val='1335'>:15</QuarterBox>}
         {1305 > start && <QuarterBox data-val='1350'>:30</QuarterBox>}
         {1320 > start && <QuarterBox data-val='1365'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(1380 >= (start + 15)) && <FlexRow key='24'>
        <OptionBox onMouseOver={setQuarters} data-val='1380'>
          23:00
        </OptionBox>
        {quarters === 1380 && <Quarters>
         {1350 > start && <QuarterBox data-val='1395'>:15</QuarterBox>}
         {1365 > start && <QuarterBox data-val='1410'>:30</QuarterBox>}
         {1380 > start && <QuarterBox data-val='1425'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow>}
      {(1440 >= (start + 15)) && <FlexRow key='25'>
        <OptionBox onMouseOver={setQuarters} data-val='1440'>
          00:00 + 1 day
        </OptionBox>
        {quarters === 1440 && <Quarters>
         {1410 > start && <QuarterBox data-val='1455'>:15</QuarterBox>}
         {1425 > start && <QuarterBox data-val='1470'>:30</QuarterBox>}
         {1440 > start && <QuarterBox data-val='1485'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      {(1500 >= (start + 15)) && <FlexRow key='26'>
        <OptionBox onMouseOver={setQuarters} data-val='1500'>
          01:00 + 1 day
        </OptionBox>
        {quarters === 1500 && <Quarters>
         {1470 > start && <QuarterBox data-val='1515'>:15</QuarterBox>}
         {1485 > start && <QuarterBox data-val='1530'>:30</QuarterBox>}
         {1500> start && <QuarterBox data-val='1545'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      {(1560 >= (start + 15)) && <FlexRow key='27'>
        <OptionBox onMouseOver={setQuarters} data-val='1560'>
          02:00 + 1 day
        </OptionBox>
        {quarters === 1560 && <Quarters>
          <QuarterBox data-val='1575'>:15</QuarterBox>
          <QuarterBox data-val='1590'>:30</QuarterBox>
          <QuarterBox data-val='1605'>:45</QuarterBox>
        </Quarters>}
      </FlexRow>}
      {(1620 >= (start + 15)) && <FlexRow key='28'>
        <OptionBox onMouseOver={setQuarters} data-val='1620'>
          03:00 + 1 day
        </OptionBox>
        {quarters === 1620 && <Quarters>
          <QuarterBox data-val='1635'>:15</QuarterBox>
          <QuarterBox data-val='1650'>:30</QuarterBox>
          <QuarterBox data-val='1665'>:45</QuarterBox>
        </Quarters>}
      </FlexRow>}
      {(1680 >= (start + 15)) && <FlexRow key='29'>
        <OptionBox onMouseOver={setQuarters} data-val='1680'>
          04:00 + 1 day
        </OptionBox>
        {quarters === 1680 && <Quarters>
          <QuarterBox data-val='1695'>:15</QuarterBox>
          <QuarterBox data-val='1710'>:30</QuarterBox>
          <QuarterBox data-val='1725'>:45</QuarterBox>
        </Quarters>}
      </FlexRow>}
      {(1740 >= (start + 15)) && <FlexRow key='30'>
        <OptionBox onMouseOver={setQuarters} data-val='1740'>
          05:00 + 1 day
        </OptionBox>
        {quarters === 1740 && <Quarters>
          <QuarterBox data-val='1755'>:15</QuarterBox>
          <QuarterBox data-val='1770'>:30</QuarterBox>
          <QuarterBox data-val='1785'>:45</QuarterBox>
        </Quarters>}
      </FlexRow>}
    </SelectOptionInnerBox>
  )
}


function mapStateToProps(state) {
  return { home: state.home }
}

function mapDispatchToProps(dispatch) {
  return {
    showQuarters: (value) => dispatch(showQuarters(value)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EndTimeOptions);