
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 患者的卡路里日记列表
function vmCalDiaryList (params) {
  return doGet(params, url.vm_calDiary_list)
}
// 获取食谱详情
function vmWeeklyRecipeDetail (params) {
  return doGet(params, url.vm_weeklyRecipe_detail)
}
// 获取历史食谱列表
function vmWeeklyRecipeHistoryList (params) {
  return doGet(params, url.vm_weeklyRecipe_historyList)
}
// 获取历史食谱详情
function vmWeeklyRecipeHistoryDetail (params) {
  return doGet(params, url.vm_weeklyRecipe_historyDetail)
}

// 所有食物分类
function dataCalFoodCategoryAll (params) {
  return doGet(params, url.data_calFoodCategory_all, {loading: false})
}

// 卡路里食物列表（通过类型查找）
function dataCalFoodListByCategory (params) {
  return doGet(params, url.data_calFood_listByCategory, {loading: false})
}

// 卡路里食物列表（全匹配）
function dataCalFoodCompleteMatchlist (params) {
  return doGet(params, url.data_calFood_completeMatchlist)
}
// 查找指定食品的单位转换信息
function dataCalFoodUnitGet (params) {
  return doGet(params, url.data_calFoodUnit_get)
}

// 增加常吃食物
function vmMarkFoodAddMarkFood (params) {
  return doPost(params, url.vm_markFood_addMarkFood)
}

// 最后更新时间
function vmMarkFoodLastUpdateInfo (params) {
  return doGet(params, url.vm_markFood_lastUpdateInfo)
}

// 删除常吃食物
function vmMarkFoodRemoveMarkFood (params) {
  return doPost(params, url.vm_markFood_removeMarkFood)
}

// 获取标记食物列表
function vmMarkFoodList (params) {
  return doGet(params, url.vm_markFood_list)
}

// 获取标记食物列表
function vmMarkFoodAll (params) {
  return doGet(params, url.vm_markFood_all)
}

// 卡路里食物列表
function dataCalFoodList (params) {
  return doGet(params, url.data_calFood_list)
}

export {
  vmCalDiaryList,
  vmWeeklyRecipeDetail,
  vmWeeklyRecipeHistoryList,
  vmWeeklyRecipeHistoryDetail,
  dataCalFoodCategoryAll,
  vmMarkFoodAddMarkFood,
  vmMarkFoodLastUpdateInfo,
  vmMarkFoodRemoveMarkFood,
  vmMarkFoodList,
  vmMarkFoodAll,
  dataCalFoodListByCategory,
  dataCalFoodCompleteMatchlist,
  dataCalFoodUnitGet,
  dataCalFoodList
}
