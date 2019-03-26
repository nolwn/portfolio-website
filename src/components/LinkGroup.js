import React from "react";
import { ProjectLink } from "./index";

const LinkGroup = props =>
  <ul style={{ listStyle: "none", padding: "0", margin: "10px 0 20px 0" }}>
    {
      props.links ? props.links.map(link =>
        <ProjectLink
          type={ link.type }
          link={ link.url }
        />) : ""
    }
</ul>;

export default LinkGroup;
