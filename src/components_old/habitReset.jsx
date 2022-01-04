import React, { Component } from 'react';

class HabitReset extends Component {
  handleReset = () => {
    this.props.onReset();
  };
  render() {
    return (
      <div>
        <button className='reset-all' onClick={this.handleReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default HabitReset;
