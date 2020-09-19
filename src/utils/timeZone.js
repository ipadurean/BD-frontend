export default class TimeZone {
  static toCentralTime(time) {
    if (time) {
      let date = new Date(time);
      const difference = date.getTimezoneOffset() - 300;
      const minutes = date.getMinutes();
      date.setMinutes(difference + minutes);
      const newDate =
        date.toString().slice(0, 24) + " GMT-0500 (Central Daylight Time)";
      return newDate;
    } else {
      return "undefined";
    }
  }

  static toCentral(time) {
    if (time) {
      let date = new Date(time);
      const difference = date.getTimezoneOffset() - 300;
      const minutes = date.getMinutes();
      date.setMinutes(difference + minutes);
      const newDate =
        date.toString().slice(0, 24) + " GMT-0500 (Central Daylight Time)";
      return new Date(newDate).getTime();
    } else {
      return "undefined";
    }
  }
}