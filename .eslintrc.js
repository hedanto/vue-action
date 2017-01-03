module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // 箭头函数参数可以不要括号
    'arrow-parens': 0,
    // 不强制生成器函数*的前后空格
    'generator-star-spacing': 0,
    // 开发模式可以使用debugger，生产模式不可以
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 需要分号结尾
    'semi': ['error', 'always']
  }
}
