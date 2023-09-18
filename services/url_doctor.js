/**
 * @file 保存医生客户端 url
 * @access public
 * @author 燕鹏
*/
// let httpUrl = process.env.http_url
let httpEnv = process.env.VUE_APP_http_env // 环境
console.log('httpEnv', httpEnv)
let url = ''
let urlProtocolBase = ''
if (httpEnv === 'dev') {
  url = 'http://18k925i398.iok.la/dev/api/doctor/'
  urlProtocolBase = 'http://18k925i398.iok.la/dev/api/manager/'
} else if (httpEnv === 'dev2') {
  url = 'http://18k925i398.iok.la/dev2/api/doctor/'
  urlProtocolBase = 'http://18k925i398.iok.la/dev2/api/manager/'
} else if (httpEnv === 'test') {
  url = 'http://18k925i398.iok.la/test/api/doctor/'
  urlProtocolBase = 'http://18k925i398.iok.la/test/api/manager/'
} else if (httpEnv === 'staging') {
  url = 'http://18k925i398.iok.la/staging/api/doctor/'
  urlProtocolBase = 'http://18k925i398.iok.la/staging/api/manager/'
} else {
  url = 'https://bs.medicine-o2o.com/api/doctor-app/'
  urlProtocolBase = 'https://bs.medicine-o2o.com/api/manager/'
}
export default {
  webapiBase: url, //
  // doctorApiBase: url,
  protocolBase: urlProtocolBase, // 协议使用
  // imgBase: httpUrl,

  // 设置时间 start
  org_doctorOnline_save: 'org/doctorOnline/save', // 保存医生出诊时间
  org_doctorOnline_list: 'org/doctorOnline/list', // 医生出诊时间列表
  // 设置时间 end

  // 患者病历 start
  patient_info: 'org/patient/get', // 获取患者详情
  vm_complication_all: 'vm/complication/all', // 所有的慢性并发症
  medicalCard_get: 'vm/medicalCard/get', // 获取病历卡详情
  medicalRecord_get: 'vm/medicalRecord/get', // 获取病历详情
  photoRecord_list: 'vm/photoRecord/list', // 拍照病历列表
 
  data_department_all: 'data/department/all', // 医院所有科室
  photoRecord_save: 'vm/photoRecord/save', // 新建拍照病历
  vm_allDiabetesType: 'vm/medicalCard/allDiabetesType', // 糖尿病类型
  medical_saveOrUpdate: 'vm/medical/saveOrUpdate', // 保存修改病历
  reversalRecord_list: 'vm/medicalRemission/getMedicalRemission', // 获取逆转病例的列表
  medical_updateMedical: 'vm/medicalRemission/updateMedicalRemission', // 保存修改逆转病历

  photoRecord_delete: 'vm/photoRecord/delete', // 删除患者拍照病历
  sys_file_web_stsToken: '/sys/file/web/stsToken', // 获取web端的ststoken
  vm_medicalCard_saveOrUpdate: 'vm/medicalCard/saveOrUpdate', // 新建或者更新患者病历卡
  // 患者病历 end

  // 评测表 start
  vm_evaluation_getEvaluationData: 'vm/evaluation/getEvaluationData', // 获取测评信息
  // 评测表 end

  // 数字化管理方案 start
  data_dict_listByCode: 'data/dict/listByCode', // 根据code取得数据字典项
  vm_patient_followup_listCurrent: 'vm/patient/followup/listCurrent', // 查询患者生效的数字化管理方案列表
  vm_patient_followu_get: 'vm/patient/followup/get', // 获取数字化管理方案
  vm_patient_followup_submit: 'vm/patient/followup/submit', // 提交数字化管理方案
  vm_patient_followup_getEffective: 'vm/patient/followup/getEffective', // 获取患者生效的随访数字化管理方案
  vm_patient_followup_submitWithData: 'vm/patient/followup/submitWithData', // 提交护士方案
  vm_patient_followup_getNursePlan: 'vm/patient/followup/getNursePlan', // 获取护士随访方案
  tc_outpatient_getPostilList: 'tc/outpatient/getPostilList', // 获取批注列表
  vm_followupPlan_getPostilDetailById: 'tc/outpatient/getPostilDetailById', // 通过批注id获取批注详情
  // 数字化管理方案 end

  // 血糖 start
  bs_getLatest: 'bs/getLatest', // 查询患者最新的一条血糖记录
  bs_groupAllTypeByMeasureDate: 'bs/groupAllTypeByMeasureDate', // 查询某个患者一定时间范围内的血糖记录，按测量日期分组（合并所有类型）
  bs_schema_getLatest: 'bs/schema/getLatest', // 查询某个患者最新的测量建议方案
  bs_like: 'bs/like', // 对患者血糖测量结果点赞
  bs_read: 'bs/read', // 对患者血糖测量结果点阅
  bs_getMeasurement: 'bs/getMeasurement', // 查询患者血糖测量结果
  bs_comment: 'bs/comment', // 血糖测量评论
  bs_commentReply: 'bs/commentReply', // 血糖测量评论回复
  bs_commentDelete: 'bs/commentDelete', // 血糖测量评论删除
  bs_groupByMeasureDate: 'bs/groupByMeasureDate', // 查询某个患者一定时间范围内的血糖记录，按测量日期分组
  bs_groupByTimeType: 'bs/groupByTimeType', // 查询某个患者一定时间范围内的血糖记录，按测量时间类型分组
  bs_getStatistics: 'bs/getStatistics', // 统计某个患者一定时间范围内的血糖记录
  // bs_listByPatient: 'bs/listByPatient', // 查询某个患者的血糖数据列表
  bs_listByPatient: 'vm/moment/listByPatient', // 查询某个患者的血糖动态
  bs_listAdviceTemplate: 'bs/listAdviceTemplate', // 获取血糖测量结果建议模板列表
  bs_cgm_getCgmList: 'bs/cgm/getCgmList', // 获取CGM数据
  bs_cgm_getCgmMarkedDataTable: 'bs/cgm/getCgmMarkedDataTable', // 获取指定月份/指定日期标记CGM血糖表格
  bs_cgm_getTirData: 'bs/cgm/getTirData', // 获取患者上一次查房至今的TIR数据统计
  vm_moment_cgmStatisticListByPatient: 'vm/moment/cgmStatisticListByPatient', // 患者CGM血糖统计数据列表查询
  // 血糖 end

  // 系统消息
  tc_furtherConsultation_getDetail: 'vm/furtherConsultation/getDetail', // 获取复诊方案详情
  tc_furtherConsultation_remark: 'vm/furtherConsultation/remark', // 标记复诊患者
  // 系统消息

  // 直播start
  live_videoAudience_getVideoAudienceStatistics: 'live/videoAudience/getVideoAudienceStatistics', // 获取直播回放患者统计
  live_roomAudience_getAudienceStatistics: 'live/roomAudience/getAudienceStatistics', // 获取直播患者统计
  // 直播end

  // 用药方案 start
  vm_patient_getMedicationPlan: 'vm/patient/medicationPlan/get', // 获取患者详情-用药方案
  vm_patient_medicationPlan_getHistoryList: 'vm/patient/medicationPlan/getHistoryList', // 获取患者历史用药方案列表
  vm_patient_medicationPlan_getHistory: 'vm/patient/medicationPlan/getHistory', // 获取患者历史用药方案详情
  tc_bloodSugarWarning_getMedicationPlan: 'tc/bloodSugarWarning/getMedicationPlan', // 获取血糖报警任务-用药方案
  tc_bloodSugarWarning_getFurtherConsultation: 'tc/bloodSugarWarning/getFurtherConsultation', // 获取血糖报警任务-复诊方案
  vm_patient_followup_getDischargeSummary: 'vm/patient/followup/getDischargeSummary', // 获取出院小结含用药
  // 用药方案 start

  // 添加医生 start
  org_doctor_thirdType_saveOrUpdate: 'org/doctor/thirdType/saveOrUpdate', // 一类医生手动添加或者更新三类医生
  org_thirdTypeDoctorAuth_getByLogin: 'org/thirdTypeDoctorAuth/getByLogin', // 获取添加三类医生这项权限的状态
  org_doctor_get_forEdit: 'org/doctor/get/forEdit', // 获取用于编辑的医生信息
  data_hospital_query: 'data/hospital/query', // 根据名字模糊查询医院
  org_staff_isMobileExist: 'org/staff/isMobileExist', // 手机号是否已使用
  data_hospitalDepartment_getFirstLevel: 'data/hospitalDepartment/getFirstLevel', // 查找医院的一级部门
  data_hospitalDepartment_getSubDepartment: 'data/hospitalDepartment/getSubDepartment', // 查找医院的二级（含）以下的部门
  org_jobTitle_listByBusinessRole: 'org/jobTitle/listByBusinessRole', // 获取业务角色相应的职称列表
  org_staff_getStatus: 'org/staff/getStatus', // 员工的最后一条审核日志
  // cmnt_leader_saveOrUpdate: 'cmnt/leader/saveOrUpdate', // 科主任添加或更新社区主任
  // cmnt_leader_get: 'cmnt/leader/get', // 获取社区主任详情
  // cmnt_careleader_saveOrUpdate: 'cmnt/careleader/saveOrUpdate', // 科主任添加社区护士
  // ar_cmntGroup_save: 'ar/cmntGroup/save', // 创建社区中心（科主任用）
  // cmnt_careleader_get: 'cmnt/careleader/get', // 查看社区护士详情
  data_hospital_add: 'data/hospital/add', // 医院新增
  data_province_findAll: 'data/province/findAll', // 查找所有省份
  data_city_findAll: 'data/city/findAll', // 根据省份code查找城市
  org_doctor_getIsTypeFifthDoctor: 'org/doctor/getIsTypeFifthDoctor', // 是否五类医生
  // 添加医生 end

  // 在线查房 start
  tc_roundsTask_patient_list: 'tc/roundsTask/patient/list', // 查房列表
  vm_rounds_get: 'vm/rounds/get', // 查房详情
  // 在线查房 end

  // 护士在线查房 start
  tc_nurse_roundsTask_list: 'tc/nurse/roundsTask/list', // 查房列表
  tc_nurse_roundsTask_get: 'tc/nurse/roundsTask/get', // 获取查房任务详情
  vm_patient_drugUsageBook_getList: 'vm/patient/drugUsageBook/getList', // 获取查房任务详情

  // 护士在线查房 end

  // crf start
  rw_crf_getPendingFinishCrfDetail: 'rw/crf/getPendingFinishCrfDetail', // 获取待完善的crf详情
  rw_crf_getFinishCrfDetail: 'rw/crf/getFinishCrfDetail', // 获取已提交的crf详情
  rw_crf_staff_submitCrf: 'rw/crf/staff/submitCrf', // 提交CRF
  rw_researchProject_get: 'rw/researchProject/get', // 获取项目详情
  // crf end
  // rwci小结 start
  tc_task_rwci_detail: 'tc/task/rwci/detail',
  // rwci小结 end
  // 健康管理方案 start
  //                     ------监测-------
  vm_monitor_getTargetList: 'vm/monitor/getTargetList', // 获取目标设定列表
  vm_monitor_getFrequencyTypeList: 'vm/monitor/getFrequencyTypeList', // 获取频次类型列表
  vm_monitor_submit: 'vm/monitor/submit', // 提交所有监测方案
  vm_monitor_getAll: 'vm/monitor/getAll', // 获取所有监测方案
  vm_monitor_getCustomMonitor: 'vm/monitor/getCustomMonitor', // 获取自定义监测项
  //                     ------复诊-------
  vm_furtherConsultation_checkup_list: 'vm/furtherConsultation/checkup/list', // 检查项列表
  vm_furtherConsultation_scheme_save: 'vm/furtherConsultation/scheme/save', // 保存复诊方案内容
  vm_furtherConsultation_scheme_getByPatient: 'vm/furtherConsultation/scheme/getByPatient', // 获取复诊方案详情
  //                     ------留言-------
  vm_chronic_disease_suggest_getCurrent: 'vm/chronic/disease/suggest/getCurrent', // 获取当前留言建议
  vm_chronic_disease_suggest_save: 'vm/chronic/disease/suggest/save' // 保存留言

  // 健康管理方案 end

}
