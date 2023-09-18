import { register } from "./util";
/**
 * @param  {Function} frontCallBack 回调方法
 */
function registerTest(frontCallBack) {
  return register("jsRegisterTest", frontCallBack);
}

// 显示随访页面的按钮
function showFollowPlanPageBtn(frontCallBack) {
  return register("showFollowPlanPageBtn", frontCallBack);
}

// 数字化管理方案页面刷新数据
function followPlanRefresh(frontCallBack) {
  return register("followPlanRefresh", frontCallBack);
}

// 折叠警告
function foldAdvice(frontCallBack) {
  return register("foldAdvice", frontCallBack);
}

// 获取暂存社区中心主任信息
function communityDirectorInfo(frontCallBack) {
  return register("communityDirectorInfo", frontCallBack);
}

// 护士端评测页面进行修改
function editEvaluating(frontCallBack) {
  return register("editEvaluating", frontCallBack);
}

// 医生端返回查房列表刷新数据
function refreshData(frontCallBack) {
  return register("refreshData", frontCallBack);
}

// CGM连续血糖监测数据时间改变刷新页面
function bloodSugarCgmListTimeChange(frontCallBack) {
  return register("bloodSugarCgmListTimeChange", frontCallBack);
}

// 护士查房提交成功后
function submitSuccess(frontCallBack) {
  return register("submitSuccess", frontCallBack);
}
// 接收新增原生传值
function sendMedicationData(frontCallBack) {
  return register("sendMedicationData", frontCallBack);
}
// 接收新增原生传值
function reviseMedicationData(frontCallBack) {
  return register("reviseMedicationData", frontCallBack);
}

// 下一页
function gotoNext(frontCallBack) {
  return register("gotoNext", frontCallBack);
}
// 上一页
function gotoBack(frontCallBack) {
  return register("gotoBack", frontCallBack);
}

// 页面滚动到底部
function pageScrollBottom(frontCallBack) {
  return register("pageScrollBottom", frontCallBack);
}
// 返回时刷新常吃食物数据
function refreshMarkFoodData(frontCallBack) {
  return register("refreshMarkFoodData", frontCallBack);
}

// 将食物列表返回给app
function getSelectedItems(frontCallBack) {
  return register("getSelectedItems", frontCallBack);
}

// 把饮食方案数据回传到app
function getDietPlanData(frontCallBack) {
  return register("getDietPlanData", frontCallBack);
}

// 原生提交数据后，H5刷新食谱数据
function submitDietPlanDataSuccess(frontCallBack) {
  return register("submitDietPlanDataSuccess", frontCallBack);
}

// 原生右上角按钮点击事件调用h5页面方法
function optBtnTouched(frontCallBack) {
  return register("optBtnTouched", frontCallBack);
}

// APP筛选刷新健康数据
function refreshHealthData(frontCallBack) {
  return register("refreshHealthData", frontCallBack);
}
// APP新需求筛选刷新健康数据
function healthDataMenu(frontCallBack) {
  return register("healthDataMenu", frontCallBack);
}
function showAlert(frontCallBack) {
  return register("showAlert", frontCallBack);
}
function getMessage(frontCallBack) {
  return register("getMessage", frontCallBack);
}

export {
  healthDataMenu,
  registerTest,
  foldAdvice,
  showFollowPlanPageBtn,
  followPlanRefresh,
  communityDirectorInfo,
  editEvaluating,
  refreshData,
  bloodSugarCgmListTimeChange,
  submitSuccess,
  pageScrollBottom,
  gotoNext,
  sendMedicationData,
  reviseMedicationData,
  gotoBack,
  refreshMarkFoodData,
  getSelectedItems,
  getDietPlanData,
  submitDietPlanDataSuccess,
  optBtnTouched,
  refreshHealthData,
  showAlert,
  getMessage
};
