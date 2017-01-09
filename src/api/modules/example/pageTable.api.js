import { HttpPrefix } from '../../../common/js/constants';
import { http } from 'vue';

export default {
  getPageData: (params) => {
    console.info(params);
    let url = HttpPrefix.API + '/example/getPageData';
    return http.post(url).then(resp => {
      return resp.body;
    });
  }
};
