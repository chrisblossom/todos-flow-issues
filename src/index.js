// @flow
import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import type { Store } from './types'

import { promiseThunkAction1, thunkAction1 } from './actions/thunks';

const store: Store = createStore(reducer, applyMiddleware(thunk))

const result: string = store.dispatch(thunkAction1('initial sync', 'thunk'))
console.log(result)
console.log('-')
store.dispatch(promiseThunkAction1('initial async', 'thunk'))
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


