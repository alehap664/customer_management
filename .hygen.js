const changeCase = require('change-case');

module.exports = {
  helpers: {
    toPascalCase: (str) => changeCase.pascalCase(str),
  },
};
