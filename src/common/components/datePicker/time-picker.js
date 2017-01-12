import Picker from './picker';
import config from '../config';
import {TimePicker} from 'element-ui';
export default {
  mixins: [TimePicker, Picker],
  name: config.prefix + 'TimePicker'
};
