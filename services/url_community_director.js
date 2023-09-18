/**
 * @file 保存主任客户端url 文件
 * @access public
 * @author 燕鹏
*/

// let httpUrl = process.env.http_url
let httpEnv = process.env.VUE_APP_http_env // 环境
let url = ''
let urlProtocolBase = ''
if (httpEnv === 'dev') {
  url = 'http://18k925i398.iok.la/dev/api/research-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/dev/api/manager/'
} else if (httpEnv === 'dev2') {
  url = 'http://18k925i398.iok.la/dev2/api/research-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/dev2/api/manager/'
} else if (httpEnv === 'test') {
  url = 'http://18k925i398.iok.la/test/api/research-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/test/api/manager/'
} else if (httpEnv === 'staging') {
  url = 'http://18k925i398.iok.la/staging/api/research-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/staging/api/manager/'
} else {
  url = 'https://bs.medicine-o2o.com/api/research-app/'
  urlProtocolBase = 'https://bs.medicine-o2o.com/api/manager/'
}
export default {
  webapiBase: url, //
  // directorApiBase: url,
  protocolBase: urlProtocolBase, // 协议使用
  // imgBase: httpUrl,

  // 患者病历 start
  vm_complication_all: 'vm/complication/all', // 所有的慢性并发症
  patient_info: 'vm/patient/get', // 获取患者详情
  medicalCard_get: 'vm/medicalCard/get', // 获取病历卡详情
  medicalRecord_get: 'vm/medicalRecord/get', // 获取病历详情
  photoRecord_list: 'vm/photoRecord/list', // 拍照病历列表
  sys_file_web_stsToken: '/sys/file/web/stsToken', // 获取web端的ststoken
  // 患者病历 end

  // 项目组成员 start
  org_doctor_saveOrUpdate: 'ar/cmntGroupMember/doctor/saveOrUpdate', // 添加或者更新医生
  org_doctor_get: 'org/doctor/get', // 查看医生详情
  data_hospital_query: 'data/hospital/query', // 根据名字模糊查询医院
  data_hospitalDepartment_getFirstLevel: 'data/hospitalDepartment/getFirstLevel', // 查找医院的一级部门
  data_hospitalDepartment_getSubDepartment: 'data/hospitalDepartment/getSubDepartment', // 查找医院的二级（含）以下的部门
  org_jobTitle_listByBusinessRole: 'org/jobTitle/listByBusinessRole', // 获取业务角色相应的职称列表
  loginInfo: 'loginInfo', // 登录用户的信息
  org_staff_search: 'org/staff/search', // 员工搜索
  org_nurse_all: 'org/nurse/all', // 获取所有e控糖护士
  // 项目组成员 end

  // 数字化管理方案 start
  // data_dict_listByCode: 'data/dict/listByCode', // 根据code取得数据字典项
  vm_patient_followup_listCurrent: 'vm/followupPlan/listCurrent', // 查询患者生效的数字化管理方案列表
  vm_patient_followu_get: 'vm/followupPlan/get', // 获取数字化管理方案
  vm_patient_followup_submit: 'vm/patient/followup/submit', // 提交数字化管理方案
  vm_patient_followup_getEffective: 'vm/followupPlan/getEffective', // 获取患者生效的随访数字化管理方案
  vm_followupPlan_get: 'vm/followupPlan/get', // 获取数字化管理方案
  vm_followupPlan_getPostilList: 'vm/followupPlan/getPostilList', // 批注列表
  vm_followupPlan_getPostilDetail: 'vm/followupPlan/getPostilDetail', // 批注详情
  // 数字化管理方案 end

  // 血糖 start
  bs_getLatest: 'bs/measurement/getLatest', // 查询患者最新的一条血糖记录
  bs_groupAllTypeByMeasureDate: 'bs/measurement/groupAllTypeByMeasureDate', // 查询某个患者一定时间范围内的血糖记录，按测量日期分组（合并所有类型）
  bs_schema_getLatest: 'bs/schema/getLatest', // 查询某个患者最新的测量建议方案
  bs_like: 'bs/measurement/like', // 对患者血糖测量结果点赞
  bs_read: 'bs/measurement/read', // 对患者血糖测量结果点阅
  bs_getMeasurement: 'bs/measurement/getMeasurement', // 查询患者血糖测量结果
  bs_comment: 'bs/measurement/comment', // 血糖测量评论
  bs_commentReply: 'bs/measurement/commentReply', // 血糖测量评论回复
  bs_commentDelete: 'bs/measurement/commentDelete', // 血糖测量评论删除
  bs_groupByMeasureDate: 'bs/measurement/groupByMeasureDate', // 查询某个患者一定时间范围内的血糖记录，按测量日期分组
  bs_groupByTimeType: 'bs/measurement/groupByTimeType', // 查询某个患者一定时间范围内的血糖记录，按测量时间类型分组
  bs_getStatistics: 'bs/measurement/getStatistics', // 统计某个患者一定时间范围内的血糖记录
  bs_listByPatient: 'bs/measurement/listByPatient', // 查询某个患者的血糖数据列表
  bs_listAdviceTemplate: 'bs/measurement/listAdviceTemplate', // 获取血糖测量结果建议模板列表
  // 血糖 end

  // 用药方案备忘 start
  vm_patient_getMedicationPlan: 'vm/patient/medicationPlan/get', // 获取用药方案
  vm_patient_medicationPlan_getHistoryList: 'vm/patient/medicationPlan/getHistoryList', // 获取患者历史用药方案列表
  vm_patient_medicationPlan_getHistory: 'vm/patient/medicationPlan/getHistory', // 获取患者历史用药方案详情
  vm_patient_followup_getDischargeSummary: 'vm/patient/followup/getDischargeSummary', // 获取出院小结含用药
  // 用药方案备忘 end

  // 评测表 start
  vm_evaluation_getEvaluationData: 'vm/evaluation/getEvaluationData' // 获取测评信息
  // 评测表 end

}
