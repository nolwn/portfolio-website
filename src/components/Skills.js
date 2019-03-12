import React from "react";

const ulStyle = {
  listStyleType: "none",
  fontWeight: "bold",
  color: "#DE3D28",
  paddingLeft: "0px"
}

const spanStyle = {
  padding: "10px",
  display: "block",
  color: "white",
  fontWeight: "bold",
  background: "#DE3D28",
  marginBottom: "10px",
  width: "100%"
}

const Skills = props =>
  <div>
    <span style={ spanStyle } >Skills</span>
    <ul style={ ulStyle }>
      { props.skills.map(skill => <li>{ skill }</li>) }
    </ul>
  </div>;

export default Skills;
