import React from "react";
import ReactDOM from "react-dom";

import TodoApp from "./TodoApp";

const App = () => {
    return (
        <div>
            <TodoApp />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

// class Counter extends React.Component {
//     constructor() {
//         super();
//         this.state = { counter: 0, counter2: 0 };
//     }

//     handleClick() {
//         this.setState({ counter: this.state.counter + 1 });
//     }

//     render() {
//         return (
//             <div>
//                 <p>{this.state.counter}</p>
//                 <button onClick={this.handleClick.bind(this)}>Click Me!</button>
//             </div>
//         );
//     }
// }
