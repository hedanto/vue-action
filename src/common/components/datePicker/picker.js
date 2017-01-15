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
// const RANGE_SEPARATOR = ' - ';

export default {
  mounted () {
    // this.$on('change', (date, visible = false) => {
    //   console.info(date);
    //   let value = date;
    //   if (this.type === 'daterange' || this.type === 'datetimerange' || this.type === 'timerange') {
    //     value = value.split(RANGE_SEPARATOR);
    //   }
    //   this.$emit('input', value);
    // });
    this.$on('input', (date, visible = false, falg = false) => {
      if (falg) {
        return;
      }
      let value = '';
      let format = this.format || DEFAULT_FORMATS[this.type];
      if (format) {
        format = format.replace(/y/g, 'Y').replace(/d/g, 'D');
      }

      if (Array.isArray(date) && date.length === 2 && date[0] && date[1]) {
        value = [moment(date[0]).format(format), moment(date[1]).format(format)];
      } else if (date instanceof Date) {
        value = moment(date).format(format);
      } else {
        value = date;
      }

      this.$emit('input', value, false, true);
    });
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        let value = val;
        let format = this.format || DEFAULT_FORMATS[this.type];
        if (format) {
          format = format.replace(/y/g, 'Y').replace(/d/g, 'D');
        }
        if (val) {
          if (this.type === 'daterange' || this.type === 'datetimerange' || this.type === 'timerange') {
            if (Array.isArray(val) && typeof val[0] === 'string') {
              value = [moment(val[0], format)._d, moment(val[1], format)._d];
            }
          } else if (this.type === 'time-select') {
            value = val;
          } else {
            value = moment(value, format)._d;
          }
        }
        this.currentValue = value;
      }
    }
  }
};
