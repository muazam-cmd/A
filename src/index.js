// 1) Import React and React Dom Libraries 

import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root

const el = document.getElementById('root');

// 3) Tell a  React  to take control of that element

const root = ReactDOM.createRoot(el);

// 4) Create a Component

function App() {

    let message = 'bye There';
    if (Math.random() > 0.5) {
        message = 'hello there';
    }
    return <h1>Generating random response: {message}</h1>
}

// 5) Show the Component on the Screen
root.render(<App />);

