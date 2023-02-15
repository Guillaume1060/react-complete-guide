import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [userName, setUserName] = useState("");
  // const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  // /// MAJ DU FORM A CHAQUE UPDATE DANS LE FORM
  // const enteredUserName = (e) => {
  //   setUserName(e.target.value);
  // };
  // const enteredUserAge = (e) => {
  //   setUserAge(e.target.value);
  // };

  /// GESTION FINALE DU FORM APRES LE SUBMIT
  // ON ENVOIE LE USER AU PARENT APP.JS
  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredAge.trim().length === 0 || enteredName.trim().length === 0) {
      setError({
        title: "invalid Input",
        message: "Please enter valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter valid age",
      });
      return;
    }
    const user = {
      id: Math.random().toString(),
      name: enteredName,
      age: +enteredAge,
    };
    // setUserAge("");
    // setUserName("");
    props.onAddUser(user);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <Modal title={error.title} message={error.message} btn={errorHandler} />
      )}
      <Card classname={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={userName}
            // onChange={enteredUserName}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            // value={userAge}
            // onChange={enteredUserAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
