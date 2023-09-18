
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 获取复诊方案详情
function tcFurtherConsultationGetDetail (params) {
  return doGet(params, url.tc_furtherConsultation_getDetail)
}

// 标记复诊患者
function tcFurtherConsultationRemark (params) {
  return doPost(params, url.tc_furtherConsultation_remark)
}

export {
  tcFurtherConsultationGetDetail,
  tcFurtherConsultationRemark
}
