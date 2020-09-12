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


const StartTimeOptions = (props) => {

  const { quarters, end } = props.home

  const setQuarters = (event) => {
    props.showQuarters(parseInt(event.target.dataset.val))
  }
  
  return (
    <SelectOptionInnerBox>
      { (45 < (end || 1440)) && <FlexRow key='1'>
        <OptionBox onMouseOver={setQuarters} data-val='0'>
          00:00
        </OptionBox>
        { quarters === 0 && <Quarters>
          { 15 < ((end || 1485) - 45) && <QuarterBox data-val='15'>:15</QuarterBox>}
          { 30 < ((end || 1485) - 45) && <QuarterBox data-val='30'>:30</QuarterBox>}
          { 45 < ((end || 1485) - 45) && <QuarterBox data-val='45'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (105 < (end || 1440)) && <FlexRow key='2'>
        <OptionBox onMouseOver={setQuarters} data-val='60'>
          01:00
        </OptionBox>
        { quarters === 60 && <Quarters>
          { 75 < ((end || 1485) - 45) && <QuarterBox data-val='75'>:15</QuarterBox>}
          { 90 < ((end || 1485) - 45) && <QuarterBox data-val='90'>:30</QuarterBox>}
          { 105 < ((end || 1485) - 45) && <QuarterBox data-val='105'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (165 < (end || 1440)) && <FlexRow key='3'>
        <OptionBox onMouseOver={setQuarters} data-val='120'>
          02:00
        </OptionBox>
        { quarters === 120 && <Quarters>
          { 135 < ((end || 1485) - 45) && <QuarterBox data-val='135'>:15</QuarterBox>}
          { 150 < ((end || 1485) - 45) && <QuarterBox data-val='150'>:30</QuarterBox>}
          { 165 < ((end || 1485) - 45) && <QuarterBox data-val='165'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (225 < (end || 1440)) && <FlexRow key='4'>
        <OptionBox onMouseOver={setQuarters} data-val='180'>
          03:00
        </OptionBox>
        { quarters === 180 && <Quarters>
          { 195 < ((end || 1485) - 45) && <QuarterBox data-val='195'>:15</QuarterBox>}
          { 210 < ((end || 1485) - 45) && <QuarterBox data-val='210'>:30</QuarterBox>}
          { 225 < ((end || 1485) - 45) && <QuarterBox data-val='225'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (285 < (end || 1440)) && <FlexRow key='5'>
        <OptionBox onMouseOver={setQuarters} data-val='240'>
          04:00
        </OptionBox>
        { quarters === 240 && <Quarters>
          { 255 < ((end || 1485) - 45) && <QuarterBox data-val='255'>:15</QuarterBox>}
          { 270 < ((end || 1485) - 45) && <QuarterBox data-val='270'>:30</QuarterBox>}
          { 285 < ((end || 1485) - 45) && <QuarterBox data-val='285'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (345 < (end || 1440)) && <FlexRow key='6'>
        <OptionBox onMouseOver={setQuarters} data-val='300'>
          05:00
        </OptionBox>
        { quarters === 300 && <Quarters>
          { 315 < ((end || 1485) - 45) && <QuarterBox data-val='315'>:15</QuarterBox>}
          { 330 < ((end || 1485) - 45) && <QuarterBox data-val='330'>:30</QuarterBox>}
          { 345 < ((end || 1485) - 45) && <QuarterBox data-val='345'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (405 < (end || 1440)) && <FlexRow key='7'>
        <OptionBox onMouseOver={setQuarters} data-val='360'>
          06:00
        </OptionBox>
        { quarters === 360 && <Quarters>
          { 365 < ((end || 1485) - 45) && <QuarterBox data-val='365'>:15</QuarterBox>}
          { 390 < ((end || 1485) - 45) && <QuarterBox data-val='390'>:30</QuarterBox>}
          { 405 < ((end || 1485) - 45) && <QuarterBox data-val='405'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (465 < (end || 1440)) && <FlexRow key='8'>
        <OptionBox onMouseOver={setQuarters} data-val='420'>
          07:00
        </OptionBox>
        { quarters === 420 && <Quarters>
          { 435 < ((end || 1485) - 45) && <QuarterBox data-val='435'>:15</QuarterBox>}
          { 450 < ((end || 1485) - 45) && <QuarterBox data-val='450'>:30</QuarterBox>}
          { 465 < ((end || 1485) - 45) && <QuarterBox data-val='465'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (525 < (end || 1440)) && <FlexRow key='9'>
        <OptionBox onMouseOver={setQuarters} data-val='480'>
          08:00
        </OptionBox>
        { quarters === 480 && <Quarters>
          { 495 < ((end || 1485) - 45) && <QuarterBox data-val='495'>:15</QuarterBox>}
          { 510 < ((end || 1485) - 45) && <QuarterBox data-val='510'>:30</QuarterBox>}
          { 525 < ((end || 1485) - 45) && <QuarterBox data-val='525'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (585 < (end || 1440)) && <FlexRow key='10'>
        <OptionBox onMouseOver={setQuarters} data-val='540'>
          09:00
        </OptionBox>
        { quarters === 540 && <Quarters>
          { 555 < ((end || 1485) - 45) && <QuarterBox data-val='555'>:15</QuarterBox>}
          { 570 < ((end || 1485) - 45) && <QuarterBox data-val='570'>:30</QuarterBox>}
          { 585 < ((end || 1485) - 45) && <QuarterBox data-val='585'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (645 < (end || 1440)) && <FlexRow key='11'>
        <OptionBox onMouseOver={setQuarters} data-val='600'>
          10:00
        </OptionBox>
        { quarters === 600 && <Quarters>
          { 615 < ((end || 1485) - 45) && <QuarterBox data-val='615'>:15</QuarterBox>}
          { 630 < ((end || 1485) - 45) && <QuarterBox data-val='630'>:30</QuarterBox>}
          { 645 < ((end || 1485) - 45) && <QuarterBox data-val='645'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (705 < (end || 1440)) && <FlexRow key='12'>
        <OptionBox onMouseOver={setQuarters} data-val='660'>
          11:00
        </OptionBox>
        { quarters === 660 && <Quarters>
          { 675 < ((end || 1485) - 45) && <QuarterBox data-val='675'>:15</QuarterBox>}
          { 690 < ((end || 1485) - 45) && <QuarterBox data-val='690'>:30</QuarterBox>}
          { 705 < ((end || 1485) - 45) && <QuarterBox data-val='705'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (765 < (end || 1440)) && <FlexRow key='13'>
        <OptionBox onMouseOver={setQuarters} data-val='720'>
          12:00
        </OptionBox>
        { quarters === 720 && <Quarters>
          { 735 < ((end || 1485) - 45) && <QuarterBox data-val='735'>:15</QuarterBox>}
          { 750 < ((end || 1485) - 45) && <QuarterBox data-val='750'>:30</QuarterBox>}
          { 765 < ((end || 1485) - 45) && <QuarterBox data-val='765'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (825 < (end || 1440)) && <FlexRow key='14'>
        <OptionBox onMouseOver={setQuarters} data-val='780'>
          13:00
        </OptionBox>
        { quarters === 780 && <Quarters>
          { 795 < ((end || 1485) - 45) && <QuarterBox data-val='795'>:15</QuarterBox>}
          { 810 < ((end || 1485) - 45) && <QuarterBox data-val='810'>:30</QuarterBox>}
          { 825 < ((end || 1485) - 45) && <QuarterBox data-val='825'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (885 < (end || 1440)) && <FlexRow key='15'>
        <OptionBox onMouseOver={setQuarters} data-val='840'>
          14:00
        </OptionBox>
        { quarters === 840 && <Quarters>
          { 855 < ((end || 1485) - 45) && <QuarterBox data-val='855'>:15</QuarterBox>}
          { 870 < ((end || 1485) - 45) && <QuarterBox data-val='870'>:30</QuarterBox>}
          { 885 < ((end || 1485) - 45) && <QuarterBox data-val='885'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (945 < (end || 1440)) && <FlexRow key='16'>
        <OptionBox onMouseOver={setQuarters} data-val='900'>
          15:00
        </OptionBox>
        { quarters === 900 && <Quarters>
          { 915 < ((end || 1485) - 45) && <QuarterBox data-val='915'>:15</QuarterBox>}
          { 930 < ((end || 1485) - 45) && <QuarterBox data-val='930'>:30</QuarterBox>}
          { 945 < ((end || 1485) - 45) && <QuarterBox data-val='945'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (1005 < (end || 1440)) && <FlexRow key='17'>
        <OptionBox onMouseOver={setQuarters} data-val='960'>
          16:00
        </OptionBox>
        { quarters === 960 && <Quarters>
          { 975 < ((end || 1485) - 45) && <QuarterBox data-val='975'>:15</QuarterBox>}
          { 990 < ((end || 1485) - 45) && <QuarterBox data-val='990'>:30</QuarterBox>}
          { 1005 < ((end || 1485) - 45) && <QuarterBox data-val='1005'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (1065 < (end || 1440)) && <FlexRow key='18'>
        <OptionBox onMouseOver={setQuarters} data-val='1020'>
          17:00
        </OptionBox>
        { quarters === 1020 && <Quarters>
          { 1035 < ((end || 1485) - 45) && <QuarterBox data-val='1035'>:15</QuarterBox>}
          { 1050 < ((end || 1485) - 45) && <QuarterBox data-val='1050'>:30</QuarterBox>}
          { 1065 < ((end || 1485) - 45) && <QuarterBox data-val='1065'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (1125 < (end || 1440)) && <FlexRow key='19'>
        <OptionBox onMouseOver={setQuarters} data-val='1080'>
          18:00
        </OptionBox>
        { quarters === 1080 && <Quarters>
          { 1095 < ((end || 1485) - 45) && <QuarterBox data-val='1095'>:15</QuarterBox>}
          { 1110 < ((end || 1485) - 45) && <QuarterBox data-val='1110'>:30</QuarterBox>}
          { 1125 < ((end || 1485) - 45) && <QuarterBox data-val='1125'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (1185 < (end || 1440)) && <FlexRow key='20'>
        <OptionBox onMouseOver={setQuarters} data-val='1140'>
          19:00
        </OptionBox>
        { quarters === 1140 && <Quarters>
          { 1155 < ((end || 1485) - 45) && <QuarterBox data-val='1155'>:15</QuarterBox>}
          { 1170 < ((end || 1485) - 45) && <QuarterBox data-val='1170'>:30</QuarterBox>}
          { 1185 < ((end || 1485) - 45) && <QuarterBox data-val='1185'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (1245 < (end || 1440)) && <FlexRow key='21'>
        <OptionBox onMouseOver={setQuarters} data-val='1200'>
          20:00
        </OptionBox>
        { quarters === 1200 && <Quarters>
          { 1215 < ((end || 1485) - 45) && <QuarterBox data-val='1215'>:15</QuarterBox>}
          { 1230 < ((end || 1485) - 45) && <QuarterBox data-val='1230'>:30</QuarterBox>}
          { 1245 < ((end || 1485) - 45) && <QuarterBox data-val='1245'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (1305 < (end || 1440)) && <FlexRow key='22'>
        <OptionBox onMouseOver={setQuarters} data-val='1260'>
          21:00
        </OptionBox>
        { quarters === 1260 && <Quarters>
          { 1275 < ((end || 1485) - 45) && <QuarterBox data-val='1275'>:15</QuarterBox>}
          { 1290 < ((end || 1485) - 45) && <QuarterBox data-val='1290'>:30</QuarterBox>}
          { 1305 < ((end || 1485) - 45) && <QuarterBox data-val='1305'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (1365 < (end || 1440)) && <FlexRow key='23'>
        <OptionBox onMouseOver={setQuarters} data-val='1320'>
          22:00
        </OptionBox>
        { quarters === 1320 && <Quarters>
          { 1335 < ((end || 1485) - 45) && <QuarterBox data-val='1335'>:15</QuarterBox>}
          { 1350 < ((end || 1485) - 45) && <QuarterBox data-val='1350'>:30</QuarterBox>}
          { 1365 < ((end || 1485) - 45) && <QuarterBox data-val='1365'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
      { (1425 < (end || 1440)) && <FlexRow key='24'>
        <OptionBox onMouseOver={setQuarters} data-val='1380'>
          23:00
        </OptionBox>
        { quarters === 1380 && <Quarters>
          { 1395 < ((end || 1485) - 45) && <QuarterBox data-val='1395'>:15</QuarterBox>}
          { 1410 < ((end || 1485) - 45) && <QuarterBox data-val='1410'>:30</QuarterBox>}
          { 1425 < ((end || 1485) - 45) && <QuarterBox data-val='1425'>:45</QuarterBox>}
        </Quarters>}
      </FlexRow> }
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

export default connect(mapStateToProps, mapDispatchToProps)(StartTimeOptions);