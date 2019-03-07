// 获取枚举参数
import http from '../http';
/**
* @method 获取后台的枚举数据的公共接口方法
* @param {String} enumKey 后台枚举接口需要传输的路径 
* @param {Function} callbacK 获取数据后的回调
* @returns 没有返回值
*/
export default (enumKey,callbacK) => {
  http
    .get("utils-enum", {enumKey})
    .then(res => {
      callbacK(res)
    })
    .catch(error => {
     
    });
}