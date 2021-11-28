import { createAction } from '@reduxjs/toolkit';

export const setIsLoader = createAction('isLoader/set');
export const setRequestError = createAction('requestError/set');