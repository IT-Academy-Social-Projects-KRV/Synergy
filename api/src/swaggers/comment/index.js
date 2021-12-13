const createComment = require('./createComment');
const getComments = require('./getComments');
const getComment = require('./getComment');
const updateComment = require('./updateComment');
const deleteComment = require('./deleteComment');

module.exports = {
  // paths: {
  '/api/comments': {
    ...createComment,
    ...getComments,
  },
  '/api/comments/{id}': {
    ...getComment,
    ...updateComment,
    ...deleteComment,
  },
  // },
};
