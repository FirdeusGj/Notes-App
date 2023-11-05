import React from "react";
import "./Notes.css";
import Button from "../Button/Button";
import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([{ id: 0, name: "test Note" }]);
  const [counter, setCounter] = useState(1);
  const [modal, setModal] = useState(false);
  const handleNotes = () => {
    console.log("working");
    setNotes((prev) => [...prev, { id: counter, name: "test Note" }]);
    setCounter(counter + 1);
    console.log(notes);
    setModal(!modal);
  };
  return (
    <div className="note">
      <div className="notes-wrapper">
        <div className="notes-title">
          <h1>Title</h1>
        </div>
        <div className="button-wrapper" onClick={handleNotes}>
          <Button name={"Create New Note"} />
        </div>
        <div className="notes">
          {notes.map((elem) => (
            <div key={elem.id} className="notes__names">
              <p>{elem.name}</p>
              {/* <div onClick={}>Delete</div> */}
            </div>
          ))}
        </div>
      </div>
      {modal ? (
        <div>
          <div>
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
