export const labelMap = {
  '1': {label: '身份证', icon: 'lr-icon-gongshangyinhang1'},
  '2': {label: '授权书', icon: 'lr-icon-gongshangyinhang1'},
  '3': {label: '征信/家访报告'},
  '4': {label: '户口本', icon: 'lr-icon-gongshangyinhang1'},
  '24': {label: '婚姻证明', icon: 'lr-icon-gongshangyinhang1'},
  '5': {label: '房产/居住证明', icon: 'lr-icon-gongshangyinhang1'},
  '6': {label: '银行流水', icon: 'lr-icon-gongshangyinhang1'},
  '12': {label: '驾驶证/二手车大本', icon: 'lr-icon-gongshangyinhang1'},
  '13': {label: '公司合同'},
  '14': {label: '收入证明', icon: 'lr-icon-gongshangyinhang1'},
  '19': {label: '开卡申请表', icon: 'lr-icon-gongshangyinhang1'},
  '26': {label: '家访/面签照片'},
  '15': {label: '其他'},
  '18': {label: '车商资料'},
  '40': {label: '内部资料'},
  '7': {label: '面签视频'},
  '8': {label: '家访视频'},
  '41': {label: '内部视频'},
  '21': {label: '公司担保承诺函', icon: 'lr-icon-gongshangyinhang1'},
  '22': {label: '业务申请表', icon: 'lr-icon-gongshangyinhang1'},
  '27': {label: '分期付款/抵押合同', icon: 'lr-icon-gongshangyinhang1'},
  '23': {label: '汽车销售合同', icon: 'lr-icon-gongshangyinhang1'},
  '28': {label: '共同还款人承诺函', icon: 'lr-icon-gongshangyinhang1'},
  '20': {label: '首付款凭证', icon: 'lr-icon-gongshangyinhang1'},
  '29': {label: '购车发票', icon: 'lr-icon-gongshangyinhang1'},
  '30': {label: '银行卡签购单', icon: 'lr-icon-gongshangyinhang1'},
  '31': {label: '车辆合格证', icon: 'lr-icon-gongshangyinhang1'},
  '32': {label: '二手车评估报告', icon: 'lr-icon-gongshangyinhang1'},
  '33': {label: '车辆保险单', icon: 'lr-icon-gongshangyinhang1'},
  '34': {label: '提车相关照片', icon: 'lr-icon-gongshangyinhang1'},
  '35': {label: '车辆登记证书', icon: 'lr-icon-gongshangyinhang1'},
  '36': {label: '代领委托授权书', icon: 'lr-icon-gongshangyinhang1'},
  '37': {label: '手续费代扣授权书', icon: 'lr-icon-gongshangyinhang1'}
}
export function checkoutSubTree (prop) {
  return labelMap[prop] ? labelMap[prop] : {}
}