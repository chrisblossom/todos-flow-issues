/* @flow */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import type { Connector } from 'react-redux';

import _static from '../../hoc/_static';

import { addTodo, setVisibilityFilter } from '../../actions';

import type { Dispatch } from '../../types';

type PropsType = {
  dispatch: Dispatch,
  message: string,
};

type OwnPropsType = {
  message: string,
};

class SomeWrappedClassWithContext extends Component {
  componentWillMount() {
    const { dispatch, message } = this.props;

    this.context.logger(message);

    dispatch(addTodo(message))
    dispatch(setVisibilityFilter('SHOW_ALL'))
    console.log('-')
  }

  render() {
    return (<div>SomeWrappedClassWithContext, check console for context message: "{this.props.message || 'undefined'}"</div>)
  }
}

SomeWrappedClassWithContext.contextTypes = {
  logger: PropTypes.func,
};

const connector: Connector<OwnPropsType, PropsType> = connect();

export default connector(_static(SomeWrappedClassWithContext));
