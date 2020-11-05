import React from "react";

export default class Header extends React.Component {
  constructor() {
    super();
    console.log("header constructor");
  }
  componentDidMount = () => {
    console.log("header CDM");
  };
  componentWillUnmount = () => {
    console.log("Header componentWillUnmount");
  };
  render() {
    console.log("Header Render");
    return <div className="Header">Header</div>;
  }
}
