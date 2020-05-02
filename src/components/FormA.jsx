import React, { Component } from 'react';

export class FormA extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>THIS IS PART 1</h1>
        <label htmlFor="name">What's your name?</label>
        <input
          id="name"
          name="name"
          type="text"
          value={this.props.name}
          onChange={(e) => this.props.handleChange(e)}
        ></input>

        <label htmlFor="location">Where do you live?:</label>
        <select
          id="location"
          name="location"
          value={this.props.location}
          onChange={(e) => this.props.handleChange(e)}
        >
          <option value="sf">SF</option>
          <option value="la">LA</option>
          <option value="Anywhere else">Anywhere else</option>
        </select>
        <button onClick={this.props.nextButtonClick}>Go to Part 2</button>
      </div>
    );
  }
}

export default FormA;
