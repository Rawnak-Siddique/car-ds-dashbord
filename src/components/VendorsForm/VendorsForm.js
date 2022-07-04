import React from 'react';
import { VendorsFormBody, VendorsFormDate, VendorsFormImage, VendorsFormImageDiv, VendorsFormPicture, VendorsFormPictureDiv, VendorsFormPictureInput, VendorsFormSection } from './styles';
import { useForm } from 'react-hook-form';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

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
  button: {
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
},
}));

const VendorsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      console.log("Submit sent" ,data);
      axios.post({
        url: "http://t/k39ie-1656907049/post",
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

    const [yourImage, setImage] = useState([]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: "image/*",
      onDrop: (acceptedFiles) => {
        setImage(
          acceptedFiles.map((upFile) => Object.assign(upFile, {
            preview: URL.createObjectURL(upFile)
          }))
        );
      }
    });
  return (
    <VendorsFormBody>
      <h1>Add a Vendor</h1>
      <VendorsFormSection>
        <VendorsFormPicture>
          <h1>Add a Vendors Picture</h1>
          <VendorsFormPictureDiv {...getRootProps()} >
           <VendorsFormPictureInput {...getInputProps()} />
           {
            isDragActive ? <p>Drop image here</p> : <p>Drag & drop Image here or click here </p>
           }
           <VendorsFormImageDiv>
            {yourImage.map((upFile) => {
              return(
                <VendorsFormImage src={upFile.preview} alt='preview' />
              )
            })}
           </VendorsFormImageDiv> 
          </VendorsFormPictureDiv>
        </VendorsFormPicture>
        <VendorsFormDate>
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

            <Button className={classes.button} >Add Inventory</Button>

        </form>
      </VendorsFormDate>
    </VendorsFormSection>
    </VendorsFormBody>
  );
}

export default VendorsForm;
