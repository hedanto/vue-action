import Mock from 'mockjs';
import {MsgType, SystemMode} from '../../common/js/constants';

// 模拟登录数据
Mock.mock(/\/auth\/login/, {
  type: MsgType.SUCCESS, show: true, msg: '登录成功！', title: null, bean: null
});

// 模拟注销数据
Mock.mock(/\/auth\/logout/, {
  type: MsgType.TOLOGIN, show: true, msg: '未登录或者登录超时'
});

// 模拟获取上下文数据
Mock.mock(/\/common\/context-data\/get-context-data/, {
  systemMode: SystemMode.DEVELOPMENT,
  user: {
    userName: '小明',
    oginName: '0000001',
    id: '1'
  }
});

