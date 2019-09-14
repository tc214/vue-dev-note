/**
 * 第一阶段，整体注入了五个部分，vue构造函数主体部分完成，包括各项初始化，以及发布订阅模式等等
 * 此处为构造函数的核心文件
 先是引入依赖 然后定义名字为Vue的构造函数
 调用五个方法 把构造函数作为参数传入进去
 这五个方法就是在vue构造函数的原型prototype上挂载方法或属性
 也就是说这五个方法所挂载的属性构成了vue的构造函数
 形象的说就像是夹心雪糕一样，一层层的包裹，最终成为了完整的构造函数

 */
// created周期函数之前的操作，即各项初始化，期间调用 beforeCreate 钩子
import { initMixin } from './init'
// 利用 definedProperty 进行静态数据的订阅发布，并在其中实现几项实例 api $set、 $delete、 $watch
import { stateMixin } from './state'
// 实现实例api $nextTick，实现 _render 渲染虚拟dom
import { renderMixin } from './render'
// 实例事件流的注入, 利用的是订阅发布模式的事件流构造
import { eventsMixin } from './events'
// 注入几个Vue原型函数
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
// 声明Vue类
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
