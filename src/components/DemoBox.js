import { Row, Col } from "reactstrap";

import { ScreenShot, Skills } from "./index";

import React from "react";

const DemoBox = props =>
  <Row>
    <Col md="8" >
      <ScreenShot file={ props.file } />
    </Col>
    <Col md="4" >
      <Skills skills={ props.skills } />
    </Col>
  </Row>;

export default DemoBox;
