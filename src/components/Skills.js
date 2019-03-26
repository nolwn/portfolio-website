import React from "react";

const ulStyle = {
  listStyleType: "none",
  fontWeight: "bold",
  color: "#DE3D28",
  padding: "0px 10px 0px 10px"
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
    <span style={{ ...spanStyle, borderRadius: "10px 10px 0 0 " }} >Skills</span>
    <ul style={ ulStyle }>
      { props.skills.map(skill => <li>{ skill }</li>) }
    </ul>
    <span style={{ ...spanStyle, borderRadius: "0 0 10px 10px" }}></span>
  </div>;

export default Skills;
