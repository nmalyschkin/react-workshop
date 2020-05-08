import React from "react";

const Counter = () => {
    const [counter, setCounter] = React.useState(0);
    const [counter2, setCounter2] = React.useState(0);

    const increase = () => {
        setCounter(counter + 1);
    };
    const increase2 = () => {
        setCounter2(counter2 + 1);
    };
    const increaseBoth = () => {
        setCounter(counter + 1);
        setCounter2(counter2 + 1);
    };

    console.log("rendering", { counter, counter2 });

    return (
        <div>
            <p>{counter}</p>
            <button onClick={increase}>Click Me!</button>
            <p>{counter2}</p>
            <button onClick={increase2}>Click Me!</button>
            <br />
            <button onClick={increaseBoth}>increase Both</button>
        </div>
    );
};

export default Counter;
