import React, { Component } from 'react';

export class FormB extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>THIS IS PART 2</h1>
        <button onClick={this.props.backButtonClick}>Go to Part 1</button>
        <label htmlFor="feelingElem">How are you?</label>
        <input
          id="feelingElem"
          name="feeling"
          type="text"
          value={this.props.feeling}
          onChange={(e) => this.props.handleChange(e)}
        ></input>

        <label htmlFor="favFoodElem">What do you like to eat?:</label>
        <select
          id="favFoodElem"
          name="favFood"
          value={this.props.favFood}
          onChange={(e) => this.props.handleChange(e)}
        >
          <option value="pancakes">Pancakes</option>
          <option value="iceCream">Ice Cream</option>
          <option value="Veggies">Veggies</option>
        </select>
      </div>
    );
  }
}

export default FormB;
