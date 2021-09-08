// 函数，声明式函数，不能是箭头函数
// 函数必须有返回值
module.exports = function (source) {
  const callback = this.async();
  setTimeout(() => {
    const result = source.replace('罗靖', this.query.name);
    callback(null, result)
  }, 2000);
  // return source.replace('hello', this.query.name);
}