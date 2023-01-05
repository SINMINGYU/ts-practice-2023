import React from "react";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";
// import MyForm from "./MyForm";
// import ReducerSample from "./ReducerSample";
// import Counter from "./Counter";
// import Greetings from "./Greetings";

function App() {
    // const onClick = (name: string) => {
    //     console.log(`${name} says hello`);
    // };
    // const onSubmit = (form: { name: string; description: string }) => {
    //     console.log(form);
    // };
    return (
        <div className="App">
            <SampleProvider>
                <ReducerSample />
            </SampleProvider>
            {/* <ReducerSample /> */}
            {/* <MyForm onSubmit={onSubmit} /> */}
            {/* <Counter /> */}
            {/* <Greetings name={"mingyu"} onClick={onClick} /> */}
        </div>
    );
}

export default App;
