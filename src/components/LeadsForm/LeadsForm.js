import React from 'react';
import { LeadsFormBody, LeadsFormSection } from './styles';
import { useForm } from 'react-hook-form';
import { FormControl, InputLabel, Button, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
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
    BackgroundColor: "white",
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
     
      minWidth: 120,
      width: "500px",
      height: "50px",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      margin: "20px",
      BackgroundColor: "white",
  },
}));

const LeadsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      console.log("Submit sent" ,data);
      axios({
        method: "post",
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
    }
    console.log(errors);

    const classes = useStyles();

  return (
    <LeadsFormBody>
      <LeadsFormSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField className={classes.textField} id="outlined-basic" label="First Name" variant="outlined" type="text" placeholder="First name" {...register("First name", {required: true})} />
        <TextField className={classes.textField} id="outlined-basic" label="Last Name" variant="outlined" type="text" placeholder="Last name" {...register("Last name", {required: true})} />
        <TextField className={classes.textField} id="outlined-basic" label="Phone" variant="outlined" type="text" placeholder="Phone number" placeholder="phone" {...register("phone", {required: true, min: 0})} />
        <TextField className={classes.textField} id="outlined-basic" label="Email" variant="outlined" type="email" placeholder="email" {...register("email", { required: true})} />
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Source</InputLabel>
        <Select labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined" {...register("source", { required: true })}>
          <MenuItem value="Web lead">Web lead</MenuItem>
          <MenuItem value=" trade-in"> trade-in</MenuItem>
          <MenuItem value=" request-info"> request-info</MenuItem>
          <MenuItem value=" contact"> contact</MenuItem>
          <MenuItem value=" drive-test"> drive-test</MenuItem>
        </Select>
        </FormControl>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
        <Select labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined" {...register("status", { required: true })}>
          <MenuItem value="new">new</MenuItem>
          <MenuItem value=" used"> used</MenuItem>
        </Select>
        </FormControl>
        <TextField className={classes.textField} id="outlined-basic" label="Assignee" variant="outlined" type="text" placeholder="Assignee" {...register("assignee", {required: true})} />
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Inventory</InputLabel>
        <Select labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined" {...register("Inventory", {required: true})}>
          <MenuItem value="AM General">AM General</MenuItem>
          <MenuItem value=" AMC"> AMC</MenuItem>
          <MenuItem value=" Acura"> Acura</MenuItem>
          <MenuItem value=" Alfa Romeo"> Alfa Romeo</MenuItem>
          <MenuItem value=" Aston Martin"> Aston Martin</MenuItem>
          <MenuItem value=" Atlas Copco"> Atlas Copco</MenuItem>
          <MenuItem value=" Audi"> Audi</MenuItem>
          <MenuItem value=" Austin Healey"> Austin Healey</MenuItem>
          <MenuItem value=" BMW"> BMW</MenuItem>
          <MenuItem value=" Bayliner"> Bayliner</MenuItem>
          <MenuItem value=" Bentley"> Bentley</MenuItem>
          <MenuItem value=" Bricklin"> Bricklin</MenuItem>
          <MenuItem value=" Bugatti"> Bugatti</MenuItem>
          <MenuItem value="  Buick">  Buick</MenuItem>
          <MenuItem value=" Budd"> Budd</MenuItem>
          <MenuItem value=" Cadillac"> Cadillac</MenuItem>
          <MenuItem value=" Capacity"> Capacity</MenuItem>
          <MenuItem value=" Carrier"> Carrier</MenuItem>
          <MenuItem value=" Caterpillar"> Caterpillar</MenuItem>
          <MenuItem value=" Cedar Rapids "> Cedar Rapids </MenuItem>
          <MenuItem value=" Chevrolet"> Chevrolet</MenuItem>
          <MenuItem value=" Chrysler"> Chrysler</MenuItem>
          <MenuItem value=" Daewoo"> Daewoo</MenuItem>
          <MenuItem value=" Daihatsu"> Daihatsu</MenuItem>
          <MenuItem value=" Datsun"> Datsun</MenuItem>
          <MenuItem value=" Dodge"> Dodge</MenuItem>
          <MenuItem value=" Ducati"> Ducati</MenuItem>
          <MenuItem value=" Eagle"> Eagle</MenuItem>
          <MenuItem value=" Excavating"> Excavating</MenuItem>
          <MenuItem value=" FIAT"> FIAT</MenuItem>
          <MenuItem value=" Ferrari"> Ferrari</MenuItem>
          <MenuItem value=" Fisker"> Fisker</MenuItem>
          <MenuItem value=" Ford"> Ford</MenuItem>
          <MenuItem value=" GMC"> GMC</MenuItem>
          <MenuItem value=" Genesis"> Genesis</MenuItem>
          <MenuItem value=" Genix"> Genix</MenuItem>
          <MenuItem value=" Geo HUMMER"> Geo HUMMER</MenuItem>
          <MenuItem value=" Harley-Davidson"> Harley-Davidson</MenuItem>
          <MenuItem value="Heartland">Heartland</MenuItem>
          <MenuItem value=" Hino"> Hino</MenuItem>
          <MenuItem value=" Honda"> Honda</MenuItem>
          <MenuItem value=" Hyundai"> Hyundai</MenuItem>
          <MenuItem value=" Infiniti"> Infiniti</MenuItem>
          <MenuItem value=" International"> International</MenuItem>
          <MenuItem value="International Harvester">International Harvester</MenuItem>
          <MenuItem value=" Isuzu"> Isuzu</MenuItem>
          <MenuItem value=" Jaguar"> Jaguar</MenuItem>
          <MenuItem value="JC">JC</MenuItem>
          <MenuItem value=" Jeep"> Jeep</MenuItem>
          <MenuItem value=" Kawasaki"> Kawasaki</MenuItem>
          <MenuItem value=" Kenworth"> Kenworth</MenuItem>
          <MenuItem value="Kia">Kia</MenuItem>
          <MenuItem value=" King"> King</MenuItem>
          <MenuItem value=" Lamborghini"> Lamborghini</MenuItem>
          <MenuItem value=" Land Rover"> Land Rover</MenuItem>
          <MenuItem value=" Lexus"> Lexus</MenuItem>
          <MenuItem value=" Lincoln"> Lincoln</MenuItem>
          <MenuItem value=" Lotus"> Lotus</MenuItem>
          <MenuItem value=" MACK"> MACK</MenuItem>
          <MenuItem value=" MG"> MG</MenuItem>
          <MenuItem value=" MINI"> MINI</MenuItem>
          <MenuItem value=" MV"> MV</MenuItem>
          <MenuItem value=" Mack"> Mack</MenuItem>
          <MenuItem value=" Maserati"> Maserati</MenuItem>
          <MenuItem value=" Maybach"> Maybach</MenuItem>
          <MenuItem value=" Mazda"> Mazda</MenuItem>
          <MenuItem value=" McLaren"> McLaren</MenuItem>
          <MenuItem value=" Mercedes-Benz"> Mercedes-Benz</MenuItem>
          <MenuItem value=" Mercury"> Mercury</MenuItem>
          <MenuItem value=" Mitsubishi"> Mitsubishi</MenuItem>
          <MenuItem value=" Mitsubishi"> Mitsubishi</MenuItem>
          <MenuItem value=" Mobility Ventures"> Mobility Ventures</MenuItem>
          <MenuItem value=" Nissan"> Nissan</MenuItem>
          <MenuItem value=" Oldsmobile"> Oldsmobile</MenuItem>
          <MenuItem value=" Opel"> Opel</MenuItem>
          <MenuItem value=" Panoz"> Panoz</MenuItem>
          <MenuItem value=" Peterbilt"> Peterbilt</MenuItem>
          <MenuItem value=" Peugeot"> Peugeot</MenuItem>
          <MenuItem value=" Plymouth"> Plymouth</MenuItem>
          <MenuItem value=" Polaris"> Polaris</MenuItem>
          <MenuItem value=" Pontiac"> Pontiac</MenuItem>
          <MenuItem value=" Porsche"> Porsche</MenuItem>
          <MenuItem value=" Ram"> Ram</MenuItem>
          <MenuItem value=" Reefer"> Reefer</MenuItem>
          <MenuItem value=" Renault"> Renault</MenuItem>
          <MenuItem value=" Roll-off"> Roll-off</MenuItem>
          <MenuItem value=" Rolls-Royce"> Rolls-Royce</MenuItem>
          <MenuItem value=" Saab"> Saab</MenuItem>
          <MenuItem value=" Saturn"> Saturn</MenuItem>
          <MenuItem value=" Scion"> Scion</MenuItem>
          <MenuItem value=" Shelby"> Shelby</MenuItem>
          <MenuItem value=" Smart"> Smart</MenuItem>
          <MenuItem value=" Spyker"> Spyker</MenuItem>
          <MenuItem value=" Sterling"> Sterling</MenuItem>
          <MenuItem value=" Subaru"> Subaru</MenuItem>
          <MenuItem value=" Suzuki"> Suzuki</MenuItem>
          <MenuItem value=" Taylor"> Taylor</MenuItem>
          <MenuItem value=" Terex"> Terex</MenuItem>
          <MenuItem value=" Tesla"> Tesla</MenuItem>
          <MenuItem value=" Thermo King"> Thermo King</MenuItem>
          <MenuItem value=" Thru-Way"> Thru-Way</MenuItem>
          <MenuItem value=" Toyota"> Toyota</MenuItem>
          <MenuItem value=" Trailmobile"> Trailmobile</MenuItem>
          <MenuItem value=" Triumph"> Triumph</MenuItem>
          <MenuItem value=" Utility"> Utility</MenuItem>
          <MenuItem value=" Volkswagen"> Volkswagen</MenuItem>
          <MenuItem value=" Volv"> Volv</MenuItem>
          <MenuItem value=" Western Star"> Western Star</MenuItem>
          <MenuItem value=" Yamaha"> Yamaha</MenuItem>
          <MenuItem value=" Yugo"> Yugo</MenuItem>
          <MenuItem value=" other"> other</MenuItem>
        </Select>
        </FormControl>
        <TextField className={classes.textField} id="outlined-basic" label="Created Date" variant="outlined" type="datetime-local" placeholder="Created date" {...register("Created date", {required: true})} />
        <TextField className={classes.textField} id="outlined-basic" label="vinNumber" variant="outlined" type="text" placeholder="vinNumber" {...register("vinNumber", {required: true})} />
        <TextField className={classes.textField} id="outlined-basic" label="Stock Number" variant="outlined" type="number" placeholder="stock number" {...register("stock number", { required: true, min: 0})} />
        <TextField className={classes.textField} id="outlined-basic" label="City" variant="outlined" type="text" placeholder="City" {...register("City", {required: true})} />
        <TextField className={classes.textField} id="outlined-basic" label="Province" variant="outlined" type="text" placeholder="Province" {...register("Province", {required: true})} />
        <TextField className={classes.textField} id="outlined-basic" label="Country" variant="outlined" type="text" placeholder="Country" {...register("Country", {required: true})} />
        <TextField className={classes.textField} id="outlined-basic" label="Postal Code" variant="outlined" type="text" placeholder="Postals Code" {...register("Postal Code", {required: true})} />
        <TextField className={classes.textField} id="outlined-basic" label="Driving Licence" variant="outlined" type="text" placeholder="Driving Licence" {...register("Driving Licence", {required: true})} />
        <TextField className={classes.textField} id="outlined-basic" label="Birth Date" variant="outlined" type="datetime-local" placeholder="Birth Date" {...register("Birth Date", {required: true})} />
        <TextField className={classes.textField} id="outlined-basic" label="DL Expiry Date" variant="outlined" type="datetime-local" placeholder="Driving licence Expiry Date" {...register("Driving licence Expiry Date", {required: true})} />
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Gender</InputLabel>
        <Select labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined" {...register("Gender", {required: true})}>
          <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
          <MenuItem value=" Male"> Male</MenuItem>
          <MenuItem value=" Female"> Female</MenuItem>
          <MenuItem value=" other"> other</MenuItem>
        </Select>
        </FormControl>
        <textarea {...register("Lead Comment", {required: true})} />

        <Button type="submit" className={classes.button} >Add Lead</Button>
    </form>
    </LeadsFormSection>
    </LeadsFormBody>
  );
}

export default LeadsForm;
