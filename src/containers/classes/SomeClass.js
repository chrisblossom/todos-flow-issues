/* @flow */

import { Component } from 'react';
import { connect } from 'react-redux';

import type { Connector } from 'react-redux';

import { addTodo, setVisibilityFilter } from '../../actions';

import type { Dispatch } from '../../types';

type PropsType = {
  dispatch: Dispatch,
  message: string,
};

type OwnPropsType = {
  message: string,
};

class SomeClass extends Component {
  componentWillMount() {
    const { dispatch, message } = this.props;

    console.log('dispatching addTodo:', message)
    dispatch(addTodo(message))
    dispatch(setVisibilityFilter('SHOW_ALL'))
    console.log('-')
  }

  render() {
    return null;
  }
}

const connector: Connector<OwnPropsType, PropsType> = connect();

export default connector(SomeClass);
