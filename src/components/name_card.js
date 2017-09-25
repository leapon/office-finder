import React, {Component} from 'react';
import styled from 'styled-components';

const NameCardWrapper = styled.div`
  border: solid 1px gray;
  padding: 20px;
`

class NameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name || 'n/a',
      score: this.props.score || 0
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('>>> componentWillReceiveProps nextProps:', nextProps);
    this.setState(nextProps);
  }
  render() {
    return (
      <NameCardWrapper className="namecard">
        <div>Name: { this.state.name }</div>
        <div>Score: { this.state.score }</div>
      </NameCardWrapper>
    );
  }
}

export default NameCard;