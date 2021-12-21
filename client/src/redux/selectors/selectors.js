export const userSelector = state => state.user.user;
export const isAuthedSelector = state => state.user.isAuthed;
export const projectListSelector = state => state.projectList.projectList;
export const projectPageSelector = state => state.projectList.projectPages;
export const projectSelector = state => state.project.project;
export const isLoaderSelector = state => state.helpers.isLoader;
export const requestErrorSelector = state => state.helpers.requestError;
export const itemSelector = state => state.item.item;