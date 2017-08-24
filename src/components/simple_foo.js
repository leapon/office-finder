import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class SimpleFoo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="foo">
        Simple Bar
      </div>
    );
  }
}

SimpleFoo.propTypes = propTypes;
SimpleFoo.defaultProps = defaultProps;

export default SimpleFoo;
