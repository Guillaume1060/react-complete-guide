import { React, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import Modal from "./components/UI/ErrorModal";

function App() {
  const [users, setUsers] = useState([{ id: 1, name: "Jean", age: 28 }]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList data={users} />
    </div>
  );
}

export default App;
