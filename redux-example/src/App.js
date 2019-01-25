import React, { Component } from "react";
import { connect } from "react-redux";
import { setActionTemplate } from "./actions";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  handleOnClick = () => {
    console.log("handleOnClick");
    this.props.handleOnClick("jezfx");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Current item ID: {this.props.itemId}</p>
          <button
            onClick={this.handleOnClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </button>
        </header>
      </div>
    );
  }
}

//redux configuration:
const mapStateToProps = (state, ownProps) => {
  return {
    itemId: state.itemId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleOnClick: id => dispatch(setActionTemplate(id))
  };
};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
