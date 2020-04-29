import React from 'react';
import { DateOuter, DateInner } from '../styles/StyledCalendar';


export default class Calendar {

  static createMonth(daySelected, month) {

    const now = new Date();
    const date = new Date(now.getFullYear(), month, 1);

    let select = new Date(now.getFullYear(), month, 1);
    select.setTime(daySelected);
    let daysArr = [];
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    let d = 1;
    for (let i = 0; i < date.getDay(); i++) {
      daysArr.push(
        <DateOuter key={i + 100}>
          <DateInner disabled></DateInner>
        </DateOuter>
      )
    }
    while (d <= daysInMonth) {
      daySelected && d === select.getDate() ?
        daysArr.push(
          <DateOuter key={d} data-calendar-date={date.setDate(d)}>
            <DateInner selected>{d}</DateInner>
          </DateOuter>
        ) :
        d === now.getDate() && now.getMonth() === date.getMonth() ?
          daysArr.push(
            <DateOuter key={d} data-calendar-date={date.setDate(d)}>
              <DateInner today className='active'>{d}</DateInner>
            </DateOuter>) :
          date.setDate(d) < now.getTime() ?
            daysArr.push(
              <DateOuter key={d} data-calendar-date={date.setDate(d)}>
                <DateInner disabled>{d}</DateInner>
              </DateOuter>
            ) :
            daysArr.push(
              <DateOuter key={d} data-calendar-date={date.setDate(d)}>
                <DateInner className='active'>{d}</DateInner>
              </DateOuter>
            )
      d++
    }
    return daysArr;
  }

}