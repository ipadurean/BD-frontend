

export default class Parse {

  static getParams(path) {
    let obj = {}
    let params = path.slice(1).split(/[=&]/)
    for (let i = 0; i < params.length; i+=2){
      obj[params[i]] = params[i+1]
    }
    return obj
  }
  
  static formatDate(date) {
    let arr = date.toString().slice(0, 15).split(' ')
    return arr[0] + ', ' + arr[1] + ' ' + arr[2] + ', ' + arr[3]
  }
}