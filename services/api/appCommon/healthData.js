import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 获取全部用户动态
function dynList (params) {
  return doGet(params, url.dyn_list)
}
// 点赞
function dynLike (params) {
  return doPost(params, url.dyn_like)
}
// 点阅
function dynRead (params) {
  return doPost(params, url.dyn_read)
}
// 用户动态评论
function dynComment (params) {
  return doPost(params, url.dyn_comment)
}
// 用户动态评论回复
function dynCommentReply (params) {
  return doPost(params, url.dyn_commentReply)
}
// 获取未读的用户动态评论回复数
function dynCountUnreadComment (params) {
  return doGet(params, url.dyn_countUnreadComment)
}
// 获取未读的用户动态评论回复
function dynListUnreadCommentReply (params) {
  return doGet(params, url.dyn_listUnreadCommentReply)
}
// 获取全部用户动态评论回复
function dynListCommentReply (params) {
  return doGet(params, url.dyn_listCommentReply)
}
// 用户动态评论删除
function dynCommentDelete (params) {
  return doPost(params, url.dyn_commentDelete)
}
// 获取未处理的用户动态和未读评论回复消息数量
function dynCountUnHandle (params) {
  return doGet(params, url.dyn_countUnHandle)
}
// 获取是否五类医生
function orgDoctorGetIsTypeFifthDoctor (params) {
  return doGet(params, url.org_doctor_getIsTypeFifthDoctor)
}
// 获取社区体系患者动态数据列表
function dynCmntList (params) {
  return doGet(params, url.dyn_cmntList)
}

export {
  dynList,
  dynLike,
  dynRead,
  dynComment,
  dynCommentReply,
  dynCountUnreadComment,
  dynListUnreadCommentReply,
  dynListCommentReply,
  dynCommentDelete,
  dynCountUnHandle,
  orgDoctorGetIsTypeFifthDoctor,
  dynCmntList
}
