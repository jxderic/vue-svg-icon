// 导入组件，组件必须声明 name
import svgIcon from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
svgIcon.install = function (Vue) {
  Vue.component(svgIcon.name, svgIcon)
}

export default svgIcon
