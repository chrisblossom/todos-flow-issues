/* @flow */

import { Component } from 'react';
import { connect } from 'react-redux';

import type { Connector } from 'react-redux';

import _static from '../../hoc/_static';

import { addTodo, setVisibilityFilter } from '../../actions';

import type { Dispatch } from '../../types';

type PropsType = {
  dispatch: Dispatch,
};

type OwnPropsType = {
  message: string,
};

class SomeWrappedClass extends Component {
  componentWillMount() {
    const { dispatch, message } = this.props;

    console.log('wrapped dispatching addTodo:', message)
    dispatch(addTodo(message))
    dispatch(setVisibilityFilter('SHOW_ALL'))
    console.log('-')
  }

  render() {
    return null;
  }
}

const connector: Connector<OwnPropsType, PropsType> = connect();

export default connector(_static(SomeWrappedClass));
