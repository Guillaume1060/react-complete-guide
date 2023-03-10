import { React, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([{ id: 1, name: "Jean", age: 28 }]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList data={users} />
    </>
  );
}

export default App;
