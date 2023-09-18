import {
  url,
  doGet2 as doGet,
  doPost2 as doPost
} from '@/services/utils/util2.0'

// 获取待完善的crf详情
function rwCrfGetPendingFinishCrfDetail (params) {
  return doGet(params, url.rw_crf_getPendingFinishCrfDetail)
}
// 获取已提交的crf详情
function rwCrfGetFinishCrfDetail (params) {
  return doGet(params, url.rw_crf_getFinishCrfDetail)
}
// 提交CRF
function rwCrfStaffSubmitCrf (params) {
  return doPost(params, url.rw_crf_staff_submitCrf)
}
// 获取项目详情
function rwResearchProjectGet (params) {
  return doGet(params, url.rw_researchProject_get)
}

export {
  rwCrfGetPendingFinishCrfDetail,
  rwCrfGetFinishCrfDetail,
  rwCrfStaffSubmitCrf,
  rwResearchProjectGet
}
