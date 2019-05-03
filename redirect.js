let host = window.location.host
let href = window.location.href
let protocol = window.location.protocol

if (host.indexOf('pc.') === -1) {
  let reg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  if (host.indexOf('www.') !== -1 && reg.test(navigator.userAgent)) {
    window.location.href = protocol + '//' + host.replace('www', 'mobile') + (href.indexOf('code=') !== -1 ? '/#/?code=' + href.split('code=')[1] : '')
  }
}
