import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Arrow extends Component {
  constructor(props) {
    super(props);
    const color = this.props.white ? "white" : "#333";

    this.style = {
      transform: "rotate(45deg)",
      background: "blue",
      borderRight: `5px ${color} solid`,
      borderBottom: `5px ${color} solid`,
      width: "35px",
      height: "35px",
      display: "block",
      position: "absolute",
      bottom: 50,
      left: 0,
      right: 0,
      margin: "auto"
    }
  }

  render = () =>
    <AnchorLink href={ "#" + this.props.number }>
      <span style={ this.style }></span>
    </AnchorLink>;
}

export default Arrow;
