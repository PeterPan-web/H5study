import { invoke } from "./util";

function invokeShare(params) {
  return invoke("share", params);
}

/**
 * @description 获取客户端标志 用于判断h5需要调用接口
 * @param  {} params 不需要传参数
 * @returns promise 对象
 */
function invokeGetAppSign(params) {
  return invoke("appSign", params);
}

function sendCheckPlanInfo(params) {
  // 数字化管理方案 详情    参数：患者id、患者套餐id、数字化管理方案编号、方案类型
  return invoke("sendCheckPlanInfo", params);
}

function gotoCheckPlanDetail(params) {
  // 数字化管理方案 列表
  // patientId患者id
  // followupPlanNo数字化管理方案编号，套餐id和数字化管理方案编号必填其中一个
  // sceneName 数字化管理方案名称
  return invoke("gotoCheckPlanDetail", params);
}

function didSetWorkTime(params) {
  // 医生 出诊时间设置
  return invoke("didSetWorkTime", params);
}

function didSetPlan(params) {
  // 医生 强化干预 核实无误发送
  return invoke("didSetPlan", params);
}

function didCheckPlan(params) {
  // 出院随访服务 核实无误发送
  return invoke("didCheckPlan", params);
}

function didCompleteData(params) {
  // 随访护士 完善资料 成功
  return invoke("didCompleteData", params);
}

function didAddNursePlan(params) {
  // 随访护士 添加院外照护方案
  return invoke("didAddNursePlan", params);
}

function addRegistered(params) {
  // 添加项目组成员 从已注册医生中添加
  return invoke("addRegistered", params);
}

function didAddDoctor(params) {
  //  添加项目组成员 成功
  return invoke("didAddDoctor", params);
}

function didModifyCompleteData(params) {
  //  完善资料 修改成功
  return invoke("didModifyCompleteData", params);
}

function modifyCheckPlan(params) {
  //  查看数字化管理方案 修改
  return invoke("modifyCheckPlan", params);
}

function didPassPlan(params) {
  //  查看数字化管理方案 通过
  return invoke("didPassPlan", params);
}

function didRejectPlan(params) {
  //  查看数字化管理方案 拒绝
  return invoke("didRejectPlan", params);
}

function didModifyDoctor(params) {
  //  添加医生成功通知app
  return invoke("didModifyDoctor", params);
}

function backToDoctor(params) {
  //  查看医生时间列表返回
  return invoke("backToDoctor", params);
}

// nurse 添加followPlan 下一步的回调
function didClickNext(params) {
  return invoke("didClickNext", params);
}

// nurse 院外照护方案
function didModifyNursePlan(params) {
  return invoke("didModifyNursePlan", params);
}

// 医生端修改患者病历信息后返回
function backToDoctorCase(params) {
  return invoke("didMedicalRecord", params);
}

// 用药方案备忘详情点击修改
function didModifyMedicalPlan(params) {
  return invoke("didModifyMedicalPlan", params);
}

// 用药方案备忘详情内，无用药方案备忘时候调用
function didMedicalPlanEmpty(params) {
  return invoke("didMedicalPlanEmpty", params);
}

// 点击拍照病历
function didInPhotoMedicalRecord(params) {
  return invoke("didInPhotoMedicalRecord", params);
}
// 非拍照病历
function didNotInPhotoMedicalRecord(params) {
  return invoke("didNotInPhotoMedicalRecord", params);
}
// 做方案不显示下一步
function didNotShowNext(params) {
  return invoke("didNotShowNext", params);
}
// 点击逆转病历
function didEditReversalRecord(params) {
  return invoke("didEditReversalRecord", params);
}
// 获取数字化管理方案预览数据 20190725客户端添加缓存支持
function getPreviewData(params) {
  return invoke("getPreviewData", params);
}

// 批注
function clipPicture(params) {
  return invoke("clipPicture", params);
}

// 患者资料显示页面（随访护士）
function didClickPrevious(params) {
  return invoke("didClickPrevious", params);
}

// 提出修改建议
function didSchemeComments(params) {
  return invoke("didSchemeComments", params);
}

// 批注记录
function didSchemeCommentsRecord(params) {
  return invoke("didSchemeCommentsRecord", params);
}

// 直接通过
function didSchemePass(params) {
  return invoke("didSchemePass", params);
}

// 用药方案预览
function previewData(params) {
  return invoke("previewData", params);
}

// 编辑数字化管理方案
function editFollowPlan(params) {
  return invoke("editFollowPlan", params);
}

// 编辑发送数字化管理方案数据
function editFollowPlanData(params) {
  return invoke("editFollowPlanData", params);
}

// 修改标题头
function didChangeTitle(params) {
  return invoke("didChangeTitle", params);
}

// 无需修改
function didPass(params) {
  return invoke("didPass", params);
}

// 提出修改建议
function didComments(params) {
  return invoke("didComments", params);
}

// 从已注册社区中心主任获取列表
function addRegisteredCommunityDirector(params) {
  return invoke("addRegisteredCommunityDirector", params);
}

// 添加社区中心主任成功通知app
function didAddCommunityDirector(params) {
  return invoke("didAddCommunityDirector", params);
}

// 审核失败编辑社区中心主任成功通知app
function didEditCommunityDirector(params) {
  return invoke("didEditCommunityDirector", params);
}

// 从已注册社区Careleader获取列表
function addRegisteredCommunityCareleader(params) {
  return invoke("addRegisteredCommunityCareleader", params);
}

// 添加社区Careleader成功通知app
function didRelevanceCommunityCareleader(params) {
  return invoke("didRelevanceCommunityCareleader", params);
}

// 审核失败编辑Careleader成功通知app
function didEditCommunityCareleader(params) {
  return invoke("didEditCommunityCareleader", params);
}

// 是否显示操作按钮(血糖日志))
function visibleOperationButton(params) {
  return invoke("visibleOperationButton", params);
}

// 订单页跳转其他页修改标题
function orderDetailsToOtherPage(params) {
  return invoke("orderDetailsToOtherPage", params);
}

// 订单页跳转所属医生
function orderDetailsToDoctor(params) {
  return invoke("orderDetailsToDoctor", params);
}

// 订单页跳转微信昵称(患者详情)
function orderDetailsToPatient(params) {
  return invoke("orderDetailsToPatient", params);
}

// 完成修改复诊详情
function saveOverReVisitDetail(params) {
  return invoke("saveOverReVisitDetail", params);
}

// 保存控糖报告
function saveQuarterlyCugarControlRepor(params) {
  return invoke("saveQuarterlyCugarControlRepor", params);
}

// 修改页面标题
function appPageTitleSet(params) {
  return invoke("appPageTitleSet", params);
}

// 传递药品名称
function transferDrugName(params) {
  return invoke("transferDrugName", params);
}
// 添加用药情况
function transferToAddDrug(params) {
  return invoke("transferToAddDrug", params);
}
// 修改用药情况
function transferToUpdateDrug(params) {
  return invoke("transferToUpdateDrug", params);
}
// 需要返回任务列表
function backToTaskListPage(params) {
  return invoke("backToTaskListPage", params);
}
// 需要返回任务列表
function submitPlanSuccess(params) {
  return invoke("submitPlanSuccess", params);
}

// 评测提交成功通知
function editEvaluatingSave(params) {
  return invoke("editEvaluatingSave", params);
}

// 跳转评测页面
function toEvaluatingPage(params) {
  return invoke("toEvaluatingPage", params);
}

// 跳转评测结果页面
function toEvaluatingPageResult(params) {
  return invoke("toEvaluatingPageResult", params);
}

// 评测展示
function evaluatingPageShow(params) {
  return invoke("evaluatingPageShow", params);
}

// 卡路里预览
function sendCalorieImageData(params) {
  return invoke("sendCalorieImageData", params);
}

// 从H5返回APP页面
function finishPage(params) {
  return invoke("finishPage", params);
}

// 在线查房列表点击待处理
function toRounds(params) {
  return invoke("toRounds", params);
}

// 在线查房列表点击tir更多
function toBloodSugarCgmList(params) {
  return invoke("toBloodSugarCgmList", params);
}

// crf提交编辑成功
function crfSubmittedSuccess(params) {
  return invoke("crfSubmittedSuccess", params);
}

// rwci显示隐藏APP查看备注的按钮
function toggleLookRemarkBtn(params) {
  return invoke("toggleLookRemarkBtn", params);
}

// 常吃食物显示隐藏添加按钮
function showAddMarkFoodBtn(params) {
  return invoke("showAddMarkFoodBtn", params);
}

// 获取app当前列表已添加的食物
function getFoodList(params) {
  return invoke("getFoodList", params);
}

// 显示/隐藏 修改按钮
function showEditBtn(params) {
  return invoke("showEditBtn", params);
}

// 添加食谱
function addDietPlan(params) {
  return invoke("addDietPlan", params);
}

// 设置右上角按钮文字
function setOptButton(params) {
  // {title:''}
  return invoke("setOptButton", params);
}

// 刷新健康数据消息接口
function refreshHealthDataMessage(params) {
  return invoke("refreshHealthDataMessage", params);
}

// 打开新的H5页面webview（通知APP），参数
function openNewWebview(params) {
  return invoke("openNewWebview", params);
}
// 关闭H5页面webview（通知APP），参数
function closeNewWebview(params) {
  return invoke("closeNewWebview", params);
}
// 健康数据切换tab通知APP，参数tabPosition
function onClickTab(params) {
  return invoke("onClickTab", params);
}

// 跳转APP指定页面
function openApp(params) {
  return invoke("openApp", params);
}
function showAlertView(params) {
  return invoke("showAlertView", params);
}

export {
  closeNewWebview,
  clipPicture,
  getPreviewData,
  didClickNext,
  didModifyCompleteData,
  invokeGetAppSign,
  invokeShare,
  sendCheckPlanInfo,
  gotoCheckPlanDetail,
  didSetWorkTime,
  didSetPlan,
  didCheckPlan,
  didCompleteData,
  didAddNursePlan,
  addRegistered,
  didAddDoctor,
  modifyCheckPlan,
  didPassPlan,
  didRejectPlan,
  didModifyDoctor,
  backToDoctor,
  didModifyNursePlan,
  backToDoctorCase,
  didModifyMedicalPlan,
  didMedicalPlanEmpty,
  didInPhotoMedicalRecord,
  didNotInPhotoMedicalRecord,
  didNotShowNext,
  didClickPrevious,
  didSchemeComments,
  didSchemeCommentsRecord,
  didSchemePass,
  previewData,
  editFollowPlan,
  editFollowPlanData,
  didChangeTitle,
  didPass,
  didComments,
  submitPlanSuccess,
  addRegisteredCommunityDirector,
  didAddCommunityDirector,
  didEditCommunityDirector,
  addRegisteredCommunityCareleader,
  didRelevanceCommunityCareleader,
  didEditCommunityCareleader,
  visibleOperationButton,
  orderDetailsToOtherPage,
  orderDetailsToDoctor,
  orderDetailsToPatient,
  saveOverReVisitDetail,
  saveQuarterlyCugarControlRepor,
  appPageTitleSet,
  transferDrugName,
  transferToAddDrug,
  backToTaskListPage,
  transferToUpdateDrug,
  editEvaluatingSave,
  toEvaluatingPage,
  toEvaluatingPageResult,
  evaluatingPageShow,
  sendCalorieImageData,
  finishPage,
  toRounds,
  toBloodSugarCgmList,
  crfSubmittedSuccess,
  toggleLookRemarkBtn,
  showAddMarkFoodBtn,
  getFoodList,
  showEditBtn,
  addDietPlan,
  setOptButton,
  refreshHealthDataMessage,
  openNewWebview,
  onClickTab,
  openApp,
  showAlertView,
  didEditReversalRecord
};
