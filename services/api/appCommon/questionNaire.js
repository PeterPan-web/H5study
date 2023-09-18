
import {
  url,
  doGet
} from '@/services/utils/util'

// 获取问卷详情
function qtnQuestionnaireGet (params) {
  return doGet(params, url.qtn_questionnaire_get)
}

// 获取问卷详情包含用户答案
function qtnQuestionnaireGetIncludeAnswer (params) {
  return doGet(params, url.qtn_questionnaire_getIncludeAnswer)
}

export {
  qtnQuestionnaireGet,
  qtnQuestionnaireGetIncludeAnswer
}
