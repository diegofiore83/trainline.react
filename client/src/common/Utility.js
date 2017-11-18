export class Utility {
  static getDelay(time1, time2) {
  
    const time2h = parseInt(time2.split(':')[0], 10)*60;
    const time2m = parseInt(time2.split(':')[1], 10);
    const time1h = parseInt(time1.split(':')[0], 10)*60;
    const time1m = parseInt(time1.split(':')[1], 10);

    const delay = (time2h + time2m) - (time1h + time1m);

    return delay > 0 ? delay + " min late" : "On time";
  }
}
  
export default Utility;