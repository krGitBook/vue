export default {
  'device-list': {
    url: '/nop/door-devices',
    method: 'get'
  },
  'device-modify': {
    url: '/nop/door-device',
    method: 'put'
  },
  'device-detail': {
    url: '/nop/door-device',
    method: 'get'
  },
  'device-add': {
    url: '/nop/door-device',
    method: 'post'
  },
  'device-fresh-screen': {
    url: '/nop/door-device/actions/refresh-screen',
    method: 'post'
  },
  'device-sync-token': {
    url: '/nop/door-device/actions/sync-token',
    method: 'post'
  },
  'device-disconnect': {
    url: '/nop/door-device/actions/disconnect',
    method: 'post'
  },
  'device-open-door': {
    url: '/nop/door-device/actions/open',
    method: 'post'
  },
  'device-open-door-token': {
    url: '/nop/door-device/actions/get-token',
    method: 'get'
  },
  'device-reboot-app': {
    url: '/nop/door-device/actions/reboot-app',
    method: 'post'
  },
  'device-reboot-os': {
    url: '/nop/door-device/actions/reboot-os',
    method: 'post'
  },
  'device-set-lock-delay': {
    url: '/nop/door-device/actions/set-lock-delay',
    method: 'post'
  },
  'device-corresponding-permission-group':{
    url: '/nop/door-device/auth-user-groups',
    method: 'get'
  },
  'device-caches':{
    url: '/nop/v2/door-device/device-caches',
    method: 'get'
  },
  'device-delete-cache':{
    url: '/nop/door-device/device-caches',
    method: 'delete'
  },
  'device-get-http-token':{
    url: '/nop/door-device/http-token',
    method: 'get'
  },
  'device-edit-hardwareId':{
    url: '/nop/door-device/hardware-no',
    method: 'put'
  },
  'device-get-upgradelist':{
    url: '/nop/upgrade-package/list',
    method: 'get'
  },
  'device-admin-psd':{
    url: '/nop/door-device/admin-pwds',
    method: 'get'
  },
  'device-upgrade':{
    url: '/nop/door-device/actions/upgrade',
    method: 'post'
  },
  //
  'device-discovery': {
    url: '/nop/door-device/discovery',
    method: 'get'
  },
  'device-auto-status': {
    url: '/nop/door-device/auto-discover',
    method: 'get'
  },
  'device-modify-auto-status': {
    url: '/nop/door-device/auto-discover',
    method: 'post'
  },
  'device-register': {
    url: '/nop/door-device/register',
    method: 'post'
  },
  'device-force-delete': {
    url: '/nop/door-device/discovery',
    method: 'delete'
  },
  'device-delete': {
    url: '/nop/door-device',
    method: 'delete'
  },
  'device-factory-data-reset': {
    url: '/nop/door-device/factory-reset',
    method: 'post'
  }


}
