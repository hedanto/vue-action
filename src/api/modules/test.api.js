import { HttpPrefix } from '../../common/js/constants';
import { http } from 'vue';

export default {
  find: () => {
    let url = HttpPrefix.API + '/mock';
    return http.post(url).then(resp => {
      console.info(resp.body);
      return resp.body;
    });
  }
};
