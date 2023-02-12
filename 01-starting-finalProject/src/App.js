import React from "react";
import AddUser from "./components/Users/AddUser";

function App() {
  const addUserHandler = (user) => {
    console.log(user);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
    </div>
  );
}

export default App;
