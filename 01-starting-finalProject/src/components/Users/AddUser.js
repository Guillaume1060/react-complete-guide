import React, { useState } from "react";
// import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState(0);

  /// MAJ DU FORM A CHAQUE UPDATE DANS LE FORM
  const enteredUserName = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };
  const enteredUserAge = (e) => {
    e.preventDefault();
    setUserAge(e.target.value);
  };

  /// GESTION FINALE DU FORM APRES LE SUBMIT
  // ON ENVOIE LE USER AU PARENT APP.JS
  const addUserHandler = (e) => {
    e.preventDefault();
    const user = { name: userName, age: +userAge };
    props.onAddUser(user);
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        onChange={enteredUserName}
        value={userName}
      />
      <label htmlFor="age">Age</label>
      <input id="age" type="number" onChange={enteredUserAge} value={userAge} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
