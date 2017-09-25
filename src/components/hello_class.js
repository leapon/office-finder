import React, {Component} from 'react';
import NameCard from './name_card';

class HelloClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        studentName: 'jack daniel',
        score: 1
      }
    }
    changeName() {
      console.log('changeName call');
      this.setState({ score:this.state.score+1 });
      console.log('>>> this.state:', this.state);
    }
    render() {
      return (
        <div className="hello col-md-4">
          <button className="btn btn-primary" onClick={ this.changeName.bind(this) }>
            Add Score
          </button>
          <br/><br/>
          <NameCard name={ this.state.studentName } score={ this.state.score }></NameCard>
        </div>
      );
    }
}

export default HelloClass;