import Mock from 'mockjs';
import {MsgType} from '../../../common/js/constants';

// 模拟列表数据
Mock.mock(/\/example\/inegrate\/getPageData/, {
  'data|10': [
    {
      'name|+1': [
        '张学友',
        '黎明',
        '郭富城',
        '刘德华'
      ],
      'date': '@date("yyyy-MM-dd")',
      'address': '上海市普陀区金沙江路 1518 弄',
      'sex|+1': ['男', '女'],
      'age|+1': [20, 30, 40, 19]
    }
  ],
  'total|100': 100
});

// 模拟单条数据
Mock.mock(/\/example\/inegrate\/getData/, {
  'name|+1': [
    '张学友',
    '黎明',
    '郭富城',
    '刘德华'
  ],
  'date': '@date("yyyy-MM-dd")',
  'address': '上海市普陀区金沙江路 1518 弄',
  'sex|+1': ['男', '女'],
  'age|+1': [20, 30, 40, 19]
});

// 模拟保存数据
Mock.mock(/\/example\/inegrate\/saveData/, {
  type: MsgType.SUCCESS, show: true, msg: '保存成功！', title: null, bean: null
});

// 模拟删除数据
Mock.mock(/\/example\/inegrate\/delData/, {
  type: MsgType.SUCCESS, show: true, msg: '删除成功！', title: null, bean: null
});
