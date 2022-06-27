import React from 'react';
import { VendorsFormBody } from './styles';
import { useForm } from 'react-hook-form';
import { makeStyles, TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  textField: {
    width: "500px",
    height: "50px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    color: "#2196F3",
    margin: "20px"
  },
  input: {
    color: "white"
  },
}));

const VendorsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const classes = useStyles();
  return (
    <VendorsFormBody>
      <h1>hi</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField className={classes.textField} id="outlined-basic" label="First Name" variant="outlined" type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
        <TextField className={classes.textField} id="outlined-basic" label="Last Name" variant="outlined" type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
        <TextField className={classes.textField} id="outlined-basic" label="Email" variant="outlined" type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
        <TextField className={classes.textField} id="outlined-basic" label="Password" variant="outlined" type="password" placeholder="Password" {...register("Password", {})} />
        <TextField className={classes.textField} id="outlined-basic" label="Phone Number" variant="outlined" type="number" placeholder="Phone Number" {...register("Phone", {})} />
        <TextField className={classes.textField} id="outlined-basic" label="Mobile Number" variant="outlined" type="number" placeholder="Mobile Number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
        <TextField className={classes.textField} id="outlined-basic" label="Location" variant="outlined" type="location" placeholder="Location" {...register("Location", {})} />
        <TextField className={classes.textField} id="outlined-basic" label="Address" variant="outlined" type="text" placeholder="Address" {...register("Address", {})} />
        <TextField className={classes.textField} id="outlined-basic" label="City" variant="outlined" type="text" placeholder="City" {...register("City", {})} />
        <TextField className={classes.textField} id="outlined-basic" label="Province" variant="outlined" type="text" placeholder="Province" {...register("Province", {})} />
        <TextField className={classes.textField} id="outlined-basic" label="Country" variant="outlined" type="text" placeholder="Country" {...register("Country", {})} />
        <TextField className={classes.textField} id="outlined-basic" label="Postal Code" variant="outlined" type="text" placeholder="Postal Code" {...register("Postal Code", {})} />

      <input type="submit" />
    </form>
    </VendorsFormBody>
  );
}

export default VendorsForm;
