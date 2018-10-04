import http from './public'
// 登陆
export const userLogin = (params) => {
  return http.Post('/member/login', params)
}
// 退出登陆
export const loginOut = (params) => {
  return http.Get('/member/loginOut', params)
}
// 用户信息
export const userInfo = (params) => {
  return http.Get('/member/checkLogin', params)
}
// 注册账号
export const register = (params) => {
  return http.Post('/member/register', params)
}
// 上传图片
export const upload = (params) => {
  return http.Post('/member/imgaeUpload', params)
}
// 修改头像
export const updateheadimage = (params) => {
  return http.Post('/member/updateheadimage', params)
}
// 捐赠列表
export const thanksList = (params) => {
  return http.Get('/member/thanks', params)
}
// 首页接口
export const productHome = (params) => {
  return http.Get('/goods/home', params)
}
// 首页接口
export const navList = (params) => {
  return http.Get('/goods/navList', params)
}
// 推荐板块
export const recommend = (params) => {
  return http.Get('/goods/recommend', params)
}
// 捐赠板块
export const thank = (params) => {
  return http.Get('/goods/thank', params)
}
// 极验验证码
export const geetest = (params) => {
  return http.Get('/member/geetestInit?t=' + (new Date()).getTime(), params)
}
