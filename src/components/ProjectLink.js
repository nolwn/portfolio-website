import React from "react";

const icons = {
  G: "fab fa-github",
  b: "fas fa-server",
  f: "fas fa-laptop"
}

const iconStyle = {
  width: "30px",
  marginRight: "10px",
  textAlign: "center",
}

const ProjectLink = props =>
  <li>
    <a
      style={{ color: "#444" }}
      href={ props.link }
    >
    <i
      style={ iconStyle }
      class={ icons[props.type[0]] }
    ></i>
    <strong>{ props.type }</strong> { props.link }
    </a>
  </li>;


export default ProjectLink;
