import { Table } from "react-bootstrap";
import React, { Fragment } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get("http://localhost:5000/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <Fragment>
      <h1>All Users</h1>
      <h4>Users and their age</h4>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
              <tr key={idx}>
                <td>{u.username}</td>
                <td>{u.age}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </Fragment>
  );
}

export default Users;
