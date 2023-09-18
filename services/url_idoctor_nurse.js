/**
 * @file 保存护士客户端 url
 * @access public
 * @author 燕鹏
 */
// let httpUrl = process.env.http_url
let httpEnv = process.env.VUE_APP_http_env // 环境
let url = ''
let urlProtocolBase = ''
if (httpEnv === 'dev') {
  url = 'http://18k925i398.iok.la/dev/api/manager-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/dev/api/manager/'
} else if (httpEnv === 'dev2') {
  url = 'http://18k925i398.iok.la/dev2/api/manager-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/dev2/api/manager/'
} else if (httpEnv === 'test') {
  url = 'http://18k925i398.iok.la/test/api/manager-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/test/api/manager/'
} else if (httpEnv === 'staging') {
  url = 'http://18k925i398.iok.la/staging/api/manager-app/'
  urlProtocolBase = 'http://18k925i398.iok.la/staging/api/manager/'
} else {
  url = 'https://bs.medicine-o2o.com/api/manager-app/'
  urlProtocolBase = 'https://bs.medicine-o2o.com/api/manager/'
}

export default {
  webapiBase: url, //
  // nurseApiBase: url,
  protocolBase: urlProtocolBase, // 协议使用
  // imgBase: httpUrl,

  // 患者病历 start
  vm_medicalCard_saveOrUpdate: '/vm/medicalCard/saveOrUpdate', // 更新病历卡(参数和返回值跟微信端一致)
  vm_medicalRecord_saveOrUpdate: '/vm/medicalRecord/saveOrUpdate', // 更新病历卡(参数和返回值跟微信端一致)
  patient_info: 'vm/patient/get', // 获取患者详情
  medicalCard_get: 'vm/medicalCard/get', // 获取病历卡详情
  medicalRecord_get: 'vm/medicalRecord/get', // 获取病历详情
  photoRecord_list: 'vm/photoRecord/list', // 拍照病历列表
  photoRecord_save: 'vm/photoRecord/save', // 新建保存患者拍照病历
  photoRecord_delete: 'vm/photoRecord/delete', // 删除患者拍照病历
  data_department_all: 'data/department/all', // 医院所有科室
  sys_file_web_stsToken: '/sys/file/web/stsToken', // 获取web端的ststoken
  medical_saveOrUpdate: 'vm/medical/saveOrUpdate', // 保存修改病历
  // 患者病历 end
  reversalRecord_list: 'vm/medicalRemission/getMedicalRemission', // 获取逆转病例的列表
  medical_updateMedical: 'vm/medicalRemission/updateMedicalRemission', // 保存修改逆转病历
  // 评测表 start
  vm_evaluation_getEvaluationData: 'vm/evaluation/getEvaluationData', // 获取测评信息
  vm_evaluation_saveEvaluationData: 'vm/evaluation/saveEvaluationData', // 保存测评信息
  // 评测表 end

  // 完善患者信息start;
  vm_complication_all: 'vm/complication/all', // 所有的慢性并发症
  vm_patient_saveMedicalData: 'tc/newPatient/saveOrUpdate', // 完善病历卡和病历详情（完善资料任务）
  // 完善患者信息 end

  // 数字化管理方案 start
  // data_dict_listByCode: 'data/dict/listByCode', // 根据code取得数据字典项
  vm_patient_followup_listCurrent: 'vm/patient/followup/listCurrent', // 查询患者生效的数字化管理方案列表
  vm_patient_followu_get: 'vm/followupPlan/get', // 获取数字化管理方案
  vm_patient_followup_submit: 'vm/patient/followup/submit', // 提交数字化管理方案
  vm_patient_followup_submitWithData: 'vm/patient/followup/submitWithData', // 提交护士方案
  vm_patient_followup_getNursePlan: 'vm/patient/followup/getNursePlan', // 获取护士随访方案
  vm_patient_followup_getEffective: 'vm/followupPlan/getEffective', // 获取患者生效的随访数字化管理方案
  vm_followupPlan_get: 'vm/patient/followup/get', // 获取数字化管理方案
  vm_allDiabetesType: 'vm/medicalCard/allDiabetesType', // 糖尿病类型
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
  tc_bloodSugarWarning_getFurtherConsultation: 'tc/bloodSugarWarning/getFurtherConsultation', // 获取血糖报警任务-复诊方案
  tc_bloodSugarWarning_detail: 'tc/bloodSugarWarning/detail', // 获取血糖报警任务详情
  vm_patient_followup_getDischargeSummary: 'vm/patient/followup/getDischargeSummary', // 获取出院小结含用药
  // 用药方案备忘 end

  // 系统消息
  vm_patient_followup_getCompare: 'vm/patient/followup/getCompare', // 获取数字化管理方案生效前后数据
  vm_patient_followup_getById: 'vm/patient/followup/getById', // 根据id获取数字化管理方案数据
  bs_controlTarget_getByHisIdAndPatientId: 'bs/controlTarget/getByHisIdAndPatientId', // 根据历史id查询控糖目标
  bs_schema_getById: 'bs/schema/getById', // 根据id查询测量建议方案
  tc_furtherConsultation_getDetail: 'tc/furtherConsultation/getDetail', // 获取复诊方案详情
  tc_furtherConsultation_remark: 'tc/furtherConsultation/remark', // 标记复诊患者
  // 系统消息

  // 订单 start
  sale_productOrder_detail: 'sale/productOrder/detail', // 订单详情
  // 订单 end

  // 在线查房 start
  tc_roundsTask_patient_list: 'tc/roundsTask/patient/list', // 查房列表
  vm_rounds_get: 'vm/rounds/get', // 查房详情
  // 在线查房 end
  // 护士在线查房 start
  tc_nurse_roundsTask_list: 'tc/nurse/roundsTask/list', // 查房列表
  tc_nurse_roundsTask_get: 'tc/nurse/roundsTask/get', // 获取查房任务详情
  vm_patient_drugUsageBook_getList: 'vm/patient/drugUsageBook/getList', // 获取查房任务详情
  tcNurseRoundsTaskGetAdviceTemplate: 'tc/nurse/roundsTask/getAdviceTemplate ', // 获取血糖建议模板
  tcNurseRoundsTaskSubmit: '/tc/nurse/roundsTask/submit', // 提交在线查房任务
  // 护士在线查房 end
  // rwci小结 start
  tc_task_rwci_detail: 'tc/task/rwci/detail'
  // rwci小结 end
}
