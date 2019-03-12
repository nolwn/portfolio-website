import React from "react";

import { DemoBox } from "./index";

const Project = props =>
  <div>
    <h2>{ props.title }</h2>
      <DemoBox
        skills={ props.skills }
        file={ props.file }
      />
    {
      props.children
    }
  </div>;

export default Project;
