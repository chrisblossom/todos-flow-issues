/* @flow */

/**
 * Adds this.context.logger to all components
 * Heavily borrowed from
 * https://github.com/reactjs/react-redux/blob/c20ae482a274dd2002b7814dd46ac503efb300ec/src/components/Provider.js
 */

import React, { Component, PropTypes } from 'react';

class ChildrenContext extends Component {
  getChildContext() {
    return {
      logger: (message: string) => {
        console.log('**running context message: ', message)
        console.log('-')
      }
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

ChildrenContext.childContextTypes = {
  logger: PropTypes.func.isRequired,
};

export default ChildrenContext;
