import item from './item';
import project from './project';
import comment from './comment';

export default {
  paths: {
    ...item,
    ...project,
    ...comment,
  },
};
