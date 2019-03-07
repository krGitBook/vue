//公共的api
export default {
  //获取极验参数
  'login-gtParams': {
    url: "/nop/common/topspeed-captcha",
    method: "get"
  },
  'login-secondVerifyUrl': {
    url: "/nop/common/topspeed-captcha-verify",
    method: "post"
  },
  login: {
    url: "/nop/login",
    method: "post"
  },
  'logout': {
    url: '/nop/logout',
    method: 'post'
  }

};
