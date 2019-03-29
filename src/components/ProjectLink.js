import React from "react";

const icons = {
  G: "fab fa-github",
  b: "fas fa-server",
  f: "fas fa-laptop",
  E: "fas fa-envelope-open-text",
  L: "fab fa-linkedin",
  C: "fas fa-map-marker-alt",
  P: "fas fa-phone"
}

const iconStyle = {
  width: "30px",
  marginRight: "10px",
  textAlign: "center",
}

const ProjectLink = props =>
  <li>
    <a
      style={{ color: "inherit" }}
      href={ props.link }
    >
    { console.log(props.type.charAt(0)) }
    <i
      style={ iconStyle }
      class={ icons[props.type[0]] }
    ></i>
  <strong>{ props.type }</strong> { props.text }
    </a>
  </li>;


export default ProjectLink;
