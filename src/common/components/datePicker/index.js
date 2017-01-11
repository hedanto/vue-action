import DatePicker from './date-picker';
import TimePicker from './time-picker';
import TimeSelect from './time-select';

DatePicker.install = function (Vue) {
  Vue.component(DatePicker.name, DatePicker);
  Vue.component(TimePicker.name, TimePicker);
  Vue.component(TimeSelect.name, TimeSelect);
};

export default {
  DatePicker,
  TimePicker,
  TimeSelect
};
