import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Modal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  /// MAJ DU FORM A CHAQUE UPDATE DANS LE FORM
  const enteredUserName = (e) => {
    setUserName(e.target.value);
  };
  const enteredUserAge = (e) => {
    setUserAge(e.target.value);
  };

  /// GESTION FINALE DU FORM APRES LE SUBMIT
  // ON ENVOIE LE USER AU PARENT APP.JS
  const addUserHandler = (e) => {
    e.preventDefault();
    if (userAge.trim().length === 0 || userName.trim().length === 0) {
      setError({
        title: "invalid Input",
        message: "Please enter valid name and age",
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter valid age",
      });
      return;
    }
    const user = {
      id: Math.random().toString(),
      name: userName,
      age: +userAge,
    };
    setUserAge("");
    setUserName("");
    props.onAddUser(user);
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
            onChange={enteredUserName}
            value={userName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={enteredUserAge}
            value={userAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
