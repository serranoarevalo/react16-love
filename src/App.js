import React, { Component, Fragment } from "react";
import { createPortal } from "react-dom";

/*
  Return types:
  
  Before React 16 you couldn't return strings or multiple elements

*/

class Strings extends Component {
  render() {
    return "Hello";
  }
}

/*
  Muliple Elements:
    If you wanted to return a list of something you would have
    to wrap in in an array (and add keys) or wrap it into a useless span.
    That ends now.
*/

class Fragments extends Component {
  render() {
    return (
      <Fragment>
        <div>One</div>
        <div>Two</div>
      </Fragment>
    );
  }
}

const Message = ({ message }) => <h3>{message}</h3>;

class App extends Component {
  render() {
    return (
      <Fragment>
        <Strings />
        <Fragments />
      </Fragment>
    );
  }
}

export default App;
