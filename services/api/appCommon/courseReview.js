import {
  url,
  doGet
} from '@/services/utils/util'

// 缓解治疗阶段回顾列表
function vmRemissionCureSummaryList (params) {
  return doGet(params, url.vm_remissionCure_summary_list)
}

// 获取阶段总结详情
function vmRemissionCureSummaryDetail (params) {
  return doGet(params, url.vm_remissionCure_summary_detail)
}
// 获取控糖目标总结详情
function vmRemissionCureReportDetail (params) {
  return doGet(params, url.vm_remissionCure_report_detail)
}

export {
  vmRemissionCureReportDetail,
  vmRemissionCureSummaryList,
  vmRemissionCureSummaryDetail
}
