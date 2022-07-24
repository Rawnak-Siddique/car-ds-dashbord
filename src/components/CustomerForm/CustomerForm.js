import { makeStyles, TextField } from '@material-ui/core';
import { Switch } from '@mui/material';
import React, { useState } from 'react';
import { CustomerFormBody, CustomerFormBodyHeader, CustomerFormBodyHeaderSection, CustomerFormBodyHeaderSectionLabel, CustomerFormBodyHeaderSectionValue, CustomerFormBodyInput, CustomerFormBodyInputLabel, CustomerFormBodyInputSection, CustomerFormBodyInputValue, CustomerFormBodySection, CustomerFormBodySectionArea } from './styles';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles(() => ({
  /* Styling the text field. */
  textField: {
    width: "200px",
    height: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    color: "#2196F3",
    borderRadius: "20px",
  },
  /* Setting the color of the text in the input field to white. */
  input: {
    color: "white"
  },
  /* Defining the style of the button. */
  button: {
      background: '#2196F3',
      border: 0,
      borderRadius: 13,
      color: 'white',
      height: 48,
      padding: '0 30px',
      marginBottom: '100px',
  },
  /* Styling the form control. */
  formControl: {
    width: "200px",
    height: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    borderRadius: "10px",
  },
}));
const CustomerForm = () => {
  const classes = useStyles();
  const { register, formState: { errors } } = useForm();
  console.log(errors);
  const [customerType, setCustomerType] = useState(false);
  const [switchDLOrRINChecked, setSwitchDLOrRINChecked] = useState(false);
  const handleCustomerChange = (event) => {
    setCustomerType(event.target.checked);
    console.log(customerType);
  };
  const handleChangeSwitchDLOrRIN = (event) => {
    setSwitchDLOrRINChecked(event.target.checked);
    console.log(switchDLOrRINChecked);
  };
  return (
    <CustomerFormBody>
      <CustomerFormBodyHeader>
        Add a new {customerType === true ? "Company" : "Individual Customer" }
        <CustomerFormBodyHeaderSection>
          <CustomerFormBodyHeaderSectionValue >
            <Switch onChange={handleCustomerChange} inputProps={{ 'aria-label': 'controlled' }} />
          </CustomerFormBodyHeaderSectionValue>
          <CustomerFormBodyHeaderSectionLabel >IC Or CP</CustomerFormBodyHeaderSectionLabel>
        </CustomerFormBodyHeaderSection>
      </CustomerFormBodyHeader>
      <CustomerFormBodySection>
      {customerType === true ? (
        <>
          <CustomerFormBodySectionArea>
            Company
            <CustomerFormBodyInputSection>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Company Name</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                <TextField className={classes.textField} size="small" id="outlined-basic" label="Company Name" variant="outlined" type="text" placeholder="Company Name" {...register("Company-Name", {required: true})} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>MVDA#</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                <TextField className={classes.textField} size="small" id="outlined-basic" label="MVDA#" variant="outlined" type="text" placeholder="MVDA#" {...register("MVDA#", {required: true})} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Year End</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                <TextField className={classes.textField} size="small" id="outlined-basic" label="Year End" variant="outlined" type="text" placeholder="Year End" {...register("Year-End", {required: true})} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
            </CustomerFormBodyInputSection>
            <CustomerFormBodyInputSection>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Rin</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                <TextField className={classes.textField} size="small" id="outlined-basic" label="Rin" variant="outlined" type="text" placeholder="Rin" {...register("Rin", {required: true})} />
              </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Tax#</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                <TextField className={classes.textField} size="small" id="outlined-basic" label="Tax#" variant="outlined" type="text" placeholder="Tax#" {...register("Tax#", {required: true})} />
              </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>SalesReport Reg#</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                <TextField className={classes.textField} size="small" id="outlined-basic" label="SalesReport Reg#" variant="outlined" type="text" placeholder="SalesReport Reg#" {...register("SalesReport-Reg#", {required: true})} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
            </CustomerFormBodyInputSection>
            <CustomerFormBodyInputSection>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Contact First Name</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                <TextField className={classes.textField} size="small" id="outlined-basic" label="Contact First Name" variant="outlined" type="text" placeholder="Contact First Name" {...register("Contact-First-Name", {required: true})} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Contact Last Name</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                <TextField className={classes.textField} size="small" id="outlined-basic" label="Contact Last Name" variant="outlined" type="text" placeholder="Contact Last Name" {...register("Contact-Last-Name", {required: true})} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
            </CustomerFormBodyInputSection>
          </CustomerFormBodySectionArea>
        </>
      ) : (
        <>
          <CustomerFormBodySectionArea>
            Individual Customer
            <CustomerFormBodyInputSection>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>First Name</CustomerFormBodyInputLabel>
                  <CustomerFormBodyInputValue>
                          {/* Creating a text field for the user to enter their first name. */}
                    <TextField className={classes.textField} size="small" id="outlined-basic" label="First Name" variant="outlined" type="text" placeholder="First Name" {...register("First-Name", {required: true})} />
                  </CustomerFormBodyInputValue>
                </CustomerFormBodyInput>
                <CustomerFormBodyInput>
                  <CustomerFormBodyInputLabel>Last Name</CustomerFormBodyInputLabel>
                  <CustomerFormBodyInputValue>
                          {/* Creating a text field for the user to enter their last name. */}
                    <TextField className={classes.textField} size="small" id="outlined-basic" label="Last Name" variant="outlined" type="text" placeholder="Last Name" {...register("Last-Name", {required: true})} />
                  </CustomerFormBodyInputValue>
                </CustomerFormBodyInput>
                <CustomerFormBodyInput>
                  <CustomerFormBodyInputLabel>Date of Birth</CustomerFormBodyInputLabel>
                  <CustomerFormBodyInputValue>
                          {/* Creating a text field for the user to input their birth date. */}
                    <TextField className={classes.textField} size="small" id="outlined-basic" label="Birth Date" variant="outlined" InputLabelProps={{
                            shrink: true,
                            }} type="datetime-local" placeholder="Birth Date" {...register("Birth Date", {required: true})} />
                  </CustomerFormBodyInputValue>
                </CustomerFormBodyInput>
            </CustomerFormBodyInputSection>
            <CustomerFormBodyInputSection>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>
                  DL Or RIN
                </CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                  <Switch onChange={handleChangeSwitchDLOrRIN} inputProps={{ 'aria-label': 'controlled' }} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              {switchDLOrRINChecked === true ? (
                <>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>Driver's Licence</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                            {/* The above code is creating a text field for the user to enter their
                            driver's licence number. */}
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Driver's Licence" variant="outlined" type="text" placeholder="Driver's Licence" {...register("Driver-Licence", {required: true})} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>DL expiry Date</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                            {/* A text field with a label, a variant, and a type. It is also required. */}
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="DL expiry Date" variant="outlined" InputLabelProps={{
                              shrink: true,
                              }} type="datetime-local" placeholder="DL expiry Date" {...register("DL-expiry-Date", {required: true})} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                </>
                       ) : (
                        <>
                          <CustomerFormBodyInput>
                            <CustomerFormBodyInputLabel> RIN</CustomerFormBodyInputLabel>
                            <CustomerFormBodyInputValue>
                              {/* Creating a text field for the user to enter their RIN. */}
                              <TextField className={classes.textField} size="small" id="outlined-basic" label="RIN" variant="outlined" type="text" placeholder="RIN" {...register("RIN", {required: true})} />
                            </CustomerFormBodyInputValue>
                          </CustomerFormBodyInput>
                        </>
                       )}
          </CustomerFormBodyInputSection>
          </CustomerFormBodySectionArea>
        </>
      ) }
        <CustomerFormBodySectionArea>
                  <CustomerFormBodyInputSection>
                    <CustomerFormBodyInput>
                      <CustomerFormBodyInputLabel>Street Address</CustomerFormBodyInputLabel>
                      <CustomerFormBodyInputValue>
                        {/* The above code is creating a text field for the user to enter their street
                        address. */}
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Street Address" variant="outlined" type="text" placeholder="Street Address" {...register("Street-Address", {required: true})} />
                      </CustomerFormBodyInputValue>
                    </CustomerFormBodyInput>
                    <CustomerFormBodyInput>
                      <CustomerFormBodyInputLabel>Email</CustomerFormBodyInputLabel>
                      <CustomerFormBodyInputValue>
                     {/*  */}
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Email" variant="outlined" type="text" placeholder="Email" {...register("Email", {required: true})} />
                      </CustomerFormBodyInputValue>
                    </CustomerFormBodyInput>
                    <CustomerFormBodyInput>
                      <CustomerFormBodyInputLabel>APT no/ Suite</CustomerFormBodyInputLabel>
                      <CustomerFormBodyInputValue>
                      {/*  */}
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="APT no/ Suite" variant="outlined" type="text" placeholder="APT no/ Suite" {...register("Suite", {required: true})} />
                      </CustomerFormBodyInputValue>
                    </CustomerFormBodyInput>
                  </CustomerFormBodyInputSection>
                  <CustomerFormBodyInputSection>
                    <CustomerFormBodyInput>
                      <CustomerFormBodyInputLabel>City</CustomerFormBodyInputLabel>
                      <CustomerFormBodyInputValue>
                        {/* Creating a text field for the user to enter their city. */}
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="City" variant="outlined" type="text" placeholder="City" {...register("City", {required: true})} />
                      </CustomerFormBodyInputValue>
                    </CustomerFormBodyInput>
                    <CustomerFormBodyInput>
                      <CustomerFormBodyInputLabel>Province</CustomerFormBodyInputLabel>
                      <CustomerFormBodyInputValue>
                        {/* Creating a text field for the user to enter their province. */}
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Province" variant="outlined" type="text" placeholder="Province" {...register("Province", {required: true})} />
                      </CustomerFormBodyInputValue>
                    </CustomerFormBodyInput>
                    <CustomerFormBodyInput>
                      <CustomerFormBodyInputLabel>Country</CustomerFormBodyInputLabel>
                      <CustomerFormBodyInputValue>
                        {/* Creating a text field for the user to enter their country. */}
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Country" variant="outlined" type="text" placeholder="Country" {...register("Country", {required: true})} />
                      </CustomerFormBodyInputValue>
                    </CustomerFormBodyInput>
                    <CustomerFormBodyInput>
                      <CustomerFormBodyInputLabel>Postal Code</CustomerFormBodyInputLabel>
                      <CustomerFormBodyInputValue>
                        {/* Creating a text field for the postal code. */}
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Postal Code" variant="outlined" type="text" placeholder="Postal Code" {...register("Postal-Code", {required: true})} />
                      </CustomerFormBodyInputValue>
                    </CustomerFormBodyInput>
                  </CustomerFormBodyInputSection>
                  <CustomerFormBodyInputSection>
                  <CustomerFormBodyInput>
                      <CustomerFormBodyInputLabel>Phone</CustomerFormBodyInputLabel>
                      <CustomerFormBodyInputValue>
                        {/* Creating a text field for the user to enter their phone number. */}
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Phone" variant="outlined" type="number" placeholder="Phone" {...register("Phone", {required: true})} />
                      </CustomerFormBodyInputValue>
                    </CustomerFormBodyInput>
                    <CustomerFormBodyInput>
                      <CustomerFormBodyInputLabel>Mobile</CustomerFormBodyInputLabel>
                      <CustomerFormBodyInputValue>
                       {/* Creating a text field with the label "Mobile" and the type "number" */}
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Mobile" variant="outlined" type="number" placeholder="Mobile" {...register("Mobile", {required: true})} />
                      </CustomerFormBodyInputValue>
                    </CustomerFormBodyInput>
                    <CustomerFormBodyInput>
                      <CustomerFormBodyInputLabel>Fax</CustomerFormBodyInputLabel>
                      <CustomerFormBodyInputValue>
                        {/* Creating a text field for the user to enter their fax number. */}
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Fax" variant="outlined" type="text" placeholder="Fax" {...register("Fax", {required: true})} />
                      </CustomerFormBodyInputValue>
                    </CustomerFormBodyInput>
                  </CustomerFormBodyInputSection>
                </CustomerFormBodySectionArea>
      </CustomerFormBodySection>
    </CustomerFormBody>
  );
}

export default CustomerForm;
