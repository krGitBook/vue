export default (str) =>{
  str = str ||'';
  return str.replace(/^\s+|\s+$/g,"")
}
