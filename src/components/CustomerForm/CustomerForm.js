import { Button, makeStyles, TextField } from '@material-ui/core';
import { Switch } from '@mui/material';
import React, { useState } from 'react';
import { CustomerFormBody, CustomerFormBodyHeader, CustomerFormBodyHeaderSection, CustomerFormBodyHeaderSectionLabel, CustomerFormBodyHeaderSectionValue, CustomerFormBodyInput, CustomerFormBodyInputLabel, CustomerFormBodyInputSection, CustomerFormBodyInputValue, CustomerFormBodySection, CustomerFormBodySectionArea, CustomerFormSectionTitle } from './styles';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { addCustomer } from '../../api/api';

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
  const { register, handleSubmit, formState: { errors } } = useForm();
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

  let navigate = useNavigate();

  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (submitSuccess) {
      navigate('/customer');
    }
  }, [submitSuccess]);

  // *** This section is for sending data to api.js *** //

  const sendCustomerForm = async (data) => {
    // console.log(data);
    try {
      await addCustomer(data, setSubmitSuccess);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(sendCustomerForm)}>
    <CustomerFormBody>
      
        <CustomerFormSectionTitle>Customer Details</CustomerFormSectionTitle>
        <CustomerFormBodyHeader>
          <h2 className='text-2xl text-sky-700'>Add a new {customerType === true ? "Company" : "Individual Customer"}</h2>
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
                <div className='bg-sky-500 w-full p-2 rounded-md'>
                  <h3 className='text-xl text-white'>Company</h3>
                </div>
                <CustomerFormBodyInputSection>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>Company Name</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Company Name" variant="outlined" type="text" defaultValue="" placeholder="Company Name" {...register("company_name", { required: false })} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>MVDA#</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="MVDA#" variant="outlined" type="text" defaultValue="" placeholder="MVDA#" {...register("mvda_no", { required: false })} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>Year End</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Year End" variant="outlined" type="text" defaultValue="" placeholder="Year End" {...register("year_end", { required: false })} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                </CustomerFormBodyInputSection>
                <CustomerFormBodyInputSection>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>Rin</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Rin" variant="outlined" type="text" defaultValue="" placeholder="Rin" {...register("rin", { required: false })} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>Tax#</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Tax#" variant="outlined" type="text" defaultValue="" placeholder="Tax#" {...register("tax_no", { required: false })} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>SalesReport Reg#</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="SalesReport Reg#" variant="outlined" type="text" defaultValue="" placeholder="SalesReport Reg#" {...register("sales_report_no", { required: false })} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                </CustomerFormBodyInputSection>
                <CustomerFormBodyInputSection>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>Contact First Name</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Contact First Name" variant="outlined" type="text" defaultValue="" placeholder="Contact First Name" {...register("contact_first_name", { required: false })} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>Contact Last Name</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Contact Last Name" variant="outlined" type="text" defaultValue="" placeholder="Contact Last Name" {...register("contact_last_name", { required: false })} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                </CustomerFormBodyInputSection>
              </CustomerFormBodySectionArea>
            </>
          ) : (
            <>
              <CustomerFormBodySectionArea>
                <div className='bg-sky-500 w-full p-2 rounded-md'>
                  <h3 className='text-xl text-white'>Individual Customer</h3>
                </div>
                <CustomerFormBodyInputSection>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>First Name</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                      {/* Creating a text field for the user to enter their first name. */}
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="First Name" variant="outlined" type="text" defaultValue="" placeholder="First Name" {...register("first_name", { required: false })} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>Last Name</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                      {/* Creating a text field for the user to enter their last name. */}
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Last Name" variant="outlined" type="text" defaultValue="" placeholder="Last Name" {...register("last_name", { required: false })} />
                    </CustomerFormBodyInputValue>
                  </CustomerFormBodyInput>
                  <CustomerFormBodyInput>
                    <CustomerFormBodyInputLabel>Date of Birth</CustomerFormBodyInputLabel>
                    <CustomerFormBodyInputValue>
                      {/* Creating a text field for the user to input their birth date. */}
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Birth Date" variant="outlined" InputLabelProps={{
                        shrink: true,
                      }} type="datetime-local" placeholder="Birth Date" {...register("birth_date", { required: false })} />
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
                          <TextField className={classes.textField} size="small" id="outlined-basic" label="Driver's Licence" variant="outlined" type="text" defaultValue="" placeholder="Driver's Licence" {...register("driver_lic", { required: false })} />
                        </CustomerFormBodyInputValue>
                      </CustomerFormBodyInput>
                      <CustomerFormBodyInput>
                        <CustomerFormBodyInputLabel>DL expiry Date</CustomerFormBodyInputLabel>
                        <CustomerFormBodyInputValue>
                          {/* A text field with a label, a variant, and a type. It is also required. */}
                          <TextField className={classes.textField} size="small" id="outlined-basic" label="DL expiry Date" variant="outlined" InputLabelProps={{
                            shrink: true,
                          }} type="datetime-local" placeholder="DL expiry Date" {...register("driver_lic_expiry", { required: false })} />
                        </CustomerFormBodyInputValue>
                      </CustomerFormBodyInput>
                    </>
                  ) : (
                    <>
                      <CustomerFormBodyInput>
                        <CustomerFormBodyInputLabel> RIN</CustomerFormBodyInputLabel>
                        <CustomerFormBodyInputValue>
                          {/* Creating a text field for the user to enter their RIN. */}
                          <TextField className={classes.textField} size="small" id="outlined-basic" label="RIN" variant="outlined" type="text" defaultValue="" placeholder="RIN" {...register("rin", { required: false })} />
                        </CustomerFormBodyInputValue>
                      </CustomerFormBodyInput>
                    </>
                  )}
                </CustomerFormBodyInputSection>
              </CustomerFormBodySectionArea>
            </>
          )}
          <CustomerFormSectionTitle>Additional Details</CustomerFormSectionTitle>

          <CustomerFormBodySectionArea>
            <CustomerFormBodyInputSection>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Street Address</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                  {/* The above code is creating a text field for the user to enter their street
                        address. */}
                  <TextField className={classes.textField} size="small" id="outlined-basic" label="Street Address" variant="outlined" type="text" defaultValue="" placeholder="Street Address" {...register("street_address", { required: false })} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Email</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                  {/*  */}
                  <TextField className={classes.textField} size="small" id="outlined-basic" label="Email" variant="outlined" type="text" defaultValue="" placeholder="Email" {...register("email", { required: false })} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>APT no/ Suite</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                  {/*  */}
                  <TextField className={classes.textField} size="small" id="outlined-basic" label="APT no/ Suite" variant="outlined" type="text" defaultValue="" placeholder="APT no/ Suite" {...register("apt_suite", { required: false })} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
            </CustomerFormBodyInputSection>
            <CustomerFormBodyInputSection>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>City</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                  {/* Creating a text field for the user to enter their city. */}
                  <TextField className={classes.textField} size="small" id="outlined-basic" label="City" variant="outlined" type="text" defaultValue="" placeholder="City" {...register("city", { required: false })} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Province</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                  {/* Creating a text field for the user to enter their province. */}
                  <TextField className={classes.textField} size="small" id="outlined-basic" label="Province" variant="outlined" type="text" defaultValue="" placeholder="Province" {...register("province", { required: false })} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Country</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                  {/* Creating a text field for the user to enter their country. */}
                  <TextField className={classes.textField} size="small" id="outlined-basic" label="Country" variant="outlined" type="text" defaultValue="" placeholder="Country" {...register("country", { required: false })} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Postal Code</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                  {/* Creating a text field for the postal code. */}
                  <TextField className={classes.textField} size="small" id="outlined-basic" label="Postal Code" variant="outlined" type="text" defaultValue="" placeholder="Postal Code" {...register("postal_code", { required: false })} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
            </CustomerFormBodyInputSection>
            <CustomerFormBodyInputSection>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Phone</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                  {/* Creating a text field for the user to enter their phone number. */}
                  <TextField className={classes.textField} size="small" id="outlined-basic" label="Phone" variant="outlined" type="number" placeholder="Phone" {...register("phone", { required: false })} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Mobile</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                  {/* Creating a text field with the label "Mobile" and the type "number" */}
                  <TextField className={classes.textField} size="small" id="outlined-basic" label="Mobile" variant="outlined" type="number" placeholder="Mobile" {...register("mobile", { required: false })} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
              <CustomerFormBodyInput>
                <CustomerFormBodyInputLabel>Fax</CustomerFormBodyInputLabel>
                <CustomerFormBodyInputValue>
                  {/* Creating a text field for the user to enter their fax number. */}
                  <TextField className={classes.textField} size="small" id="outlined-basic" label="Fax" variant="outlined" type="text" defaultValue="" placeholder="Fax" {...register("fax", { required: false })} />
                </CustomerFormBodyInputValue>
              </CustomerFormBodyInput>
            </CustomerFormBodyInputSection>
            <div className='flex justify-center my-4'>
              <button type="submit" className='text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' >Add Sales</button>
            </div>
          </CustomerFormBodySectionArea>
        </CustomerFormBodySection>
    </CustomerFormBody>
    </form>

  );
}

export default CustomerForm;
