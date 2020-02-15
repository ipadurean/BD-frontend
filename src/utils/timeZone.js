export default class TimeZone {

  static toCentralTime(date){
    let d = new Date(date);
    let difference = d.getTimezoneOffset() - 360;
    let minutes = d.getMinutes();
        d.setMinutes(difference + minutes)
    let newDate = d.toString().slice(0, 24) + " GMT-0600 (Central Standard Time)"
    return newDate
  }

}