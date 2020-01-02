/**
 * 格式化时间
 * @param value
 */
/**
 *
 * @param value
 * @param config {Object} mark, 标记符， hour： 是否需要时间
 * @returns {string}
 */
const formDate = (value, config) => {
  let now = new Date(value);
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let date = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds();
  month < 10 ? month = `0${month}` : month;
  date < 10 ? date = `0${date}` : date;
  hour < 10 ? hour = `0${hour}`: hour;
  minute < 10 ? minute = `0${minute}`: minute;
  seconds < 10 ? seconds = `0${seconds}`: seconds;
  let str = `${year}-${month}-${date}`;
  if(config){
    if(config.mark){
      str = str.replace(/-/g, config.mark)
    }
    if(config.hour){
      str += ` ${hour}:${minute}:${seconds}`
    }
  }
  return str;
};
export {
  formDate
}
