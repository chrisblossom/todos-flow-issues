/* @flow */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import type { Connector } from 'react-redux';

import { addTodo, setVisibilityFilter } from '../../actions';

import type { Dispatch } from '../../types';

type PropsType = {
  dispatch: Dispatch,
};

type OwnPropsType = {
  message: string,
};

class SomeClassWithContext extends Component {
  componentWillMount() {
    const { dispatch, message } = this.props;

    this.context.logger(message);

    dispatch(addTodo(message))
    dispatch(setVisibilityFilter('SHOW_ALL'))
    console.log('-')
  }

  render() {
    return (<div>SomeClassWithContext, check console for context message: "{this.props.message || 'undefined'}"</div>)
  }
}

SomeClassWithContext.contextTypes = {
  logger: PropTypes.func,
};

const connector: Connector<OwnPropsType, PropsType> = connect();

export default connector(SomeClassWithContext);
