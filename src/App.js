import { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

const usersData = [
  { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
  { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
  { id: uuidv4(), name: 'Ben', username: 'benisphere' },
];

function App() {
  const [users, setUsers] = useState(usersData);
  const [edit, setEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: '',
  });

  //Agregar Usuario
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //Eliminar Usuario
  const deleteUser = (id) => {
    console.log(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  //Editar Usuario
  const editRow = (user) => {
    setEdit(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  const updateUser = (id, updateUser) => {
    setEdit(false);

    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {edit ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            setEdit={setEdit}
            editRow={editRow}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
