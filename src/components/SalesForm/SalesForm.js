import React from 'react'
import { SalesFormBody, SalesFormSection } from './styles';
import { useForm } from 'react-hook-form';
import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    textField: {
      width: "500px",
      height: "50px",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      color: "#2196F3",
      margin: "20px",
    },
    input: {
      color: "white"
    },
    button: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: "500px",
        height: "50px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        margin: "20px",
    }
  }));

const SalesForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      console.log("Submit sent" ,data);
      axios({
        method: 'POST',  
        url: "https://ptsv2.com/t/nxka6-1656915325/post",
        data: data,
        headers:{
          "Content-Type": "application/json",
        },
      }).then(function (response) {
        console.log(response);
      }).catch(function (errors) {
        console.log(errors);
      });
    };
    console.log(errors);
    const classes = useStyles();
    return (
        <SalesFormBody>
            <h1>Sales Form</h1> 
            <SalesFormSection>
              <form onSubmit={handleSubmit(onSubmit)}>
              <TextField className={classes.textField} id="outlined-basic" label="Sales Date" variant="outlined" InputLabelProps={{
          shrink: true,
        }} type="datetime-local" placeholder="Sales-Date" {...register("Sales Date", {required: true})} />
              <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Deal type</InputLabel> 
              <Select labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined" {...register("Deal type")}>
                  <MenuItem value="Cash">Cash</MenuItem>
                  <MenuItem value=" installment"> installment</MenuItem>
                  <MenuItem value=" card"> card</MenuItem>
              </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Deal Status</InputLabel>
              <Select labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined" {...register("Deal Status")}>
                  <MenuItem value="Open">Open</MenuItem>
                  <MenuItem value=" Closed"> Closed</MenuItem>
                  <MenuItem value=" Pending"> Pending</MenuItem>
              </Select>
              </FormControl>
              <TextField className={classes.textField} id="outlined-basic" label="First Name" variant="outlined" type="text" placeholder="First Name" {...register("First Name", {required: true})} />
              <TextField className={classes.textField} id="outlined-basic" label="Last Name" variant="outlined" type="text" placeholder="Last Name" {...register("Last Name", {required: true})} />
              <TextField className={classes.textField} id="outlined-basic" label="Driver Licence" variant="outlined" type="text" placeholder="Driver Licence" {...register("Driver Licence", {required: true})} />
              <TextField className={classes.textField} id="outlined-basic" label="Birth Date" variant="outlined" InputLabelProps={{
          shrink: true,
        }} type="datetime-local" placeholder="Birth Date" {...register("Birth Date", {required: true})} />
              <TextField className={classes.textField} id="outlined-basic" label="DL Expiration" variant="outlined" InputLabelProps={{
          shrink: true,
        }} type="datetime-local" placeholder="Driver license Expiration " {...register("Driver license Expiration ", {required: true})} />
              <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Inventory</InputLabel>
              <Select labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined" {...register("Inventory")}>
                  <MenuItem value="Load">Load</MenuItem>
                  <MenuItem value=" Inventory"> Inventory</MenuItem>
              </Select>
              </FormControl>
              <Button type="submit" className={classes.button} >Add Sales</Button>
              </form>
            </SalesFormSection>
        </SalesFormBody>
    )
}

export default SalesForm
