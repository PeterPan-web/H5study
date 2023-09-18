import invoke from './util'

function invokeShare (params) {
  return invoke('share', params)
}

function invokeTest (params) {
  return invoke('h5ToNative', params)
}

export {
  invokeShare,
  invokeTest
}
