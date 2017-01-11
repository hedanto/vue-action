import tooltip from './tooltip'

export function install (Vue) {
  Vue.directive('tooltip', tooltip)
}

export const tooltip = tooltip

export default {
  install
}
