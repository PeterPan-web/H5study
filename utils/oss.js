import {
  getStsToken
} from 'api/common'
import util from '@/utils/util'
import {
  loading
} from '@/utils/js-vue.js'
let OSS = require('ali-oss')
let loadingInstance = loading() // loading 实例
function getOss (result) {
  let client = new OSS({
    accessKeyId: result.AccessKeyId,
    accessKeySecret: result.AccessKeySecret,
    stsToken: result.SecurityToken,
    endpoint: 'oss-cn-shenzhen.aliyuncs.com',
    bucket: 'idt-blood-sugar'
  })
  return client
}
/**
 * @description oss渠道资源上传
 * @example
 * let params = {
    file,
    progress: (p, checkpoint) => {
      console.log('progress-p', p)
    }
  }
  ossUpload(params).then((result) => {
    console.log('ossUpload-result', result)
    this.imgArray.push(result)
  }).catch((err) => {
    console.log(err)
  })
 * return {promise} 返回promise对象
 */
function ossUpload (params = {
  file: '',
  progress: () => {}
}) {
  loadingInstance.start('上传中...')
  return new Promise((resolve, reject) => {
    if (params.file instanceof Array) {
      loadingInstance.close()
      this.$toast.fail('一次只能选择一张图片')
      let error = '一次只能选择一张图片'
      reject(error)
    } else {
      let fileEntity = params.file.file
      let size = params.file.content.length
      let md5 = ''
      util.getFileMD5(fileEntity).then((result) => {
        md5 = result
      }).catch((err) => {
        loadingInstance.close()
        console.log(err)
      })
      getStsToken().then((result) => {
        let client = getOss(result.data.data)
        let suffix = 'jpg' // 文件后缀名
        let objectKey = util.getUuid() + `[${suffix}]` // %5Bjpg%5D  使用[***]替换 ‘。***’ 是因为项目部署后使用'.jpg'会上传文件失败(原因未知)
        const progress = async function progress (p, checkpoint) {
        // that.progressValue = (p * 100).toFixed(2) * 1
        // if (p === 1) {
        // // that.dialogVisible = false
        // }
        // 进度条
          params.progress(p, checkpoint)
        }
        let option = {
          progress,
          partSize: 1000 * 1024, // 设置分片大小
          timeout: 120000 // 设置超时时间
        }
        client.multipartUpload(objectKey, fileEntity, option).then(function (result) {
          console.log('client.multipartUpload', result)
          let url = result.res.requestUrls[0]
          let index = url.lastIndexOf('?')
          if (index > -1) {
            url = url.substring(0, index)
          }
          // url = url + '?x-oss-process=image/format,jpg'
          resolve({
            'name': objectKey, // 图片name
            md5, // 图片文件md5
            url, // 生成的url
            'ext': suffix, // 图片后缀
            'w': 100, // 宽
            'h': 100, // 高
            size // 图片大小
          })
          loadingInstance.close()
        }).catch(function (err) {
          loadingInstance.close()
          alert(err)
          reject(err)
        })
      }).catch(function (err) {
        loadingInstance.close()
        console.log(err)
      })
    }
  })
}

export {
  ossUpload,
  getOss
}
