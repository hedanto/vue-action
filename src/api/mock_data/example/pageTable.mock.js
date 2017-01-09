import Mock from 'mockjs';

// 模拟登录数据
Mock.mock(/\/example\/getPageData/, {
  'data|10': [
    {
      'name|+1': [
        '张学友',
        '黎明',
        '郭富城',
        '刘德华'
      ],
      'date': '@date("yyyy-MM-dd")',
      'address': '上海市普陀区金沙江路 1518 弄'
    }
  ],
  'total|100': 100
});
