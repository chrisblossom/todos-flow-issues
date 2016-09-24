// @flow
import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import type { Dispatch, Store } from './types'

import { promiseThunkAction1, thunkAction1 } from './actions/thunks';

const store: Store = createStore(reducer, applyMiddleware(thunk))

// ugly unsafeCoerce
const dispatch: Dispatch = ((store.dispatch: any): Dispatch)

const result: string = dispatch(thunkAction1('initial sync', 'thunk'))
console.log(result)
console.log('-')
dispatch(promiseThunkAction1('initial async', 'thunk'))
  .then((result: string): string => {
    console.log(result)
    return 'async really done'
  })
  .then((result: string): string => {
    console.log(result)

    console.log('rendering app...')
    console.log('-')

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
    return ''
  })
  .catch(error => {
    console.error(error)
    console.log('-')
    return error
  })


