import React, { Component } from 'react';
import FormA from '../components/FormA.jsx';
import FormB from '../components/FormB.jsx';
// import FormC from '../components/FormC.js';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.formA = 'FORM_A';
    this.formB = 'FORM_B';
    this.formC = 'FORM_C';
    this.state = {
      currentForm: this.formA,
      name: '',
      location: '',
      feeling: '',
      favFood: '',
    };

    // Anytime you pass a function into another component as a prop, need to bind it
    this.handleChange = this.handleChange.bind(this);
    this.goToFormA = this.goToFormA.bind(this);
    this.goToFormB = this.goToFormB.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  goToFormA(evt) {
    this.setState({ currentForm: this.formA });
  }
  goToFormB(evt) {
    this.setState({ currentForm: this.formB });
  }

  render() {
    switch (this.state.currentForm) {
      case this.formA:
        return (
          <FormA
            handleChange={this.handleChange}
            nextButtonClick={this.goToFormB}
            name={this.state.name}
            location={this.state.location}
          />
        );
      case this.formB:
        return (
          <FormB
            handleChange={this.handleChange}
            backButtonClick={this.goToFormA}
            feeling={this.state.feeling}
            favFood={this.state.favFood}
          />
        );
      default:
        return null;
    }
  }
}

export default Form;
