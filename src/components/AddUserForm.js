import { useForm } from 'react-hook-form';

const AddUserForm = ({ addUser }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    addUser(data);

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register('name', {
          required: { value: true, message: 'Campo requerido' },
        })}
      />
      {errors?.name?.message}
      <label>Username</label>
      <input
        type="text"
        name="username"
        {...register('username', {
          required: { value: true, message: 'Campo requerido' },
        })}
      />
      {errors?.username?.message}
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
