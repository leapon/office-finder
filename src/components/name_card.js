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
      rank: Math.floor(this.props.score / 5)
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('>>> componentWillReceiveProps nextProps:', nextProps);
    this.setState({ rank:Math.floor(nextProps.score / 5)});
  }
  render() {
    return (
      <NameCardWrapper className="namecard">
        <div>Name: { this.props.name }</div>
        <div>Score: { this.props.score }</div>
        <div>Rank: { this.state.rank }</div>
      </NameCardWrapper>
    );
  }
}

export default NameCard;