/* @flow */

import React, { PropTypes } from 'react';
import _static from '../../hoc/_static';

type PropsType = {
  message: string,
};
type ContextType = {
  logger: Function;
};

const UseWrappedContext = (props: PropsType, context: ContextType) => {
  context.logger(props.message);

  return (<div>UseWrappedContext, check console for context message: "{props.message || 'undefined'}"</div>)
};

UseWrappedContext.contextTypes = {
  logger: PropTypes.func,
};

export default _static(UseWrappedContext);
