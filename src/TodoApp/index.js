import React from "react";

import TodoAppView from "./TodoAppView";

const TodoApp = () => {
    const [entries, setEntries] = React.useState([
        { message: "Clean the kitchen", done: false },
        { message: "Wash the dished", done: false },
        { message: "Watch Netflix", done: true },
    ]);

    const inputRef = React.useRef();

    const handleClick = () => {
        // add string to entries
        setEntries([...entries, { message: inputRef.current.value, done: false }]);
        inputRef.current.value = "";
    };

    const deleteEntryByIndex = (indexToDelete) => {
        // somehow delete a specific entry here
        const newEntries = entries.filter((el, index) => index !== indexToDelete);
        setEntries(newEntries);
    };

    const toggleEntryStateByIndex = (index) => {
        setEntries(
            entries.map((el, ind) => {
                if (ind === index) return { ...el, done: !el.done };
                else return el;
            })
        );
    };

    return (
        <TodoAppView
            {...{ entries, inputRef, handleClick, deleteEntryByIndex, toggleEntryStateByIndex }}
        />
    );
};

export default TodoApp;
