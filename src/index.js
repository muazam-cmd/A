// 1) Import React and React Dom Libraries 

import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root

const el = document.getElementById('root');

// 3) Tell a  React  to take control of that element

const root = ReactDOM.createRoot(el);

// 4) Create a Component

function App() {

    // Converting Html into Jsx examples:
    // 1) Always in camelCase
    // 2) Always in Square brackets
    // 3) In Boolean 'true' just by property name. false should be written with curly braces. 
    // 4) ClassName instead of class
    // 5) Inline styling are provided as objects

    //////////////////////// Applying All Jsx Rules below: ////////////////////////////////////////////////////////////////

    // All prop names follow camelCase capitalization

    // Number attributes use curly braces

    // Booleans of 'true' can be written with just the property name

    // The 'class' attribute is written as 'className'

    return (
        <div className="wrapper">
            <textarea
                readOnly
                maxLength={3}
                spellCheck
                style={{ backgroundColor: "gray" }}
            />
        </div>
    );
}

// 5) Show the Component on the Screen
root.render(<App />);

