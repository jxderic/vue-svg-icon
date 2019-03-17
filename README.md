# vue-svg-icon

> svg的字体图标组件，可以支持多色图标

## 安装

```javascript
$ npm install vue-svg-icon-component -S
```

## 使用

在`main.js`文件中引入组件并注册

```javascript
# main.js
import svgIcon from 'vue-svg-icon-component'
import 'vue-svg-icon-component/lib/svg-icon.css'
Vue.use(svgIcon)
```

在项目中使用svgIcon

```
<svg-icon icon-class="fontName" className="className"/>
```

## 参数

| 参数       | 说明        | 类型   | 默认值 | 是否必须 |
| ---------- | ----------- | ------ | ------ | -------- |
| icon-class | 图标的名字  | String | 无     | 是       |
| className  | 图标的class | String | ''     | 否       |