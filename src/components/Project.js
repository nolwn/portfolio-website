import React from "react";
import { DemoBox, LinkGroup } from "./index";

const Project = props =>
  <div>
    <h2>{ props.title }</h2>
      <DemoBox
        skills={ props.skills }
        file={ props.file }
      />
    <LinkGroup links={ props.links } />
    {
      props.children
    }
  </div>;

export default Project;
