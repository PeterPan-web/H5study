
import {
  url,
  doGet
  // doPost
} from '@/services/utils/util'

// 获取直播回放患者统计
function liveVideoAudienceGetVideoAudienceStatistics (params) {
  return doGet(params, url.live_videoAudience_getVideoAudienceStatistics)
}

// 获取直播患者统计
function liveroomAudienceGetAudienceStatistics (params) {
  return doGet(params, url.live_roomAudience_getAudienceStatistics)
}

export {
  liveVideoAudienceGetVideoAudienceStatistics,
  liveroomAudienceGetAudienceStatistics
}
