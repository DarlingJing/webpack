// 函数，声明式函数，不能是箭头函数
// 函数必须有返回值
module.exports = function (source) {
  const result = source.replace('hello', '你好啊！');
  this.callback(null, result)
}