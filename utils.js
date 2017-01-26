/**
 * Created by snatvb on 19.01.17.
 */

const utils = {
  isModule: function (fileName) {
    return fileName.substr(0, 8) === '_module_';
  },
  getFileNameRequire: function (match) {
    return match.replace(/(>|<\/)/ig, '');
  },
  getVariable: function (match, fileName) {
    const pattern = /(.)*=(.)*?r/ig;
    if(pattern.test(match)) {
      const vname = /(.)*=/i.exec(match);
      if(vname !== null) {
        return `${vname[0]} `;
      }
    }
    let variable = fileName.replace(/\//gim, '');
    variable = variable.replace(/[^-0-9a-z_]/gim, '');
    return 'local __' + variable + '__ = '
  },
  getModuleContent: function (moduleContent, fileName, match) {
    return moduleContent.replace(/(<meta__module>|<\/meta__module>)/gi, '');
  },
  haveIgnoreFolder: function (parseFolder, ignoreArray) {
    for (let i = 0; i < ignoreArray.length; i++) {
      const ignoreFolder = ignoreArray[ i ];
      for (let j = 0; j < parseFolder.length; j++) {
        const folder = parseFolder[ j ];
        if (folder === ignoreFolder) {
          return true;
        }
      }
    }
    return false;
  },

  /**
   * Ищем обработчик исключений
   * @param {String} match
   * @returns {*}
   */
  getException: function (match) {
    const exceptionPattern = /\)\((.)+\)$/i;
    let result = exceptionPattern.exec(match);
    if (result === null) {
      return false;
    }
    result = result[ 0 ].replace(/[()"']/gi, '');
    return result;
  },
  isComment: function (text) {
    return /<!--(.)*<require/i.test(text);
  },
  isDev: function () {
    return !(process.env.NODE_ENV == 'production');
  },
  removeDevModule: function (fileContent) {
    if(this.isDev()) {
      return fileContent;
    }
    const pattern = /(.)<!--:dev(.)*/ig;
    return fileContent.replace(pattern, '');
  }
};

module.exports = utils;
