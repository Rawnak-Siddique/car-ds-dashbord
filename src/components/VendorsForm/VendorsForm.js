import React from 'react';
import { VendorsFormBody, VendorsFormDate, VendorsFormImage, VendorsFormImageDiv, VendorsFormPicture, VendorsFormPictureDiv, VendorsFormSection } from './styles';
import { useForm } from 'react-hook-form';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const useStyles = makeStyles(() => ({
  textField: {
    width: "500px",
    height: "50px",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    color: "#2196F3",
    margin: "20px auto 20px auto",
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
    const [singleFile, setSingleFile] = useState('');
    const SingleFileChange = (e) => {
      setSingleFile(e.target.files[0]);
    };
    const uploadSingleFile = async () => {
      console.log(singleFile);
      const formData = new FormData();
      formData.append('file', singleFile);
      console.log(formData);
    };
  return (
    <VendorsFormBody>
      <h1>Add a Vendor</h1>
      <VendorsFormSection>
        <VendorsFormPicture>
          <h1>Add a Vendors Picture</h1>
          <button type="button" onClick={() => uploadSingleFile()} >Save picture</button>
          <VendorsFormPictureDiv {...getRootProps()} >
            <input type="file" onChange={(e) => SingleFileChange(e)} />
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
            <TextField className={classes.textField} id="outlined-basic" label="Password" variant="outlined" type="password" placeholder="Password" {...register("Password", {required: true})} />
            <TextField className={classes.textField} id="outlined-basic" label="Phone Number" variant="outlined" type="number" placeholder="Phone Number" {...register("Phone", {required: true})} />
            <TextField className={classes.textField} id="outlined-basic" label="Mobile Number" variant="outlined" type="number" placeholder="Mobile Number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
            <TextField className={classes.textField} id="outlined-basic" label="Location" variant="outlined" type="location" placeholder="Location" {...register("Location", {required: true})} />
            <TextField className={classes.textField} id="outlined-basic" label="Address" variant="outlined" type="text" placeholder="Address" {...register("Address", {required: true})} />
            <TextField className={classes.textField} id="outlined-basic" label="City" variant="outlined" type="text" placeholder="City" {...register("City", {required: true})} />
            <TextField className={classes.textField} id="outlined-basic" label="Province" variant="outlined" type="text" placeholder="Province" {...register("Province", {required: true})} />
            <TextField className={classes.textField} id="outlined-basic" label="Country" variant="outlined" type="text" placeholder="Country" {...register("Country", {required: true})} />
            <TextField className={classes.textField} id="outlined-basic" label="Postal Code" variant="outlined" type="text" placeholder="Postal Code" {...register("Postal Code", {required: true})} />

            <Button type="submit" className={classes.button} >Add Inventory</Button>

        </form>
      </VendorsFormDate>
    </VendorsFormSection>
    </VendorsFormBody>
  );
}

export default VendorsForm;
