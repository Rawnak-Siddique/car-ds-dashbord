import React, { useEffect, useState } from 'react';
import { LeadsFormBody, LeadsFormInputCommentLabel, LeadsFormInputCommentSection, LeadsFormInputCommentValue, LeadsFormInputLabel, LeadsFormInputLeft, LeadsFormInputRight, LeadsFormInputSection, LeadsFormInputTextArea, LeadsFormInputValue, LeadsFormSection, LeadsFormSectionsDivider, LeadsFormSectionsPlace } from './styles';
import { useForm } from 'react-hook-form';
import { FormControl, InputLabel, Button, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import useInventory from '../../hooks/useInventory';
import { DateTime } from 'luxon';
import { Navigate, useNavigate } from 'react-router-dom';
import { addLeads } from '../../api/api';
import useCountries from '../../hooks/useCountries';

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
        width: "350px",
        minWidth: '160px',
        height: "85%",
        background: "white",
        borderRadius: "10px",
    },
}));

const LeadsForm = () => {
    let navigate = useNavigate();
    /* The above code is using the useForm hook to register the form, handle the submit, and get the
    form state. */
    const [inventory] = useInventory();
    const [countries] = useCountries();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        if (submitSuccess) {
            navigate('/leads');
        }
    }, [submitSuccess]);

    /**
     * It takes the data from the form and sends it to the url specified in the url field.
     * @param data - data,
     */
    const onSubmit = (data) => {
        console.log("Submit sent", data);

    }

    const sendLeadsForm = async (data) => {

        try {
            await addLeads(data, setSubmitSuccess);
        } catch (error) {
            console.log(error);
        }
    };
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
                <LeadsFormSectionsDivider>
                    Basic Lead Information
                </LeadsFormSectionsDivider>
                <form onSubmit={handleSubmit(sendLeadsForm)}>
                    <LeadsFormSectionsPlace>
                        <LeadsFormInputLeft>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    First Name
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    {/* Creating a text field with a label of "First Name" and a placeholder of "First
                name". It is also using the register function to register the field with the form. */}
                                    <TextField className={classes.textField} size="small" id="outlined-basic" label="First Name" variant="outlined" type="text" placeholder="First name" {...register("first_name", { required: false })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Last Name
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>

                                    <TextField className={classes.textField} id="outlined-basic" label="Last Name" size="small" variant="outlined" type="text" placeholder="Last name" {...register("last_name", { required: false })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Phone number
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    {/* Creating a text field for the user to enter their phone number. */}
                                    <TextField className={classes.textField} id="outlined-basic" label="Phone" size="small" variant="outlined" type="tel" placeholder="Phone number" {...register("phone", { required: false, min: 0 })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Email
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    <TextField className={classes.textField} id="outlined-basic" size="small" label="Email" variant="outlined" type="email" placeholder="email" {...register("email", { required: false })} />
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
                                    <FormControl variant="outlined" size="small" label="Source" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Source</InputLabel>
                                        <Select labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined" label="Source" {...register("lead_source", { required: false })}>
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
                                    <FormControl variant="outlined" size="small" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                                        <Select labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined" label="Status" {...register("lead_status", { required: false })}>
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
                                    <TextField className={classes.textField} size="small" id="outlined-basic" label="Assignee" variant="outlined" type="text" placeholder="Assignee" {...register("assignee", { required: false })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Inventory
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    {/* Creating a dropdown menu with the options of the BrandList array. */}
                                    <FormControl variant="outlined" size="small" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Select Vehicle</InputLabel>
                                        <Select labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined" autoWidth="true" label="Select Inventory" {...register("inventory", { required: false })}>
                                            {inventory ? inventory.map(item => <MenuItem value={item.ticket}>{`${item.year} ${item.brand} ${item.model} - ${item.vinNumber}`}</MenuItem>) : <MenuItem>Loading Inventory ...</MenuItem>}
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
                                    <TextField className={classes.textField} id="outlined-basic" label="Home Phone" size="small" variant="outlined" type="tel" placeholder="Home Phone" {...register("phone_home", { required: false, min: 0 })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Address 1
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    {/* Using the register function to register the input field with the form. */}
                                    <LeadsFormInputTextArea style={{
                                        width: "350px",
                                    }} placeholder="Address 1" {...register("address_1", { required: false })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    City
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    { /* The above code is creating a text field for the user to enter their city. */}
                                    <TextField className={classes.textField} id="outlined-basic" size="small" label="City" variant="outlined" type="text" placeholder="City" {...register("city", { required: false })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Postal Code
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    <TextField className={classes.textField} id="outlined-basic" size="small" label="Postal Code" variant="outlined" type="text" placeholder="Postal Code" {...register("postal_code", { required: false })} />
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
                                    <TextField className={classes.textField} id="outlined-basic" label="Work Phone" size="small" variant="outlined" type="tel" placeholder="Work Phone" {...register("phone_work", { required: false, min: 0 })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Address 2
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    {/* Using the register function to register the Address-2 field with the form. */}
                                    <LeadsFormInputTextArea style={{
                                        width: "350px",
                                    }} placeholder="Address 2" {...register("address_2", { required: false })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Province
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    {/* Creating a text field for the user to enter their province. */}
                                    <TextField className={classes.textField} id="outlined-basic" size="small" label="Province" variant="outlined" type="text" placeholder="Province" {...register("province", { required: false })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Country
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    {/* Creating a text field for the user to enter their country. */}
                                    <FormControl variant="outlined" size="small" className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-outlined-label">Select Country</InputLabel>
                                        <Select labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined" autoWidth="true" label="Select Country" {...register("country", { required: false })}>

                                            {countries ? countries.map(item => <MenuItem value={item.name}>{item.name}</MenuItem>) : <MenuItem>Loading Inventory ...</MenuItem>}
                                        </Select>
                                    </FormControl>
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                        </LeadsFormInputRight>
                    </LeadsFormSectionsPlace>
                    <LeadsFormSectionsPlace style={{
                        height: "160px",
                    }}>
                        <LeadsFormInputLeft>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Birth Date
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    {/* Creating a text field for the user to input their birth date. */}
                                    <TextField className={classes.textField} id="outlined-basic" size="small" label="Birth Date" variant="outlined" type="date" placeholder="Birth Date" InputLabelProps={{
                                        shrink: true,
                                    }} {...register("birth_date", { required: false })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Expiration Date
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    {/* A text field that is used to get the driving licence expiry date. */}
                                    <TextField className={classes.textField} id="outlined-basic" size="small" label="Driving licese Expiry Date" variant="outlined" type="date" placeholder={DateTime.now().toString()} InputLabelProps={{
                                        shrink: true,
                                    }} {...register("driver_lic_expiry", { required: false })} />
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                        </LeadsFormInputLeft>
                        <LeadsFormInputRight>
                            <LeadsFormInputSection>
                                <LeadsFormInputLabel>
                                    Driving License
                                </LeadsFormInputLabel>
                                <LeadsFormInputValue>
                                    {/* Creating a text field for the user to enter their driving license number. */}
                                    <TextField className={classes.textField} id="outlined-basic" size="small" label="Driving license" variant="outlined" type="text" placeholder="Driving license"  {...register("driver_lic", { required: false })} />
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
                                            id="demo-simple-select-outlined" label="Prefer not to say" {...register("gender", { required: false })}>
                                            <MenuItem value="Prefer not to say">Prefer not to say</MenuItem>
                                            <MenuItem value="Male">Male</MenuItem>
                                            <MenuItem value="Female">Female</MenuItem>
                                            <MenuItem value="other">other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </LeadsFormInputValue>
                            </LeadsFormInputSection>
                        </LeadsFormInputRight>

                    </LeadsFormSectionsPlace>
                    <LeadsFormInputCommentSection>
                    <LeadsFormSectionsDivider>
                        Lead Comments
                    </LeadsFormSectionsDivider>
                        <LeadsFormInputCommentValue>
                            {/* The above code is using the register function to register the Lead Comments field as
                a required field. */}
                            <LeadsFormInputTextArea placeholder="Enter Comment" {...register("lead_comment", { required: false })} />
                        </LeadsFormInputCommentValue>
                    </LeadsFormInputCommentSection>
                    <LeadsFormInputSection>
                        { /* Creating a button that will submit the form. */}
                        <Button type="submit" className={classes.button} >Add Lead</Button>
                    </LeadsFormInputSection>
                </form>
            </LeadsFormSection>
        </LeadsFormBody >
    );
}
/* Creating an array of objects. */
const SourceList = [
    { label: "Web lead", value: "Web-lead" },
    { label: "Web lead-Contacts", value: "Web-lead-contacts" },
    { label: "Web lead-Trade-In", value: "Web-lead-trade-in" },
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
    { label: "Trade In", value: "Trade-In" },
    { label: "Request Information", value: "request-info" },
    { label: "Contact", value: "Contact" },
    { label: "Test Driving", value: "drive-test" },
];
/* Creating an array of objects. */
const StatusList = [
    { label: "New", value: "new" },
    { label: "Appointment Booked", value: "Appointment Booked" },
    { label: "Contacted", value: "Contacted" },
    { label: "Contact in Future", value: "Contact in Future" },
    { label: "Follow up Soon", value: "Follow up Soon" },
    { label: "Interested", value: "Interested" },
    { label: "Junk Lead", value: "Junk Lead" },
    { label: "Lost Lead", value: "Lost Lead" },
    { label: "Not Contacted", value: "Not Contacted" },
    { label: "Not Qualified", value: "Not Qualified" },
    { label: "No Response", value: "No Response" },
    { label: "2nd Hand", value: "Used" },
];


export default LeadsForm;
