/**
 * 第二阶段 挂载静态的属性和方法
 */
// 引入了之前的构造函数
import Vue from './instance/index'
// 引入依赖
import { initGlobalAPI } from './global-api/index'
import { isServerRendering } from 'core/util/env'
import { FunctionalRenderContext } from 'core/vdom/create-functional-component'

// 把构造函数作为参数传入进去
initGlobalAPI(Vue)
// 挂载isServer
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
})
// 挂载版本属性
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
})

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
})

Vue.version = '__VERSION__'

export default Vue
