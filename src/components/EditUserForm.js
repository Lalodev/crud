import { useForm } from 'react-hook-form';

const EditUserForm = ({ currentUser, updateUser }) => {
  console.log(currentUser);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: currentUser,
  });

  setValue('name', currentUser.name);
  setValue('username', currentUser.username);

  const onSubmit = (data, e) => {
    //console.log(data);
    data.id = currentUser.id;

    updateUser(currentUser.id, data);
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
      <button>Edit user</button>
    </form>
  );
};

export default EditUserForm;
