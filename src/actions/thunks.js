// @flow

import type { Dispatch, GetState, Thunk } from '../types'
import { addTodo, setVisibilityFilter } from './index';

type ThunkAction1 = string;
export const thunkAction1 = (param1: ?string, param2: ?string) => (dispatch: Dispatch,
  getState: GetState): ThunkAction1 => {
  console.log(`${param1 || 'undefined'} ${param2 || 'undefined'}`)

  dispatch(addTodo(Math.random().toString()))
  dispatch(setVisibilityFilter('SHOW_ALL'))

  console.log('updated state:', getState())
  return 'some sync api information';
}
type ThunkAction1Thunk = Thunk<ThunkAction1>;
// type ThunkAction1Thunk = (thunk: (dispatch: Dispatch, getState: GetState) => ThunkAction1) => ThunkAction1;

type PromiseThunkAction1 = Promise<string>;
export const promiseThunkAction1 = (param1: ?string, param2: ?string) => (dispatch: Dispatch,
  getState: GetState): PromiseThunkAction1 => new Promise(resolve => {
  console.log(`${param1 || 'undefined'} ${param2 || 'undefined'}`)

  dispatch(addTodo(Math.random().toString()))
  dispatch(setVisibilityFilter('SHOW_COMPLETED'))

  console.log('updated state:', getState())
  return resolve('some async api information');
})

type PromiseThunkAction1Thunk = Thunk<PromiseThunkAction1>;
// type PromiseThunkAction1Thunk = (thunk: (dispatch: Dispatch, getState: GetState) => PromiseThunkAction1) => PromiseThunkAction1;
export type AllThunks = ThunkAction1Thunk & PromiseThunkAction1Thunk;
