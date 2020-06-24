import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { userInput: '' };
    
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(e) {
    this.setState({userInput: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" 
          onChange={this.handleUserInput} 
          value={this.state.userInput}
        />

{/* This example doesn’t have a server per se, 
but any time that a user updates <input />, the 
new text is immediately stored in Input‘s state. 
We could easily connect that state with a server. 
What matters is that the text is sent somewhere 
to be stored on every character change. */}

        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);