import React from "react";
import { Container } from "reactstrap";

import { Arrow } from "./index";


const sectionStyle = {
  paddingTop: "75px"
}

const Section = props =>
  <Container className="section" id="1">
    <div  style={{ ...sectionStyle, background: props.dark ? "#333" : "white" }} id={ props.number || 1 }>
      { props.children }
    </div>
  </Container>

export default Section;
