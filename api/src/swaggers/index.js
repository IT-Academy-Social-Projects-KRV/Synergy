const basicInfo = require('./basicInfo');
const servers = require('./servers');
const tags = require('./tags');
const components = require('./components');
const paths = require('./paths');
// const project = require('./project');
// const item = require('./item');

module.exports = {
  ...basicInfo,
  ...servers,
  ...tags,
  ...components,
  ...paths,
  // ...project,
  // ...item,
};
