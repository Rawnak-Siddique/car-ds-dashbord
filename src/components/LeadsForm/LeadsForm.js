import React from 'react';
import { LeadsFormBody, LeadsFormInputCommentLabel, LeadsFormInputCommentSection, LeadsFormInputCommentValue, LeadsFormInputLabel, LeadsFormInputLeft, LeadsFormInputRight, LeadsFormInputSection, LeadsFormInputTextArea, LeadsFormInputValue, LeadsFormSection, LeadsFormSectionsDivider, LeadsFormSectionsPlace } from './styles';
import { useForm } from 'react-hook-form';
import { FormControl, InputLabel, Button, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  /* Styling the text field. */
  textField: {
    width: "350px",
    height: "85%",
    background: "#fafafa",
    color: "#2196F3",
    borderRadius: "10px",
  },
  /* Setting the color of the text in the input field to white. */
  input: {
    color: "white"
  },
  /* Defining the style of the button. */
  button: {
      background: '#2196F3',
      border: 0,
      borderRadius: 3,
      color: 'white',
      height: 48,
      padding: '0 30px',
  },
 /* Styling the formControl. */
  formControl: {
    margin: 0,
    minWidth: '160px',
    height: "85%",
    background: "white",
    borderRadius: "10px",
  },
}));

const LeadsForm = () => {
    /* The above code is using the useForm hook to register the form, handle the submit, and get the
    form state. */
    const { register, handleSubmit, formState: { errors } } = useForm();
    /**
     * It takes the data from the form and sends it to the url specified in the url field.
     * @param data - data,
     */
    const onSubmit = (data) => {
      console.log("Submit sent" ,data);
      
    }
   /* Logging the errors array to the console. */
    console.log(errors);

   /* The above code is creating a variable called classes and assigning it the value of the useStyles
   function. */
    const classes = useStyles();

  return (
    <LeadsFormBody>
        <h1>
            Add a new Leads
        </h1>
      
        <LeadsFormSection>
        <form onSubmit={handleSubmit(onSubmit)}>
        <LeadsFormSectionsPlace>
        <LeadsFormInputLeft>
            <LeadsFormInputSection>
            <LeadsFormInputLabel>
                First Name
            </LeadsFormInputLabel>
            <LeadsFormInputValue>
                {/* Creating a text field with a label of "First Name" and a placeholder of "First
                name". It is also using the register function to register the field with the form. */}
                <TextField className={classes.textField} size="small" id="outlined-basic" label="First Name" variant="outlined" type="text" placeholder="First name" {...register("First name", {required: true})} />
            </LeadsFormInputValue>
            </LeadsFormInputSection>
            <LeadsFormInputSection>
            <LeadsFormInputLabel>
                Last Name
            </LeadsFormInputLabel>
            <LeadsFormInputValue>
            
                <TextField className={classes.textField} id="outlined-basic" label="Last Name" size="small"variant="outlined" type="text" placeholder="Last name" {...register("Last name", {required: true})} />
            </LeadsFormInputValue>
            </LeadsFormInputSection>
            <LeadsFormInputSection>
            <LeadsFormInputLabel>
                Phone number
            </LeadsFormInputLabel>
            <LeadsFormInputValue>
                {/* Creating a text field for the user to enter their phone number. */}
                <TextField className={classes.textField} id="outlined-basic" label="Phone" size="small" variant="outlined" type="text" placeholder="Phone number" {...register("phone", {required: true, min: 0})} />
            </LeadsFormInputValue>
            </LeadsFormInputSection>
            <LeadsFormInputSection>
            <LeadsFormInputLabel>
                Email
            </LeadsFormInputLabel>
            <LeadsFormInputValue>
                <TextField className={classes.textField} id="outlined-basic" size="small" label="Email" variant="outlined" type="email" placeholder="email" {...register("email", { required: true})} />
            </LeadsFormInputValue>
            </LeadsFormInputSection>
            </LeadsFormInputLeft>
            <LeadsFormInputRight>
            <LeadsFormInputSection>
            <LeadsFormInputLabel>
                Source
            </LeadsFormInputLabel>
            <LeadsFormInputValue>
               { /* Creating a dropdown menu with the options of the SourceList array. */}
                <FormControl variant="outlined" size="small" label="Source"className={classes.formControl}>
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
                {/* Creating a dropdown menu with the options of the StatusList array. */}
                <FormControl variant="outlined"  size="small" className={classes.formControl}>
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
                {/* Creating a text field for the assignee. */}
                <TextField className={classes.textField} size="small" id="outlined-basic" label="Assignee" variant="outlined" type="text" placeholder="Assignee" {...register("assignee", {required: true})} />
            </LeadsFormInputValue>
            </LeadsFormInputSection>
            <LeadsFormInputSection>
            <LeadsFormInputLabel>
                Inventory
            </LeadsFormInputLabel>
            <LeadsFormInputValue>
            {/* Creating a dropdown menu with the options of the BrandList array. */}
            <FormControl variant="outlined"  size="small" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Select Inventory</InputLabel>
            <Select labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined" autoWidth="true" label="Select Inventory" {...register("Inventory", {required: true})}>
            {BrandList.map((brand, index) => (
                <MenuItem key={index} value={brand.label}>{brand.label}</MenuItem>
            ))}
            </Select>
            </FormControl>
            </LeadsFormInputValue>
            </LeadsFormInputSection> 
            </LeadsFormInputRight>
        </LeadsFormSectionsPlace>
        <LeadsFormSectionsDivider>
            More Details
        </LeadsFormSectionsDivider>
        <LeadsFormSectionsPlace>
            <LeadsFormInputLeft>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        Home Phone
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Home Phone" size="small" variant="outlined" type="text" placeholder="Home Phone" {...register("Home phone", {required: true, min: 0})} />
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        Address 1
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>
                        {/* Using the register function to register the input field with the form. */}
                        <LeadsFormInputTextArea placeholder="Address 1" {...register("Address-1", {required: true})} />
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        City
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>
                      { /* The above code is creating a text field for the user to enter their city. */}
                        <TextField className={classes.textField} id="outlined-basic" size="small" label="City" variant="outlined" type="text" placeholder="City" {...register("City", {required: true})} />
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        Postal Code
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>            
                    <TextField className={classes.textField} id="outlined-basic" size="small" label="Postal Code" variant="outlined" type="text" placeholder="Postals Code" {...register("Postal Code", {required: true})} />
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
            </LeadsFormInputLeft>
            <LeadsFormInputRight>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        Work Phone
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>
                        {/* Creating a text field for the user to enter their work phone number. */}
                        <TextField className={classes.textField} id="outlined-basic" label="Work Phone" size="small" variant="outlined" type="text" placeholder="Work Phone" {...register("Work phone", {required: true, min: 0})} />
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        Address 2
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>
                       {/* Using the register function to register the Address-2 field with the form. */}
                        <LeadsFormInputTextArea placeholder="Address 2" {...register("Address-2", {required: true})} />
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        Province
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>
                        {/* Creating a text field for the user to enter their province. */}
                        <TextField className={classes.textField} id="outlined-basic" size="small" label="Province" variant="outlined" type="text" placeholder="Province" {...register("Province", {required: true})} />
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        Country
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>
                    {/* Creating a text field for the user to enter their country. */}
                    <TextField className={classes.textField} id="outlined-basic" size="small" label="Country" variant="outlined" type="text" placeholder="Country" {...register("Country", {required: true})} />
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
            </LeadsFormInputRight>
        </LeadsFormSectionsPlace>
        <LeadsFormSectionsPlace>
            <LeadsFormInputLeft>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        Birth Date
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>
                       {/* Creating a text field for the user to input their birth date. */}
                        <TextField className={classes.textField} id="outlined-basic" size="small" label="Birth Date" variant="outlined" type="datetime-local" placeholder="Birth Date" InputLabelProps={{
                        shrink: true,
                        }} {...register("Birth Date", {required: true})} />
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        DRIVING LICENCE EXPIRY DATE
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>
                        {/* A text field that is used to get the driving licence expiry date. */}
                        <TextField className={classes.textField} id="outlined-basic" size="small" label="Driving licence Expiry Date" variant="outlined" type="datetime-local" placeholder="Birth Date" InputLabelProps={{
                        shrink: true,
                        }} {...register("Driving-Licence-Expiry-Date ", {required: true})} />
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
            </LeadsFormInputLeft>
            <LeadsFormInputRight>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        DRIVING LICENCE
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>
                    {/* Creating a text field for the user to enter their driving license number. */}
                    <TextField className={classes.textField} id="outlined-basic" size="small" label="Driving license" variant="outlined" type="text" placeholder="Driving license"  {...register("Driving-license", {required: true})} />
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
                <LeadsFormInputSection>
                    <LeadsFormInputLabel>
                        Gender
                    </LeadsFormInputLabel>
                    <LeadsFormInputValue>
                    {/* The above code is creating a dropdown menu with the options of "Prefer not to
                    say", "Male", "Female", and "other". */}
                    <FormControl variant="outlined" className={classes.formControl} size="small">
                        <InputLabel id="demo-simple-select-outlined-label">Prefer not to say</InputLabel>
                        <Select size="small" labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined" label="Prefer not to say" {...register("Gender", {required: true})}>
                        <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
                        <MenuItem value=" Male"> Male</MenuItem>
                        <MenuItem value=" Female"> Female</MenuItem>
                        <MenuItem value=" other"> other</MenuItem>
                        </Select>
                    </FormControl>
                    </LeadsFormInputValue>
                </LeadsFormInputSection>
            </LeadsFormInputRight>
            
        </LeadsFormSectionsPlace>
        <LeadsFormInputCommentSection>
            <LeadsFormInputCommentLabel>
            ------------------------------------------------------------------------------------------------------- Lead Comment ---------------------------------------------------------------------------------------------------------
            </LeadsFormInputCommentLabel>
            <LeadsFormInputCommentValue>
                {/* The above code is using the register function to register the Lead Comments field as
                a required field. */}
                <LeadsFormInputTextArea placeholder="Enter Comment" {...register("Lead Comments", {required: true})} />
            </LeadsFormInputCommentValue>
        </LeadsFormInputCommentSection> 
        <LeadsFormInputSection>
           { /* Creating a button that will submit the form. */}
            <Button type="submit" className={classes.button} >Add Lead</Button>
        </LeadsFormInputSection>   
    </form>
    </LeadsFormSection>
    </LeadsFormBody>
  );
}
/* Creating an array of objects. */
const SourceList = [
  { label:"Web lead", value:"Web-lead" },
  { label:"Web lead-Contacts", value:"Web-lead-contacts" },
  { label:"Web lead-Trade-In", value:"Web-lead-trade-in" },
  { label: "Web lead-Offer", value: "Web-lead-offer" },
  { label: "Web lead-Test Drive", value: "Web-lead-test-drive" },
  { label: "Web lead-Vehicle History", value: "Web-lead-vehicle-history" },
  { label: "Web lead-Credit Application", value: "Web-lead-credit-application" },
  { label: "Web lead-Car Finder", value: "Web-lead-car-finder" },
  { label: "Web lead-Service Appointment", value: "Web-lead-service-appointment" },
  { label: "Web lead-Request info", value: "Web-lead-" },
  { label: "Walk-in", value: "Walk-in" },
  { label: "Phone", value: "Phone" },
  { label: "Facebook", value: "Facebook" },
  { label:"Trade In", value:"trade-in" },
  { label:"Request Information", value:"request-info" },
  { label:"Contact", value:"contact" },
  { label:"Test Driving", value:"drive-test" },
];
/* Creating an array of objects. */
const StatusList = [
  { label:"New", value:"new" },
  { label:"Appointment Booked", value:"Appointment Booked" },
  { label:"Contacted", value:"Contacted" },
  { label:"Contact in Future", value:"Contact in Future" },
  { label:"Follow up Soon", value:"Follow up Soon" },
  { label:"Interested", value:"Interested" },
  { label:"Junk Lead", value:"Junk Lead" },
  { label:"Lost Lead", value:"Lost Lead" },
  { label:"Not Contacted", value:"Not Contacted" },
  { label:"Not Qualified", value:"Not Qualified" },
  { label:"No Response", value:"No Response" },
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
