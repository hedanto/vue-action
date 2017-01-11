import Picker from './picker';
import config from '../config';
import {DatePicker} from 'element-ui';
export default {
  mixins: [DatePicker, Picker],
  name: config.prefix + 'DatePicker',
  props: {
    type: {
      type: String,
      default: 'date'
    }
  }
};
