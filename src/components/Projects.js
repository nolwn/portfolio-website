import React from "react";
import { Project } from "./index";

const Projects = () =>
  <div>
    <h1>Projects</h1>
    <Project
      title="Chess Match"
      file="move.png"
      skills={[
        "Socket.io",
        "React",
        "Redux",
        "PostgreSQL",
        "Redis",
        "Node.js",
        "Express.js"
      ]}
      links={[
        {
          type: "GitHub",
          url: "https://github.com/nolwn/capstone",
          text: "github.com/nolwn/capstone"
        },
        {
          type: "frontend",
          url: "https://chess-match.herokuapp.com",
          text: "chess-match.herokuapp.com"
        },
        {
          type: "backend",
          url: "https://chess-match-api.herokuapp.com",
          text: "chess-match-api.herokuapp.com"
        }
      ]}
    >
      <p>Chess Match is a chess server that enables users to play with each other in real time. The client communicates with the API using both RESTful API calls, and WebSockets through Socket.io. The API stores past games, verifies moves, and manages multiple active games across many users.</p>
    </Project>
    <Project
      title="Express Blog"
      file="ExpressBlog.png"
      skills={[
        "Mocha",
        "Chai",
        "APIs",
        "Node.js",
        "Express.js",
        "HTML/CSS"
      ]}
      links={[
        {
          type: "GitHub",
          url: "https://github.com/nolwn/express-blog",
          text: "github.com/nolwn/express-blog"
        }
      ]}
    >
    <p>A web program that allows anyone to make posts to a single wall. Unit testing of backend functions is done with Mocha and Chai.
    </p>
    </Project>
    <Project
      title="Magic: The Gathering Deck Utility"
      file="deck-builder.png"
      skills={[
        "Git",
        "Node.js",
        "APIs",
        "Express.js",
        "React",
        "Redux",
        "PostgreSQL",
        "HTML/CSS"
      ]}
      links={[
        {
          type: "GitHub (frontend)",
          url: "https://github.com/nolwn/q3-project-front-end",
          text: "github.com/nolwn/q3-project-front-end"

        },
        {
          type: "GitHub (backend)",
          url: "https://github.com/nolwn/q3-project-back-end",
          text: "github.com/nolwn/q3-project-back-end"
        }
      ]}
    >
      <p>A web program where users can track the “mana curves” of card decks built for Magic: The Gathering card game. Built collaboratively with one other person using Git.</p>
    </Project>
  </div>;

export default Projects;
