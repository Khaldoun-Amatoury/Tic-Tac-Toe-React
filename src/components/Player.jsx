import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  //two state binding
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // setIsEditing(isEditing ? false : true);
    //setIsEditing(!isEditing); // => schedule a state update to true
    //setIsEditing(!isEditing); // => schedule a state update to true
    //best practice below: gets the latest state value, that's why you should use the below function form
    //setIsEditing((editing) => !editing); // => schedule a state update to true
    setIsEditing((editing) => !editing); // => schedule a state update to false
  }

  function handleChange(event) {
    //triggered whenever user outputs value into input field
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      {/* <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button> */}
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  );
}
