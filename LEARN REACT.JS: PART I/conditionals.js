// Use a Conditional in a Render Function

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let plan;
    (fiftyFifty ? plan = <h1>Tonight I'm going out WOOO</h1> : plan = <h1>Tonight I'm going to bed WOOO</h1>);
    return(plan);
  }
}

ReactDOM.render(<TonightsPlan />, document.getElementById('app'));