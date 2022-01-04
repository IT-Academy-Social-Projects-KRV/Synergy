import createComment from './createComment';
import getComments from './getComments';
import getComment from './getComment';
import updateComment from './updateComment';
import deleteComment from './deleteComment';

export default {
  '/api/comments': {
    ...createComment,
    ...getComments,
  },
  '/api/comments/{id}': {
    ...getComment,
    ...updateComment,
    ...deleteComment,
  },
};
