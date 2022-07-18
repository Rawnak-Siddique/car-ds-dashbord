import React from 'react';
import { LeadsFormBody, LeadsFormInputLabel, LeadsFormInputSection, LeadsFormInputValue, LeadsFormSection } from './styles';
import { useForm } from 'react-hook-form';
import { FormControl, InputLabel, Button, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "400px",
    height: "100%",
    fontWeight: 500,
    background: "#fafafa",
    color: "#2196F3",
  },
  input: {
    color: "white"
  },
  button: {
      background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '3px 3px 5px 2px rgba(33, 203, 243, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '120px',
    height: "100%",
    fontWeight: "500",
    background: "white",
    borderRadius: "10px",
  },
}));

const LeadsForm = () => {
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
    }
    console.log(errors);

    const classes = useStyles();

  return (
    <LeadsFormBody>
      <LeadsFormSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LeadsFormInputSection>
          <LeadsFormInputLabel>
            First Name
          </LeadsFormInputLabel>
          <LeadsFormInputValue>
            <TextField className={classes.textField} id="outlined-basic" label="First Name" variant="outlined" type="text" placeholder="First name" {...register("First name", {required: true})} />
          </LeadsFormInputValue>
        </LeadsFormInputSection>
        <LeadsFormInputSection>
          <LeadsFormInputLabel>
            Last Name
          </LeadsFormInputLabel>
          <LeadsFormInputValue>
            <TextField className={classes.textField} id="outlined-basic" label="Last Name" variant="outlined" type="text" placeholder="Last name" {...register("Last name", {required: true})} />
          </LeadsFormInputValue>
        </LeadsFormInputSection>
        <LeadsFormInputSection>
          <LeadsFormInputLabel>
            Phone number
          </LeadsFormInputLabel>
          <LeadsFormInputValue>
            <TextField className={classes.textField} id="outlined-basic" label="Phone" variant="outlined" type="text" placeholder="Phone number" {...register("phone", {required: true, min: 0})} />
          </LeadsFormInputValue>
        </LeadsFormInputSection>
        <LeadsFormInputSection>
          <LeadsFormInputLabel>
            Email
          </LeadsFormInputLabel>
          <LeadsFormInputValue>
            <TextField className={classes.textField} id="outlined-basic" label="Email" variant="outlined" type="email" placeholder="email" {...register("email", { required: true})} />
          </LeadsFormInputValue>
        </LeadsFormInputSection>
        <LeadsFormInputSection>
          <LeadsFormInputLabel>
            Source
          </LeadsFormInputLabel>
          <LeadsFormInputValue>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Source</InputLabel>
              <Select labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined" label="Source" {...register("source", { required: true })}>
                {SourceList.map((source, index) => (
                  <MenuItem key={index} value={source.value}>{source.label}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </LeadsFormInputValue>
        </LeadsFormInputSection>
        <LeadsFormInputSection>
          <LeadsFormInputLabel>
            Status
          </LeadsFormInputLabel>
          <LeadsFormInputValue>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
            <Select labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined" label="Status" {...register("status", { required: true })}>
              {StatusList.map((status, index) => (
                <MenuItem key={index} value={status.value}>{status.label}</MenuItem>
              ))}
          </Select>
          </FormControl>
          </LeadsFormInputValue>
        </LeadsFormInputSection>
        <LeadsFormInputSection>
          <LeadsFormInputLabel>
            Assignee
          </LeadsFormInputLabel>
          <LeadsFormInputValue>
            <TextField className={classes.textField} id="outlined-basic" label="Assignee" variant="outlined" type="text" placeholder="Assignee" {...register("assignee", {required: true})} />
          </LeadsFormInputValue>
        </LeadsFormInputSection>
        <LeadsFormInputSection>
          <LeadsFormInputLabel>
            Status
          </LeadsFormInputLabel>
          <LeadsFormInputValue>
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Inventory</InputLabel>
        <Select labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined" label="Inventory" {...register("Inventory", {required: true})}>
          {BrandList.map((brand, index) => (
            <MenuItem key={index} value={brand.label}>{brand.label}</MenuItem>
          ))}
        </Select>
        </FormControl>
          </LeadsFormInputValue>
        </LeadsFormInputSection> 
        <LeadsFormInputSection>
          <LeadsFormInputLabel>
            Todays Date
          </LeadsFormInputLabel>
          <LeadsFormInputValue>
            <TextField className={classes.textField} id="outlined-basic" label="Created Date" variant="outlined" type="datetime-local" placeholder="Created date" {...register("Created date", {required: true})} />
          </LeadsFormInputValue>
        </LeadsFormInputSection> 
        <LeadsFormInputSection>
          <LeadsFormInputLabel>
            Vin Number
          </LeadsFormInputLabel>
          <LeadsFormInputValue>
          <TextField className={classes.textField} id="outlined-basic" label="vinNumber" variant="outlined" type="text" placeholder="vinNumber" {...register("vinNumber", {required: true})} />
          </LeadsFormInputValue>
        </LeadsFormInputSection> 
        
        
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
const SourceList = [
  { label:"Web lead", value:"Web-lead" },
  { label:"Trade In", value:"trade-in" },
  { label:"Request Information", value:"request-info" },
  { label:"Contact", value:"contact" },
  { label:"Test Driving", value:"drive-test" },
];
const StatusList = [
  { label:"New", value:"new" },
  { label:"2nd Hand", value:"Used" },
];
const BrandList = [
  {
      label: 'AM General',
  },
  {
      label: 'AMC',
  },
  {
      label: 'Acura',
  },
  {
      label: 'Alfa Romeo',
  },
  {
      label: 'Aston Martin',
  },
  {
      label: 'Atlas Copco',
  },
  {
      label: 'Audi',
  },
  {
      label: 'Austin Healey',
  },
  {
      label: 'BMW',
  },
  {
      label: 'Bayliner',
  },
  {
      label: 'Bentley',
  },
  {
      label: 'Bricklin',
  },
  {
      label: 'Bugatti',
  },
  {
      label: 'Buick',
  },
  {
      label: 'Budd',
  },
  {
      label: 'Cadillac',
  },
  {
      label: 'Capacity',
  },
  {
      label: 'Carrier',
  },
  {
      label: 'Caterpillar',
  },
  {
      label: 'Cedar Rapids',
  },
  {
      label: 'Chevrolet',
  },
  {
      label: 'Chrysler',
  },
  {
      label: 'Daewoo',
  },
  {
      label: 'Daihatsu',
  },
  {
      label: 'Datsun',
  },
  {
      label: 'Dodge',
  },
  {
      label: 'Ducati',
  },
  {
      label: 'Eagle',
  },
  {
      label: 'Excavating',
  },
  {
      label: 'Fiat',
  },
  {
      label: 'Ferrari',
  },
  {
      label: 'Fisker',
  },
  {
      label: 'Ford',
  },
  {
      label: 'GMC',
  },
  {
      label: 'Genesis',
  },
  {
      label: 'Genix',
  },
  {
      label: 'Geo HUMMER',
  },
  {
      label: 'Harley-Davidson',
  },
  {
      label: 'Hino',
  },
  {
      label: 'Honda',
  },
  {
      label: 'Hyundai',
  },
  {
      label: 'Infiniti',
  },
  {
      label: 'International',
  },
  {
      label: 'International Harvester',
  },
  {
      label: 'Isuzu',
  },
  {
      label: 'Jaguar',
  },
  {
      label: 'JC',
  },
  {
      label: 'Jeep',
  },
  {
      label: 'Kawasaki',
  },
  {
      label: 'Kenworth',
  },
  {
      label: 'Kia',
  },
  {
      label: 'King',
  },
  {
      label: 'Lamborghini',
  },
  {
      label: 'Land Rover',
  },
  {
      label: ' Lexus',
  },
  {
      label: 'Lincoln',
  },
  {
      label: 'Lotus',
  },
  {
      label: 'MACK',
  },
  {
      label: 'MG',
  },
  {
      label: 'MINI',
  },
  {
      label: 'MV',
  },
  {
      label: 'Maserati',
  },
  {
      label: 'Mack',
  },
  {
      label: 'Maybach',
  },
  {
      label: 'Mazda',
  },
  {
      label: 'McLaren',
  },
  {
      label: 'Mercedes-Benz',
  },
  {
      label: 'Mercury',
  },
  {
      label: 'Mitsubishi',
  },
  {
      label: 'Jeep',
  },
  {
      label: 'Mobility Ventures',
  },
  {
      label: 'Nissan',
  },
  {
      label: 'Oldsmobile',
  },
  {
      label: 'Opel',
  },
  {
      label: 'Panoz',
  },
  {
      label: 'Peterbilt',
  },
  {
      label: 'Plymouth',
  },
  {
      label: 'Polaris',
  },
  {
      label: 'Pontiac',
  },
  {
      label: 'Porsche',
  },
  {
      label: 'Ram',
  },
  {
      label: 'Reefer',
  },
  {
      label: 'Renault',
  },
  {
      label: 'Roll-off',
  },
  {
      label: 'Rolls-Royce',
  },
  {
      label: 'Saab',
  },
  {
      label: 'Saturn',
  },
  {
      label: 'Scion',
  },
  {
      label: 'Shelby',
  },
  {
      label: 'Smart',
  },
  {
      label: 'Spyker',
  },
  {
      label: 'Sterling',
  },
  {
      label: 'Subaru',
  },
  {
      label: 'Suzuki',
  },
  {
      label: 'Taylor',
  },
  {
      label: 'Terex',
  },
  {
      label: 'Tesla',
  },
  {
      label: 'Thermo King',
  },
  {
      label: 'Thru-Way',
  },
  {
      label: 'Toyota',
  },
  {
      label: 'Trailmobile',
  },
  {
      label: 'Triumph',
  },
  {
      label: 'Utility',
  },
  {
      label: 'Volkswagen',
  },
  {
      label: 'Volv',
  },
  {
      label: 'Western Star',
  },
  {
      label: 'Yamaha',
  },
  {
      label: 'Yugo',
  },
  {
      label: 'Other',
  },
];

export default LeadsForm;
