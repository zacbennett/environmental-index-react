import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <section className="home-main-section">
        <div className="call-to-action">
          <h1 className="title">Protect what has </h1>
          <h1 className="title"> always protected you </h1>
          <a href="survey.html" className="btn">
            Take our survey
          </a>
        </div>
      </section>
    );
  }
}
