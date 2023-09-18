
import {
  url,
  doGet,
  doPost
} from '@/services/utils/util'

// 查询患者最新的一条血糖记录
function bsGetLatest (params) {
  return doGet(params, url.bs_getLatest)
}

// 查询某个患者一定时间范围内的血糖记录，按测量日期分组（合并所有类型）
function bsGroupAllTypeByMeasureDate (params) {
  return doGet(params, url.bs_groupAllTypeByMeasureDate)
}

// 查询某个患者最新的测量建议方案
function bsSchemaGetLatest (params) {
  return doGet(params, url.bs_schema_getLatest)
}

// 查询某个患者的血糖数据列表
function bsListByPatient (params) {
  return doGet(params, url.bs_listByPatient)
}

// 查询患者血糖测量结果
function bsGetMeasurement (params) {
  return doGet(params, url.bs_getMeasurement)
}

// 对患者血糖测量结果点赞
function bsLike (params) {
  return doPost(params, url.bs_like)
}

// 对患者血糖测量结果点阅
function bsRead (params) {
  return doPost(params, url.bs_read)
}

// 血糖测量评论
function bsComment (params) {
  return doPost(params, url.bs_comment)
}

// 血糖测量评论回复
function bsCommentReply (params) {
  return doPost(params, url.bs_commentReply)
}

// 血糖测量评论删除
function bsCommentDelete (params) {
  return doPost(params, url.bs_commentDelete)
}

// 查询某个患者一定时间范围内的血糖记录，按测量日期分组
function bsGroupByMeasureDate (params) {
  return doGet(params, url.bs_groupByMeasureDate)
}

// 查询某个患者一定时间范围内的血糖记录，按测量时间类型分组
function bsGroupByTimeType (params) {
  return doGet(params, url.bs_groupByTimeType)
}

// 统计某个患者一定时间范围内的血糖记录
function bsGetStatistics (params) {
  return doGet(params, url.bs_getStatistics)
}

export {
  bsGetLatest,
  bsGroupAllTypeByMeasureDate,
  bsSchemaGetLatest,
  bsListByPatient,
  bsGetMeasurement,
  bsLike,
  bsRead,
  bsComment,
  bsCommentReply,
  bsCommentDelete,
  bsGroupByMeasureDate,
  bsGroupByTimeType,
  bsGetStatistics
}
