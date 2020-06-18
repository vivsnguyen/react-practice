// pass props from component to component

// // Greeting.js
// import React from 'react';

// export class Greeting extends React.Component {
//   render() {
//     return <h1>Hi there, {this.props.name}!</h1>;
//   }
// }

import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting }  from './Greeting.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        
        <Greeting name="Vivi"/>

        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);