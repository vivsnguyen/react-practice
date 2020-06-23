import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    const text = evt.target.value;
    this.props.chooseVideo(text);
  }

  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="cute" /> cute
        <input type="radio" name="src" value="eek" /> eek
      </form>
    );
  }
}