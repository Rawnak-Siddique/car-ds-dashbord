import React, { useState } from 'react'
import { SalesFormBody, SalesFormInput, SalesFormInputLabel, SalesFormInputSection, SalesFormInputTextArea, SalesFormInputValue, SalesFormSection, SalesFormSectionArea, SalesFormSectionButton, SalesFormSectionHeader } from './styles';
import { useForm } from 'react-hook-form';
import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import { Switch } from '@mui/material';

const useStyles = makeStyles((theme) => ({
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
    input: {
      color: "white"
    },
    button: {
        background: '#2196F3',
        border: 0,
        borderRadius: 13,
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
    formControl: {
      width: "200px",
      height: "40px",
      marginLeft: "auto",
      marginRight: "auto",
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      borderRadius: "10px",
    }
  }));

const SalesForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      console.log("Submit sent" ,data);
    };
    console.log(errors);
    const classes = useStyles();
    const [switchRLWSChecked, setSwitchRLWSChecked] = useState(false);
    const [switchCPChecked, setSwitchCPChecked] = useState(false);
    const [switchDLOrRINChecked, setSwitchDLOrRINChecked] = useState(false);
    const handleChangeSwitch = (event) => {
      setSwitchRLWSChecked(event.target.checked);
      console.log(switchRLWSChecked);
    };
    const handleChangeSwitchCP = (event) => {
      setSwitchCPChecked(event.target.checked);
      console.log(switchCPChecked);
    };
    const handleChangeSwitchDLOrRIN = (event) => {
      setSwitchDLOrRINChecked(event.target.checked);
      console.log(switchDLOrRINChecked);
    };
    return (
        <SalesFormBody>
            <h1>Create a New Sales</h1> 
            <SalesFormSection>
              <form onSubmit={handleSubmit(onSubmit)}>
                <SalesFormSectionHeader>Details</SalesFormSectionHeader>
                <SalesFormSectionArea>
                  <SalesFormInputSection>
                    <SalesFormInput>
                      <SalesFormInputLabel>
                        Date
                      </SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Sales Date" variant="outlined" InputLabelProps={{
                          shrink: true,
                          }} type="datetime-local" placeholder="Sales-Date" {...register("Sales Date", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput>
                      <SalesFormInputLabel>
                        Deal Status
                      </SalesFormInputLabel>
                      <SalesFormInputValue>
                        <FormControl variant="outlined" size='small' className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Deal Status</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                              id="demo-simple-select-outlined" label="Deal Status" {...register("Deal Status")}>
                              {DealStatusList.map((DealStatus) => (
                                <MenuItem key={DealStatus.label} value={DealStatus.label}>{DealStatus.label}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                      </SalesFormInputValue>
                    </SalesFormInput>
                    {switchRLWSChecked === true ? "" : (
                      <>
                        <SalesFormInput>
                          <SalesFormInputLabel>
                            Deal type
                          </SalesFormInputLabel>
                          <SalesFormInputValue>
                            <FormControl variant="outlined" size="small" className={classes.formControl}>
                              <InputLabel id="demo-simple-select-outlined-label">Deal type</InputLabel> 
                              <Select labelId="demo-simple-select-outlined-label"
                                  id="demo-simple-select-outlined" label="Deal type"  {...register("Deal type")} >   
                                  {DealtypeList.map((Dealtype) => (
                                    <MenuItem key={Dealtype.label} value={Dealtype.label}>{Dealtype.label}</MenuItem>
                                  ))}
                              </Select>
                            </FormControl>
                          </SalesFormInputValue>
                        </SalesFormInput>
                      </>
                    )}
                  </SalesFormInputSection>
                  <SalesFormInputSection>
                    <SalesFormInput style={{
                      width: "450px",
                    }}>
                      <SalesFormInputLabel style={{
                      width: "70%",
                    }}>
                        RENTAL OR WHOLESALE
                      </SalesFormInputLabel>
                      <SalesFormInputValue>
                        <Switch onChange={handleChangeSwitch} inputProps={{ 'aria-label': 'controlled' }} />
                        {switchRLWSChecked === true ? 'WholeSale' : 'Rental'}
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput style={{
                      width: '600px',
                    }}>
                    <SalesFormInputLabel style={{
                      width: '65%',
                    }}>
                        Customer Is Individual Or Company
                      </SalesFormInputLabel>
                      <SalesFormInputValue>
                        <Switch onChange={handleChangeSwitchCP} inputProps={{ 'aria-label': 'controlled' }} />
                        {switchCPChecked === true ? 'Company' : 'Individual'}
                      </SalesFormInputValue>
                    </SalesFormInput>
                  </SalesFormInputSection>
                </SalesFormSectionArea>
                <SalesFormSectionHeader>Customers</SalesFormSectionHeader>
                {switchCPChecked === true ? (
                  <>
                      <SalesFormSectionArea>
                      <SalesFormInputSection>
                        <SalesFormInput>
                          <SalesFormInputLabel>Company Name</SalesFormInputLabel>
                          <SalesFormInputValue>
                            <TextField className={classes.textField} size="small" id="outlined-basic" label="Company Name" variant="outlined" type="text" placeholder="Company Name" {...register("Company-Name", {required: true})} />
                          </SalesFormInputValue>
                        </SalesFormInput>
                        <SalesFormInput>
                          <SalesFormInputLabel>MVDA#</SalesFormInputLabel>
                          <SalesFormInputValue>
                            <TextField className={classes.textField} size="small" id="outlined-basic" label="MVDA#" variant="outlined" type="text" placeholder="MVDA#" {...register("MVDA#", {required: true})} />
                          </SalesFormInputValue>
                        </SalesFormInput>
                        <SalesFormInput>
                          <SalesFormInputLabel>Year End</SalesFormInputLabel>
                          <SalesFormInputValue>
                            <TextField className={classes.textField} size="small" id="outlined-basic" label="Year End" variant="outlined" type="text" placeholder="Year End" {...register("Year-End", {required: true})} />
                          </SalesFormInputValue>
                        </SalesFormInput>
                      </SalesFormInputSection>
                      <SalesFormInputSection>
                      <SalesFormInput>
                          <SalesFormInputLabel>Rin</SalesFormInputLabel>
                          <SalesFormInputValue>
                            <TextField className={classes.textField} size="small" id="outlined-basic" label="Rin" variant="outlined" type="text" placeholder="Rin" {...register("Rin", {required: true})} />
                          </SalesFormInputValue>
                        </SalesFormInput>
                        <SalesFormInput>
                          <SalesFormInputLabel>Tax#</SalesFormInputLabel>
                          <SalesFormInputValue>
                            <TextField className={classes.textField} size="small" id="outlined-basic" label="Tax#" variant="outlined" type="text" placeholder="Tax#" {...register("Tax#", {required: true})} />
                          </SalesFormInputValue>
                        </SalesFormInput>
                        <SalesFormInput>
                          <SalesFormInputLabel>SalesReport Reg#</SalesFormInputLabel>
                          <SalesFormInputValue>
                            <TextField className={classes.textField} size="small" id="outlined-basic" label="SalesReport Reg#" variant="outlined" type="text" placeholder="SalesReport Reg#" {...register("SalesReport-Reg#", {required: true})} />
                          </SalesFormInputValue>
                        </SalesFormInput>
                      </SalesFormInputSection>
                      <SalesFormInputSection>
                      <SalesFormInput>
                          <SalesFormInputLabel>Contact First Name</SalesFormInputLabel>
                          <SalesFormInputValue>
                            <TextField className={classes.textField} size="small" id="outlined-basic" label="Contact First Name" variant="outlined" type="text" placeholder="Contact First Name" {...register("Contact-First-Name", {required: true})} />
                          </SalesFormInputValue>
                        </SalesFormInput>
                        <SalesFormInput>
                          <SalesFormInputLabel>Contact Last Name</SalesFormInputLabel>
                          <SalesFormInputValue>
                            <TextField className={classes.textField} size="small" id="outlined-basic" label="Contact Last Name" variant="outlined" type="text" placeholder="Contact Last Name" {...register("Contact-Last-Name", {required: true})} />
                          </SalesFormInputValue>
                        </SalesFormInput>
                      </SalesFormInputSection>
                    </SalesFormSectionArea>
                  </>
                ) : (
                  <>
                  <SalesFormSectionArea>
                  <SalesFormInputSection>
                    <SalesFormInput>
                      <SalesFormInputLabel>First Name</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="First Name" variant="outlined" type="text" placeholder="First Name" {...register("First-Name", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput>
                      <SalesFormInputLabel>Last Name</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Last Name" variant="outlined" type="text" placeholder="Last Name" {...register("Last-Name", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput>
                      <SalesFormInputLabel>Date of Birth</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Birth Date" variant="outlined" InputLabelProps={{
                          shrink: true,
                          }} type="datetime-local" placeholder="Birth Date" {...register("Birth Date", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                  </SalesFormInputSection>
                  <SalesFormInputSection>
                    <SalesFormInput>
                      <SalesFormInputLabel>
                        DL Or RIN
                      </SalesFormInputLabel>
                      <SalesFormInputValue>
                        <Switch onChange={handleChangeSwitchDLOrRIN} inputProps={{ 'aria-label': 'controlled' }} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                      {switchDLOrRINChecked === true ? (
                        <>
                        <SalesFormInput>
                          <SalesFormInputLabel>Driver's Licence</SalesFormInputLabel>
                          <SalesFormInputValue>
                            <TextField className={classes.textField} size="small" id="outlined-basic" label="Driver's Licence" variant="outlined" type="text" placeholder="Driver's Licence" {...register("Driver-Licence", {required: true})} />
                          </SalesFormInputValue>
                        </SalesFormInput>
                        <SalesFormInput>
                          <SalesFormInputLabel>DL expiry Date</SalesFormInputLabel>
                          <SalesFormInputValue>
                            <TextField className={classes.textField} size="small" id="outlined-basic" label="DL expiry Date" variant="outlined" InputLabelProps={{
                              shrink: true,
                              }} type="datetime-local" placeholder="DL expiry Date" {...register("DL-expiry-Date", {required: true})} />
                          </SalesFormInputValue>
                        </SalesFormInput>
                        </>
                       ) : (
                        <>
                        <SalesFormInput>
                          <SalesFormInputLabel> RIN</SalesFormInputLabel>
                          <SalesFormInputValue>
                            <TextField className={classes.textField} size="small" id="outlined-basic" label="RIN" variant="outlined" type="text" placeholder="RIN" {...register("RIN", {required: true})} />
                          </SalesFormInputValue>
                        </SalesFormInput>
                        </>
                       )}
                  </SalesFormInputSection>
                </SalesFormSectionArea>
                  </>
                )}
                <SalesFormSectionArea>
                  <SalesFormInputSection>
                    <SalesFormInput>
                      <SalesFormInputLabel>Street Address</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Street Address" variant="outlined" type="text" placeholder="Street Address" {...register("Street-Address", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput>
                      <SalesFormInputLabel>Email</SalesFormInputLabel>
                      <SalesFormInputValue>
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Email" variant="outlined" type="text" placeholder="Email" {...register("Email", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput>
                      <SalesFormInputLabel>APT no/ Suite</SalesFormInputLabel>
                      <SalesFormInputValue>
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="APT no/ Suite" variant="outlined" type="text" placeholder="APT no/ Suite" {...register("Suite", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                  </SalesFormInputSection>
                  <SalesFormInputSection>
                    <SalesFormInput>
                      <SalesFormInputLabel>City</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="City" variant="outlined" type="text" placeholder="City" {...register("City", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput>
                      <SalesFormInputLabel>Province</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Province" variant="outlined" type="text" placeholder="Province" {...register("Province", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput>
                      <SalesFormInputLabel>Country</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Country" variant="outlined" type="text" placeholder="Country" {...register("Country", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput>
                      <SalesFormInputLabel>Postal Code</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Postal Code" variant="outlined" type="text" placeholder="Postal Code" {...register("Postal-Code", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                  </SalesFormInputSection>
                  <SalesFormInputSection>
                  <SalesFormInput>
                      <SalesFormInputLabel>Phone</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Phone" variant="outlined" type="number" placeholder="Phone" {...register("Phone", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput>
                      <SalesFormInputLabel>Mobile</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Mobile" variant="outlined" type="number" placeholder="Mobile" {...register("Mobile", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput>
                      <SalesFormInputLabel>Fax</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <TextField className={classes.textField} size="small" id="outlined-basic" label="Fax" variant="outlined" type="text" placeholder="Fax" {...register("Fax", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                  </SalesFormInputSection>
                </SalesFormSectionArea>
                <SalesFormSectionArea>
                <SalesFormInputSection style={{
                  width: '100%',
                  height: '100%',
                }}>
                    <SalesFormInput style={{
                  width: '100%',
                  height: '90%',
                }}>
                      <SalesFormInputLabel style={{
                        width: '20%',
                        height: '90%',
                      }}>Additional Information</SalesFormInputLabel>
                      <SalesFormInputValue style={{
                        width: '80%',
                        height: '90%',
                      }}>
                        <SalesFormInputTextArea placeholder="Additional Information" {...register("Additional-Information", {required: true})} />
                      </SalesFormInputValue>
                    </SalesFormInput>
                </SalesFormInputSection>
                </SalesFormSectionArea>
                <SalesFormSectionArea>
                <SalesFormSectionHeader>Inventory</SalesFormSectionHeader>
                <SalesFormInput>
                  <SalesFormInputLabel>Inventory</SalesFormInputLabel>
                  <SalesFormInputValue>
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel id="demo-simple-select-outlined-label">Select Inventory</InputLabel>
                      <Select labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined" label="Select Inventory" {...register("Inventory")}>
                          <MenuItem value="Load">Load</MenuItem>
                          <MenuItem value=" Inventory"> Inventory</MenuItem>
                      </Select>
                    </FormControl>
                  </SalesFormInputValue>
                </SalesFormInput>
                </SalesFormSectionArea>
                <SalesFormSectionHeader>Delivery</SalesFormSectionHeader>
                <SalesFormSectionArea>
                  <SalesFormInput>
                    <SalesFormInputLabel>Delivery DATE</SalesFormInputLabel>
                    <SalesFormInputValue>
                      <TextField className={classes.textField} size="small" id="outlined-basic" label="Delivery Date & time" variant="outlined" InputLabelProps={{
                          shrink: true,
                          }} type="datetime-local" placeholder="Delivery-Date & time" {...register("Delivery Date & time", {required: true})} />
                    </SalesFormInputValue>
                  </SalesFormInput>
                  <SalesFormInputSection>
                    <SalesFormInput>
                      <SalesFormInputLabel>APPROVED BY</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <FormControl variant="outlined" size="small" className={classes.formControl}>
                          <InputLabel id="demo-simple-select-outlined-label">Approved by</InputLabel> 
                          <Select labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined" label="Approved by"  {...register("Approved-by")}>
                              <MenuItem value="Load">Load</MenuItem>
                              <MenuItem value=" Inventory"> Approved Persion </MenuItem>
                          </Select>
                        </FormControl>
                      </SalesFormInputValue>
                    </SalesFormInput>
                    <SalesFormInput>
                      <SalesFormInputLabel>SALESPERSON</SalesFormInputLabel>
                      <SalesFormInputValue>
                        <FormControl variant="outlined" size="small" className={classes.formControl}>
                          <InputLabel id="demo-simple-select-outlined-label">Sales Person</InputLabel> 
                          <Select labelId="demo-simple-select-outlined-label"
                          id="demo-simple-select-outlined" label="Sales Person"  {...register("Sales-Person")}>
                              <MenuItem value="Load">Load</MenuItem>
                              <MenuItem value=" Inventory">Sales Person</MenuItem>
                          </Select>
                        </FormControl>
                      </SalesFormInputValue>
                    </SalesFormInput>
                  </SalesFormInputSection>
                </SalesFormSectionArea>
                <SalesFormSectionButton>
                  <Button type="submit" className={classes.button} >Add Sales</Button>
                </SalesFormSectionButton>
              </form>
            </SalesFormSection>
        </SalesFormBody>
    )    
}
const DealStatusList = [
  { label: "Open" },
  { label: "Delivered" },
  { label: "Lost" },
  { label: "Cancelled" },
];
const DealtypeList = [
  { label: "Cash" },
  { label: "Financed" },
];

export default SalesForm
