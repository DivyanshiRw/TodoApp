import React from "react";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-4">About This ToDo App</h1>
      <p className="text-base text-gray-700 mb-4">
        This is a simple ToDo application built with React, designed to 
        revise and reinforce React fundamentals. The user can add tasks with a
        title and description, view their list of tasks, and delete them when done.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4">
        <li>Each task must have a non-empty title and description.</li>
        <li>Tasks are saved in the app's local storage.</li>
        <li>The user can delete any task from the list with a single click.</li>
      </ul>
      <p className="text-base text-gray-600">
        This project is great for practicing component structure, state
        management, props, conditional rendering and basic form validation in
        React.
      </p>
    </div>
  );
};

export default About;
