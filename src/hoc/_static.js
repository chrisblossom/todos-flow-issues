/* @flow */

import React from 'react';

type FunctionComponent<P, C> = (props: P, context: C) => ?React$Element<any>;
type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;

function _static<P, S>(Component: ClassComponent<void, P, S> | FunctionComponent<P, S>): ClassComponent<void, P, void> {
  return class extends React.Component {
    shouldComponentUpdate() {
      return false
    }

    render() {
      return <Component {...this.props} />
    }
  }
}

export default _static;
