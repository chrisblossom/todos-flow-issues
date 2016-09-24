/* @flow */

import React, { PropTypes } from 'react';

type PropsType = {
  message: string,
};
type ContextType = {
  logger: Function;
};

const UseContext = (props: PropsType, context: ContextType) => {
  context.logger(props.message);

  return (<div>UseContext, check console for context message: "{props.message || 'undefined'}"</div>)
};

UseContext.contextTypes = {
  logger: PropTypes.func,
};

export default UseContext;
