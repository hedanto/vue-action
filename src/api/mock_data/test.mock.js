import Mock from 'mockjs';
import {MsgType} from '../../common/js/constants';

// 模拟登录数据
Mock.mock(/\/mock/, {
  type: MsgType.SUCCESS, show: true, msg: '登录成功！', title: null, bean: null
});

