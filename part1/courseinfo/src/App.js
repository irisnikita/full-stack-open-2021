// Libraries
import React from "react";

// Header component
const Header = ({ course }) => <h1>{course}</h1>;

// Part component
const Part = ({ content }) => (
  <p>
    {content.part} {content.exercises}
  </p>
);

// Content component
const Content = ({ contents }) => {
  return contents.map((content, index) => (
    <Part key={index} content={content} />
  ));
};

// Total components
const Total = ({ contents = [] }) => (
  <p>Number of exercises {contents.reduce((p, c) => p + c.exercises, 0)} </p>
);

// App components
const App = () => {
  const course = "Half Stack application development";
  const contents = [
    {
      part: "Fundamentals of React",
      exercises: 10,
    },
    {
      part: "Using props to pass data",
      exercises: 7,
    },
    {
      part: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content contents={contents} />
      <Total contents={contents} />
    </div>
  );
};

export default App;
