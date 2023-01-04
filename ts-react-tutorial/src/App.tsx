import React from "react";
import Greetings from "./Greetings";

function App() {
    const onClick = (name: string) => {
        console.log(`${name} says hello`);
    };
    return (
        <div className="App">
            <Greetings name={"mingyu"} onClick={onClick} />
        </div>
    );
}

export default App;
