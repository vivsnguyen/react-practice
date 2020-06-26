// componentWillUpdate gets called in between shouldComponentUpdate and render.

// componentWillUpdate receives two arguments: nextProps and nextState. 

// You cannot call this.setState from the body of componentWillUpdate! 

// The main purpose of componentWillUpdate is to interact with things outside of the React architecture. If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, then componentWillUpdate is a good place to do that.

import React from 'react';
import ReactDOM from 'react-dom';
const yellow = 'rgb(255, 215, 18)';

export class TopNumber extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 'highest': 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.number > this.state.highest) {
      this.setState({
        highest: nextProps.number
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (document.body.style.background != yellow 
  && this.state.highest >= 950*1000) {
      document.body.style.background = yellow;
    } else if (!this.props.game 
  && nextProps.game) {
  document.body.style.background = 'white';
}
  }

  render() {
    return (
      <h1>
        Top Number: {this.state.highest}
      </h1>
    );
  }
}

TopNumber.propTypes = {
  number: React.PropTypes.number,
  game: React.PropTypes.bool
};