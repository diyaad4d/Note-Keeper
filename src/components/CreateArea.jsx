import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
    const [newTitle, setNewTitle] = useState("");
    const [newNote, setNewNote] = useState("");

    const [isExpand, setIsExpand] = useState(false);

    function handleTitle(event) {
        const newValue = event.target.value;
        setNewTitle(newValue);
    }
    function handleNote(event) {
        const newValue = event.target.value;
        setNewNote(newValue);
    }
    function expand() {
        setIsExpand(true);
    }
    return (
        <div>
            <form class="create-note">
                {isExpand ? (
                    <input
                        name="title"
                        placeholder="Title"
                        onChange={handleTitle}
                        value={newTitle}
                    />
                ) : null}
                <textarea
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpand ? 3 : 1}
                    onChange={handleNote}
                    value={newNote}
                    onClick={expand}
                />
                <Zoom in={isExpand ? true : false}>
                    <Fab
                        onClick={(event) => {
                            event.preventDefault();
                            props.onAdd(newTitle, newNote);
                            setNewNote("");
                            setNewTitle("");
                        }}
                    >
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
