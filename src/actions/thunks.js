// @flow

import type { Dispatch, GetState } from '../types'
import { addTodo, setVisibilityFilter } from './index';

export const thunkAction1 = (param1: ?string, param2: ?string) => (dispatch: Dispatch,
  getState: GetState): string => {
  console.log(`${param1 || 'undefined'} ${param2 || 'undefined'}`)

  dispatch(addTodo(Math.random().toString()))
  dispatch(setVisibilityFilter('SHOW_ALL'))

  console.log('updated state:', getState())
  return 'some sync api information';
}

export const promiseThunkAction1 = (param1: ?string, param2: ?string) => (dispatch: Dispatch,
  getState: GetState): Promise<string> => new Promise(resolve => {
  console.log(`${param1 || 'undefined'} ${param2 || 'undefined'}`)

  dispatch(addTodo(Math.random().toString()))
  dispatch(setVisibilityFilter('SHOW_COMPLETED'))

  console.log('updated state:', getState())
  return resolve('some async api information');
})
