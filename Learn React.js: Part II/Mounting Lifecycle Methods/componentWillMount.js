// There are three mounting lifecycle methods:

//     componentWillMount
//     render
//     componentDidMount

// When a component mounts, it automatically calls these three methods, in order.

// When a component renders for the first time, 
// componentWillMount gets called right before render.

import React from 'react';
import ReactDOM from 'react-dom';

export class Flashy extends React.Component {
  componentWillMount() {
      	alert('AND NOW, FOR THE FIRST TIME EVER...  FLASHY!!!!');
  }

  render() {

    alert('Flashy is rendering!');
    
    return (
      <h1 style={{ color: this.props.color }}>
        OOH LA LA LOOK AT ME I AM THE FLASHIEST
      </h1>
    );
  }
}

ReactDOM.render(
  <Flashy color='red' />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Flashy color='green' />,
    document.getElementById('app')
  );
}, 2000);
