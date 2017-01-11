import moment from 'moment';
const DEFAULT_FORMATS = {
  date: 'yyyy-MM-dd',
  month: 'yyyy-MM',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  time: 'HH:mm:ss',
  timerange: 'HH:mm:ss',
  daterange: 'yyyy-MM-dd',
  datetimerange: 'yyyy-MM-dd HH:mm:ss',
  year: 'yyyy'
};
const RANGE_SEPARATOR = ' - ';

const dateFormater = (value, vm) => {
  let format = vm.format || DEFAULT_FORMATS[vm.type];
  if (vm.type === 'week') {
    return value;
  }
  format = format.replace(/y/g, 'Y').replace(/d/g, 'D');

  if (vm.type === 'daterange' || vm.type === 'datetimerange') {
    if (Array.isArray(value) && value.length === 2) {
      return moment(value[0]).format(format) + RANGE_SEPARATOR + moment(value[1]).format(format);
    }
    return value;
  }

  return moment(value).format(format);
};

const dateParser = (value, vm) => {
  let format = vm.format || DEFAULT_FORMATS[vm.type];
  if (vm.type === 'week') {
    return value;
  }
  format = format.replace(/y/g, 'Y').replace(/d/g, 'D');

  if (vm.type === 'daterange' || vm.type === 'datetimerange') {
    if (Array.isArray(value) && value.length === 2) {
      if (typeof value[0] !== 'string' & typeof value[1] !== 'string') {
        return [moment(value[0]).format(format), moment(value[1]).format(format)];
      }
      return value;
    } else {
      return value.split(RANGE_SEPARATOR);
    }
  }

  return moment(value).format(format);
};

export default {
  computed: {
    visualValue: {
      get () {
        const value = this.internalValue;
        if (!value) return;
        console.info(value);
        this.$emit('input', dateParser(value, this));
        console.info(value);
        return dateFormater(value, this);
      },
      set (value) {
        console.info('set');
        console.info(value);
        if (value) {
          this.picker.value = dateParser(value, this);
        } else {
          this.picker.value = value;
        }
        this.$forceUpdate();
      }
    }
  }
};
