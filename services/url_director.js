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
  reversalRecord_list: 'vm/medicalRemission/getMedicalRemission', // 获取逆转病例的列表

  // 评测表 start
  vm_evaluation_getEvaluationData: 'vm/evaluation/getEvaluationData', // 获取测评信息
  // 评测表 end

  // 项目组成员 start
  org_doctor_saveOrUpdate: 'org/doctor/saveOrUpdate', // 添加或者更新医生
  data_hospital_query: 'data/hospital/query', // 根据名字模糊查询医院
  data_hospitalDepartment_getFirstLevel: 'data/hospitalDepartment/getFirstLevel', // 查找医院的一级部门
  data_hospitalDepartment_getSubDepartment: 'data/hospitalDepartment/getSubDepartment', // 查找医院的二级（含）以下的部门
  org_jobTitle_listByBusinessRole: 'org/jobTitle/listByBusinessRole', // 获取业务角色相应的职称列表
  cmnt_leader_saveOrUpdate: 'cmnt/leader/saveOrUpdate', // 科主任添加或更新社区主任
  cmnt_leader_get: 'cmnt/leader/get', // 获取社区主任详情
  cmnt_careleader_saveOrUpdate: 'cmnt/careleader/saveOrUpdate', // 科主任添加社区护士
  ar_cmntGroup_save: 'ar/cmntGroup/save', // 创建社区中心（科主任用）
  cmnt_careleader_get: 'cmnt/careleader/get', // 查看社区护士详情
  data_hospital_add: 'data/hospital/add', // 医院新增
  data_province_findAll: 'data/province/findAll', // 查找所有省份
  data_city_findAll: 'data/city/findAll', // 根据省份code查找城市
  org_doctor_get: 'org/doctor/get', // 查看医生详情
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
  tc_bloodSugarWarning_getMedicationPlan: 'tc/bloodSugarWarning/getMedicationPlan', // 获取血糖报警任务-用药方案
  tc_bloodSugarWarning_getMedicationPlanPostilDetail: 'tc/bloodSugarWarning/getMedicationPlanPostilDetail', // 获取用药方案批注详情
  vm_followupPlan_getDischargeSummary: 'vm/followupPlan/getDischargeSummary', // 获取出院小结含用药
  // 用药方案备忘 end

  // 在线查房 start
  tc_roundsTask_patient_list: 'tc/roundsTask/patient/list', // 查房列表
  vm_rounds_get: 'vm/rounds/get' // 查房详情
  // 在线查房 end
}
