import React from "react";
import { Container, Col, Row } from "reactstrap";

const Home = () =>
  <div>
    <Row>
      <Col sm="8">
        <h1>About</h1>
        <p>
          I am a JavaScript developer with experience in React, Node, and other related libraries. I have designed websites (including this one) and worked on various other projects.
        </p>
        <p>
          Before becoming a developer I worked at a shop making printing plates for brands including Monster, Coca-Cola and Four Loko. I also worked as a “Program Manager” at a small startup whose focus was on education reform.
        </p>
        <p>
          No matter where I worked, though, I could not stop thinking about the Computer Science classes I took at the UW and how fun they had been. I worked on a variety of little personal projects, coding in Python and Java and then decided I needed to make a career out of it.
        </p>
      </Col>
      <Col sm="4">
        <h1>Skills</h1>
        <ul>
          <li>Node.js</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>Express.js</li>
          <li>JWT</li>
          <li>Socket.io,</li>
          <li>PostgreSQL</li>
          <li>Redis</li>
          <li>MySQL</li>
          <li>HTML/CSS</li>
          <li>jQuery</li>
        </ul>
      </Col>
    </Row>
  </div>

export default Home;
