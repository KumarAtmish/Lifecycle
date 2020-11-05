import React from "react";
import "./styles.css";
import Header from "./Header";

export default class App extends React.Component {
  constructor() {
    super();
    console.log("Wrapper constructor");
    this.state = {
      showHeader: true
    };
  }
  componentDidMount = () => {
    console.log("App CDM");
  };
  shouldComponentUpdate = (nextProps, nextState) => {
    console.log(
      "App shouldComponentUpdate",
      nextProps,
      this.props,
      nextState,
      this.setState
    );
    return true;
  };
  componentDidUpdate = () => {
    console.log("wrapper componentDidUpdate");
  };
  render() {
    console.log("App Render");
    return (
      <div>
        App{this.state.showHeader && <Header />}
        <button
          onClick={() =>
            this.setState({
              showHeader: !this.state.showHeader
            })
          }
        >
          Hide/Show Header
        </button>
        <Header />
      </div>
    );
  }
}
