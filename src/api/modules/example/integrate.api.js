import { HttpPrefix } from '../../../common/js/constants';
import { http } from 'vue';

export default {
  getPageData: (params) => {
    console.info(params);
    let url = HttpPrefix.API + '/example/inegrate/getPageData';
    return http.post(url).then(resp => {
      return resp.body;
    });
  },
  getData: (params) => {
    console.info(params);
    let url = HttpPrefix.API + '/example/inegrate/getData';
    return http.post(url).then(resp => {
      return resp.body;
    });
  },
  saveData: (params) => {
    console.info(params);
    let url = HttpPrefix.API + '/example/inegrate/saveData';
    return http.post(url).then(resp => {
      return resp.body;
    });
  },
  delData: (params) => {
    console.info(params);
    let url = HttpPrefix.API + '/example/inegrate/delData';
    return http.post(url).then(resp => {
      return resp.body;
    });
  }
};
