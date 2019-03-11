import React from "react";
import { Container } from "reactstrap";

import { Arrow } from "./index";


const sectionStyle = {
  minHeight: "100vh",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center"
}

const Section = props =>
<Container className="section" id="1">
  <div style={ sectionStyle } id={ props.number || 1 }>
    { props.children }
  </div>
</Container>

export default Section;
