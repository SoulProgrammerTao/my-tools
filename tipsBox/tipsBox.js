import TipsBoxComponent from './TipsBox.vue'
const TipsBox = {}
TipsBox.install = function (Vue) {
  const ToastConstructor = Vue.extend(TipsBoxComponent)
  const instance = new ToastConstructor()
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
  Vue.tipsBox = Vue.prototype.$tipsBox = data => {
    instance.visible = true
    if (typeof data === 'string') {
      instance.message = data
      instance.icon = 'error'
      instance.btnText = '确定'
      instance.callback = function () {}
      instance.autoHide = false
    }
    if (typeof data === 'object') {
      instance.icon = data.icon || ''
      instance.message = data.message || ''
      instance.btnText = data.btnText || '确定'
      instance.callback = data.callback || function () {}
      instance.autoHide = data.autoHide || false

      // 3 秒自动隐藏
      if (data.autoHide) {
        instance.time = 3
        let boxTimer = null
        boxTimer = setInterval(() => {
          instance.time--
          if (instance.time === 0) {
            clearInterval(boxTimer)
            instance.visible = false
            instance.callback()
          }
        }, 1000)
      }
    }
  }
}
export default TipsBox
