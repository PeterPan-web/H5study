
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 提交完善报告
function bsQuarterlyReportSaveOrUpdate (params) {
  return doPost(params, url.bs_quarterlyReport_saveOrUpdate)
}

// 详情
function bsQuarterlyReportDetail (params) {
  return doGet(params, url.bs_quarterlyReport_detail)
}

// 获取报告列表
function bsQuarterlyReportList (params) {
  return doGet(params, url.bs_quarterlyReport_list)
}

// 季度控糖报告评论删除
function bsQuarterlyReportCommentDelete (params) {
  return doPost(params, url.bs_quarterlyReport_commentDelete)
}
// 季度控糖报告评论
function bsQuarterlyReportComment (params) {
  return doPost(params, url.bs_quarterlyReport_comment)
}
// 季度控糖报告评论回复
function bsQuarterlyReportCommentReply (params) {
  return doPost(params, url.bs_quarterlyReport_commentReply)
}
export {
  bsQuarterlyReportSaveOrUpdate,
  bsQuarterlyReportDetail,
  bsQuarterlyReportList,
  bsQuarterlyReportCommentDelete,
  bsQuarterlyReportComment,
  bsQuarterlyReportCommentReply
}
