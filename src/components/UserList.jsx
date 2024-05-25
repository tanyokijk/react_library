import { useEffect, useState, useCallback } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <section>
      <h3>Користувачі</h3>
      <table>
        <thead>
          <th>
            <td>Id</td>
          </th>
          <th>
            <td>Name</td>
          </th>
          <th>
            <td>Username</td>
          </th>
          <th>
            <td>Email</td>
          </th>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UserList;
