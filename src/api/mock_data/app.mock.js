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
    id: '1',
    menuTree: [
      {
        id: '1000',
        resName: '业务办理',
        resCode: '1000',
        resValue: 'home.biz',
        checked: true,
        children: [
          {
            id: '1100',
            resName: '档案信息管理',
            resCode: '1100',
            resValue: '',
            checked: true,
            children: [
              {
                id: '1101',
                resName: '档案信息录入',
                resCode: '0001',
                resValue: 'home.biz.archives-input',
                checked: true,
                children: []
              },
              {
                id: '1102',
                resName: '档案信息维护',
                resCode: '0001',
                resValue: 'home.biz.archives-mgt',
                checked: true,
                children: []
              }
            ]
          },
          {
            id: '1200',
            resName: '用户信息管理',
            resCode: '1100',
            resValue: '',
            checked: true,
            children: [
              {
                id: '1201',
                resName: '用户信息录入',
                resCode: '0001',
                resValue: '',
                checked: true,
                children: []
              },
              {
                id: '1202',
                resName: '用户记录查询',
                resCode: '0001',
                resValue: '',
                checked: true,
                children: []
              }
            ]
          }
        ]
      },
      {
        id: '2000',
        resName: '个人中心',
        resCode: '2000',
        resValue: 'home.personal',
        checked: true,
        children: [
          {
            id: '2100',
            resName: '个人信息',
            resCode: '1100',
            resValue: 'home.personal.personal-info',
            checked: true,
            children: []
          },
          {
            id: '2100',
            resName: '消息提醒',
            resCode: '2100',
            resValue: 'home.personal.personal-msg',
            checked: true,
            children: []
          }
        ]
      }
    ]
  }
});

