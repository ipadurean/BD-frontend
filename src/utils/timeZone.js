export default class TimeZone {

  static toCentralTime(date) {
    if (date) {
      let d = new Date(date);
      const difference = d.getTimezoneOffset() - 300;
      const minutes = d.getMinutes();
      d.setMinutes(difference + minutes)
      const newDate = d.toString().slice(0, 24) + " GMT-0500 (Central Daylight Time)"
      return newDate
    } else {
      return 'undefined'
    }
  }

}