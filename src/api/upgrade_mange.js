//

export default {
  // 
  'upgrade-manage-list': {
    url: "/nop/upgrade-packages",
    method: "get"
  },
  'upgrade-manage-add': {
    url: "/nop/upgrade-package",
    method: "post"
  },
  'upgrade-manage-delete': {
    url: "/nop/upgrade-package",
    method: "delete"
  },
  // 发布版本
  'upgrade-manage-multi': {
    url: "/nop/device-plan",
    method: "post"
  },
  //设备升级
  'device-plan-door-devices': {
    url: "/nop/device-plan/door-devices",
    method: "get"
  },
  //计划升级列表接口
  'device-plan-find-list': {
    url: "/nop/device-plan/find",
    method: "get"
  },
  // 撤回升级计划
  'device-plan-withdraw-plan':{
    url: "/nop/device-plan/cancel",
    method: "put"
  },
  // 获取设备列表
  'device-plan-equipment-list':{
    url: "/nop/device-plan/get",
    method: "get"
  },
  // 升级日志列表
  'device-plan-upgrade-log':{
    url: "/nop/upgrade-package/log",
    method: "get"
  }




};
