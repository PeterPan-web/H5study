export default {
  openapi_document_getByCode: 'openapi/document/getByCode', // 通过文档code获取文档资料接口
  sys_file_upload: 'sys/file/upload', // 图片上传接口

  // 血糖 start
  bs_controlTarget_getCurrentForEdit: 'bs/controlTarget/getCurrentForEdit', // 查询要设置的控糖目标
  bs_controlTarget_getCurrent: 'bs/controlTarget/getCurrent', // 查询患者当前的控糖目标
  bs_controlTarget_save: 'bs/controlTarget/save', // 设置控糖目标
  bs_schema_getLatest: 'bs/schema/getLatest', // 查询某个患者最新的测量建议方案
  bs_schema_template_list: 'bs/schema/template/list', // 查询测量建议方案模板列表
  vm_patient_template_list: 'vm/patient/followupTemplate/list', // 新修改查询测量建议方案模板列表

  bs_schema_template_get: 'bs/schema/template/get', // 根据测量方案模板获取详情
  vm_patient_template_get: 'vm/patient/followupTemplate/get', // 根据测量方案模板获取详情

  bs_schema_save: 'bs/schema/save', // 设置测量建议方案
  bs_schema_deleteAndTarget: 'bs/schema/deleteAndTarget', // 删除测量方案和控糖目标

  // 血糖 end

  // ldlc start
  vm_patient_ldlC_list: 'vm/patient/ldlC/list', // 获取ldl-c列表
  vm_patient_ldlC_statistic: 'vm/patient/ldlC/statistic', // 获取ldl-c折线图数据
  // ldlc end
  // 血压 start
  vm_patient_bloodPressure_statistic: 'vm/patient/bloodPressure/statistic', // 获取血压折线图数据
  vm_patient_bloodPressure_list: 'vm/patient/bloodPressure/list', // 获取血压列表
  vm_patient_bloodPressure_setOthers: 'vm/patient/bloodPressure/setOthers', // 标记血压记录他人测量
  // 血压 end
  // 体重 start
  vm_patient_weight_statistic: 'vm/patient/weight/statistic', // 获取体重折线图数据
  vm_patient_weight_list: 'vm/patient/weight/list', // 获取体重列表
  vm_patient_weight_statisticByMonth: 'vm/patient/weight/statisticByMonth', // 获取体重折线图数据(按年份)
  // 体重 end
  // 病例
  medicalCard_get: 'vm/medicalCard/get', // 获取病历卡详情
  medicalRecord_get: 'vm/medicalRecord/get', // 获取病历详情
  vm_allDiabetesType: 'vm/medicalCard/allDiabetesType', // 糖尿病类型
  vm_complication_existAll: 'vm/complication/existAll', // 所有已有并发症接口
  data_drug_list: 'data/drug/list', // 获取药品列表
  data_drug_save: 'data/drug/save', // 保存药品
  vm_evaluation_isPatientFilled: 'vm/evaluation/isPatientFilled', // 患者是否已经有测评
  vm_evaluation_questionList: 'vm/evaluation/questionList', // 测评问卷列表
  vm_evaluation_patientScore: 'vm/evaluation/patientScore', // 患者测评得分
  vm_evaluation_patientAnswerList: 'vm/evaluation/patientAnswerList', // 获取患者的答卷列表
  vm_evaluation_patientAnswerRemind: 'vm/evaluation/patientAnswerRemind', // 患者的答卷提醒按钮
  vm_evaluation_remindPatient: 'vm/evaluation/remindPatient', // 提醒患者购买院外
  vm_medicalCard_allDiabetesType: 'vm/medicalCard/allDiabetesType', // 糖尿病类型
  // 病例
  // 卡路里 start
  vm_calDiary_list: 'vm/calDiary/list', // 患者的卡路里日记列表
  data_calFoodCategory_all: 'data/calFoodCategory/all', // 所有食物分类
  data_calFood_listByCategory: 'data/calFood/listByCategory', // 通过分类查询卡路里食物列表
  data_calFood_list: 'data/calFood/list', // 卡路里食物列表
  data_calFood_completeMatchlist: 'data/calFood/completeMatchlist', // 卡路里食物列表（全匹配）
  data_calFoodUnit_get: 'data/calFoodUnit/get', // 查找指定食品的单位转换信息
  vm_weeklyRecipe_detail: 'vm/weeklyRecipe/detail', // 获取食谱详情
  vm_weeklyRecipe_historyList: 'vm/weeklyRecipe/historyList', // 获取历史食谱列表
  vm_weeklyRecipe_historyDetail: 'vm/weeklyRecipe/historyDetail', // 获取历史食谱详情
  vm_markFood_addMarkFood: 'vm/markFood/addMarkFood', // 增加常吃食物
  vm_markFood_lastUpdateInfo: 'vm/markFood/lastUpdateInfo', // 最后更新时间
  vm_markFood_removeMarkFood: 'vm/markFood/removeMarkFood', // 删除常吃食物
  vm_markFood_list: 'vm/markFood/list', // 获取标记食物列表
  vm_markFood_all: 'vm/markFood/all', // 获取患者所有标记食物
  // 卡路里 end
  // 奖学金 start
  sale_bonusOrder_detail: 'sale/bonusOrder/detail', // 奖学金续费订单详情
  vm_patient_bonus_progress: 'vm/patient/bonus/progress', // 患者奖励金进度
  vm_patient_bonus_log_list: 'vm/patient/bonus/log/list', // 患者奖励金的变更列表
  // 奖学金 end
  // 商城订单 start
  sale_mallOrder_detail: 'sale/mallOrder/detail', // 订单详情
  // 商城订单 end
  // 季度控糖报告 srart
  bs_quarterlyReport_commentDelete: 'bs/quarterlyReport/commentDelete', // 季度控糖报告评论删除
  bs_quarterlyReport_comment: 'bs/quarterlyReport/comment', // 季度控糖报告评论
  bs_quarterlyReport_commentReply: 'bs/quarterlyReport/commentReply', // 季度控糖报告评论回复
  bs_quarterlyReport_list: 'bs/quarterlyReport/list', // 获取报告列表
  bs_quarterlyReport_saveOrUpdate: 'bs/quarterlyReport/saveOrUpdate', // 提交完善报告
  bs_quarterlyReport_detail: 'bs/quarterlyReport/detail', // 详情
  // 季度控糖报告 end

  qtn_questionnaire_get: 'qtn/questionnaire/get', // 获取问卷详情
  qtn_questionnaire_getIncludeAnswer: 'qtn/questionnaire/getIncludeAnswer', // 获取问卷详情包含用户答案
  // 用药模块用法用药时间 start
  vm_patient_medicationPlan_getBaseDictData: 'vm/patient/medicationPlan/getBaseDictData',
  // 用药模块用法用药时间 end
  data_dict_listByCode: 'data/dict/listByCode', // 根据code取得数据字典项
  bsMeasurementAbnormalReasonAdd: 'bs/measurement/abnormal/reason/add', // 异常血糖新增标签

  // 患者动态 start
  dyn_list: 'dyn/list', // 获取全部用户动态
  dyn_like: 'dyn/like', // 点赞
  dyn_read: 'dyn/read', // 点阅
  dyn_comment: 'dyn/comment', // 用户动态评论
  dyn_commentReply: 'dyn/commentReply', // 用户动态评论回复
  dyn_countUnreadComment: 'dyn/countUnreadComment', // 获取未读的用户动态评论回复数
  dyn_listUnreadCommentReply: 'dyn/listUnreadCommentReply', // 获取未读的用户动态评论回复
  dyn_listCommentReply: 'dyn/listCommentReply', // 获取全部用户动态评论回复
  dyn_commentDelete: 'dyn/commentDelete', // 用户动态评论删除
  dyn_countUnHandle: 'dyn/countUnHandle', // 获取未处理的用户动态和未读评论回复消息数量
  // 患者动态 end
  // 缓解治疗阶段回顾 start
  vm_remissionCure_summary_detail: 'vm/remissionCure/summary/detail', // 获取阶段总结详情
  // 缓解治疗阶段回顾 end
    // 控糖目标回顾 start
    vm_remissionCure_report_detail: 'vm/remissionCure/report/detail', // 获取阶段总结详情
    // 控糖目标回顾 end
  dyn_cmntList: 'dyn/cmntList', // 获取社区体系患者动态数据列表
  // 患者动态 end
  // 尿酸 start
  vm_patient_uricAcid_getLastOne: 'vm/patient/uricAcid/getLastOne', // 获取最新一条尿酸数据
  vm_patient_uricAcid_get: 'vm/patient/uricAcid/get', // 获取尿酸详情
  vm_patient_uricAcid_list: 'vm/patient/uricAcid/list', // 获取尿酸列表
  vm_patient_uricAcid_statistic: 'vm/patient/uricAcid/statistic', // 获取尿酸折线图数据
  vm_patient_uricAcid_statisticByMonth: 'vm/patient/uricAcid/statisticByMonth', // 获取尿酸折线图数据（按月统计）
  vm_patient_uricAcid_save: 'vm/patient/uricAcid/save', // 保存尿酸
  vm_patient_uricAcid_modify: 'vm/patient/uricAcid/modify', // 修改尿酸
  vm_patient_uricAcid_delete: 'vm/patient/uricAcid/delete' // 删除尿酸记录
  // 尿酸 end
}
