import React from 'react';
import { useForm } from 'react-hook-form';
import classes from '../Css/form.module.css';
import '../Css/Navbar.module.css';
import Navbar from './Navbar';

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>

    <Navbar/>

    <div className={classes.container}>
    <form className={classes.form} onSubmit={handleSubmit(data => console.log(data))}>
      <input className={classes.box} placeholder="First Name" {...register('firstName')} />
      <input className={classes.box} placeholder="Last Name" {...register('lastName', { required: true })} />
      {errors.lastName && <p>Last name is required.</p>}
      <input className={classes.box} placeholder="Amount" {...register('Amount')} />
      {errors.age && <p>Please enter number for age.</p>}
      <input className={classes.btn} type="submit" />
    </form>
    </div>
    
    </>
  );
}

export default Form;