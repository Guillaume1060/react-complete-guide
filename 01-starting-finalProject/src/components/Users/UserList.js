import React from "react";
import User from "./User";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const users = props.data.map((user) => <User key={user.id} {...user} />);

  return (
    <Card classname={styles.users}>
      <ul>{users}</ul>;
    </Card>
  );
};

export default UserList;
