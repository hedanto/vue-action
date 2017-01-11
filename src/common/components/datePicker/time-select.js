import Picker from './picker';
import config from '../config';
import {TimeSelect} from 'element-ui';
export default {
  mixins: [TimeSelect, Picker],
  name: config.prefix + 'TimeSelect'
};
