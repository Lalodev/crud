const UserTable = ({ users, deleteUser, editRow }) => {
  console.log(users);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => editRow(user)}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr colspan={3}>No users</tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
