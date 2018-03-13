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

/*
  Portals:
    As you know React needs to mount on a div inside of the HTML.
    But what happens if you want to render something outisde of that div where you mounted?
    Portals baby, portals.
*/

class Portals extends Component {
  state = {
    message: "just did BIACH"
  };
  render() {
    return createPortal(
      <Message message={this.state.message} />,
      document.getElementById("untouchable")
    );
  }
}

const Message = ({ message }) => <h3>{message}</h3>;

/*
  Error Boundaries:
    When your component produces an error, is not cool to kill the whole app.
    Let's catch the errors so we can look more pro.
*/

class ErrorMaker extends Component {
  state = {
    isFetching: true
  };
  componentDidMount = () => {
    setTimeout(() => this.setState({ isFetching: false }), 2000);
  };
  render() {
    const { isFetching } = this.state;
    if (isFetching) {
      return "Fetching data";
    } else {
      throw new Error("shit");
    }
  }
}

const ErrorFallback = () => "Some error happened we all died";

class App extends Component {
  state = {
    hasError: false
  };
  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }
  render() {
    const { hasError } = this.state;
    return (
      <Fragment>
        <Strings />
        <Fragments />
        <Portals />
        {hasError ? <ErrorFallback /> : <ErrorMaker />}
      </Fragment>
    );
  }
}

export default App;
