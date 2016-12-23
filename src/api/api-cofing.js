let config = require('../../config');

let apiRootMap = {};

if (process.env.NODE_ENV === 'production') {
  apiRootMap = config.build.apiRootMap;
} else {
  if (config.dev.proxyTable) {
    let proxyTable = config.dev.proxyTable;
    Object.keys(proxyTable).forEach(function (context) {
      apiRootMap[context] = context +
        (proxyTable[context]['projectName'] ? '/' + proxyTable[context]['projectName'] : '');
    });
  }
}

export const genPath = (path) => {
  let rootPath = '/' + path.split('/')[1];
  if (apiRootMap[rootPath]) {
    return path.replace(rootPath, apiRootMap[rootPath]);
  } else {
    return '';
  }
};

