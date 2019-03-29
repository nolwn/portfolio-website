import React from "react";
import { Container, Row, Col } from "reactstrap";
import { LinkGroup } from "./index";

const Connect = props =>
  <div style={{ background: "#333", padding: "75px 0px", color: "white" }}>
    <Container>
      <Row>
        <Col md="5" style={{ textAlign: "right" }}>
          <h2>Connect</h2>
        </Col>
        <Col>
          <LinkGroup
            links={[
              {
                type: "Email",
                url: "mailto:nolan.hellyer@gmail.com ",
                text: "nolan.hellyer@gmail.com "
              },
              {
                type: "Phone",
                text: "(425) 269–7410 "
              },
              {
                type: "GitHub",
                url: "https://github.com/nolwn",
                text: "github.com/nolwn"
              },
              {
                type: "LinkedIn",
                url: "http://linkedin.com/in/nolan-hellyer",
                text: "linkedin.com/in/nolan-hellyer"
              },
              {
                type: "City",
                text: "Seattle, WA"
              }
            ]}
          />
        </Col>
      </Row>
    </Container>
  </div>;

export default Connect;
