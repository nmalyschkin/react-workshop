import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: rebeccapurple;
    border: none;
    height: 36px;
`;

const Box = styled.div`
    width: 400px;

    display: grid;
    grid-template: auto / 1fr 30px 30px;

    place-items: center;
    :first-child {
        justify-self: left;
    }
`;

const Input = styled.input`
    height: 30px;
`;

const TodoAppView = ({
    entries,
    inputRef,
    handleClick,
    deleteEntryByIndex,
    toggleEntryStateByIndex,
}) => (
    <div>
        <EntryList {...{ deleteEntryByIndex, toggleEntryStateByIndex, entries }} />
        <Input ref={inputRef} />
        <Button {...{ onClick: handleClick }}>Add</Button>
    </div>
);

const EntryList = ({ entries, deleteEntryByIndex, toggleEntryStateByIndex }) => (
    <ul>
        {entries.map((entry, index) => (
            // <Entry entry={entry} index={index} deleteEntryByIndex={deleteEntryByIndex} />
            <Entry {...{ entry, index, deleteEntryByIndex, toggleEntryStateByIndex, key: index }} />
        ))}
    </ul>
);

const Entry = ({ index, entry, deleteEntryByIndex, toggleEntryStateByIndex }) => (
    <Box>
        <p>{entry.message}</p>
        <input
            type="checkbox"
            checked={entry.done}
            onChange={() => toggleEntryStateByIndex(index)}
        />
        <button onClick={() => deleteEntryByIndex(index)}>X</button>
    </Box>
);

export default TodoAppView;
