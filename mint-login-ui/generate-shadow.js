function generateShadow (el) {
  // 元素的颜色 = 传入元素的背景色
  let elColor = window.getComputedStyle(el).backgroundColor
  // 元素的RGB = 正则获得RGB对应数值
  let elRGB = elColor.match(/\d+/g)
  // 元素的HSL = 将RGB转为HSL
  let elHSL = window.rgbToHsl(elRGB[0], elRGB[1], elRGB[2] - 0.1)
  // 阴影的HSL = 元素的HSL
  let shadowHSL = elHSL
  // 阴影的HSL的L减小，即明度变暗
  shadowHSL[2] -= 0.1
  // 阴影的RGB = 将HSL转为RGB
  let shadowRGB = window.hslToRgb(shadowHSL[0], shadowHSL[1], shadowHSL[2])
  // 声明style数组，存放四个表示box-shadow的CSS字符串
  let style = []
  // 根据阴影的RGB循环生成CSS字符串
  for (let i = 1; i <= 4; i++) {
    let styleString = `${i}px ${i}px rgb(${shadowRGB[0]}, ${shadowRGB[1]}, ${shadowRGB[2]})`
    style.push(styleString)
  }
  // 将存放四个CSS字符串的数组合并为长字符串
  let styleFullString = style.join(',')
  // 给元素的行内样式赋值
  el.style.boxShadow = styleFullString
}
window.generateShadow = generateShadow
