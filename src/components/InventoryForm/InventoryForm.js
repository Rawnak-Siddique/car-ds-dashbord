import React, { useState } from 'react'
import { InventoryFormBody, InventoryFormBodySection, InventoryFormImage, InventoryFormImagePrimary, InventoryFormImagePrimaryDiv, InventoryFormImagePrimaryHolder, InventoryFormImagePrimaryInput, InventoryFormImagePrimaryView, InventoryFormSection } from './styles'
import { useForm } from 'react-hook-form';
import { makeStyles, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useDropzone } from 'react-dropzone';

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
        margin: "20px"
    }
  }));

const InventoryForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    const classes = useStyles();

    const [leadImage, setImage] = useState([]);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: true,
        onDrop: (acceptedFiles) => {
            setImage(
                acceptedFiles.map((upFile) => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile),
                }))
            );
        }
    });
    return (
        <InventoryFormBody>
            <h1>Inventory Form</h1>
            <InventoryFormBodySection>
                <InventoryFormImage>
                    <InventoryFormImagePrimary>
                        <h1>Lead Image or Thumbnail</h1>
                        <InventoryFormImagePrimaryDiv {...getRootProps()} >
                            <InventoryFormImagePrimaryInput {...getInputProps()} />
                            {
                                isDragActive ? <p>Drop image here</p> : <p>Drag & drop Image here or click here </p>
                            }
                            <InventoryFormImagePrimaryHolder>
                                {leadImage.map((image) => {
                                    return(
                                        <InventoryFormImagePrimaryView src={image.preview} alt='preview' />
                                    )
                                })}
                            </InventoryFormImagePrimaryHolder>
                        </InventoryFormImagePrimaryDiv>
                    </InventoryFormImagePrimary>
                </InventoryFormImage>
              <InventoryFormSection>
                <h1>Add Inventory details</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Brand</InputLabel>    
                        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Brand", { required: true })}>
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
                        <TextField className={classes.textField} id="outlined-basic" label="Model" variant="outlined" type="text" placeholder="Model" {...register("Model", {required: true})} />
                        <TextField className={classes.textField} id="outlined-basic" label="Vin Number" variant="outlined" type="text" placeholder="vinNumber" {...register("vinNumber", {})} />
                        <TextField className={classes.textField} id="outlined-basic" label="Stock" variant="outlined" type="number" placeholder="Stock" {...register("Stock", {required: true})} />
                        <TextField className={classes.textField} id="outlined-basic" label="Price" variant="outlined" type="number" placeholder="Price" {...register("Price", { min: 0})} />
                        <TextField className={classes.textField} id="outlined-basic" label="Exterior Color" variant="outlined" type="text" placeholder="Exterior Color" {...register("Exterior Color", {})} />
                        <TextField className={classes.textField} id="outlined-basic" label="Interior Color" variant="outlined" type="text" placeholder="Interior Color" {...register("Interior Color", {})} />
                        <TextField className={classes.textField} id="outlined-basic" label="OdoMeter" variant="outlined" type="number" placeholder="OdoMeter" {...register("OdoMeter", { min: 0})} />
                        <textarea {...register("Featured", {})} />
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Cylinder</InputLabel>
                        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Cylinder")}>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="6">6</MenuItem>
                            <MenuItem value="8">8</MenuItem>
                            <MenuItem value="10">10</MenuItem>
                            <MenuItem value="12">12</MenuItem>
                            <MenuItem value="16">16</MenuItem>
                            <MenuItem value="other">other</MenuItem>
                        </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Transmission</InputLabel>
                        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Transmission")}>
                            <MenuItem value="Automatic">Automatic</MenuItem>
                            <MenuItem value=" Manual"> Manual</MenuItem>
                            <MenuItem value=" Triprotic"> Triprotic</MenuItem>
                            <MenuItem value=" other"> other</MenuItem>
                        </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Drive</InputLabel>
                        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Drive")}>
                            <MenuItem value="4-wheel">4-wheel</MenuItem>
                            <MenuItem value=" 4x4"> 4x4</MenuItem>
                            <MenuItem value=" all-wheel"> all-wheel</MenuItem>
                            <MenuItem value=" front-wheel"> front-wheel</MenuItem>
                            <MenuItem value=" rear-wheel"> rear-wheel</MenuItem>
                            <MenuItem value=" other"> other</MenuItem>
                        </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Body Type</InputLabel>
                        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Body Type")}>
                            <MenuItem value="Boat">Boat</MenuItem>
                            <MenuItem value=" Commercial EV"> Commercial EV</MenuItem>
                            <MenuItem value=" Convertible"> Convertible</MenuItem>
                            <MenuItem value=" Coupe"> Coupe</MenuItem>
                            <MenuItem value=" Coupe-2-Door"> Coupe-2-Door</MenuItem>
                            <MenuItem value=" Cargo Van"> Cargo Van</MenuItem>
                            <MenuItem value=" Dump"> Dump</MenuItem>
                            <MenuItem value=" Golf Carts EV"> Golf Carts EV</MenuItem>
                            <MenuItem value=" Hatchback"> Hatchback</MenuItem>
                            <MenuItem value=" Minivan-Van"> Minivan-Van</MenuItem>
                            <MenuItem value=" Pickup-Truck"> Pickup-Truck</MenuItem>
                            <MenuItem value=" Passenger Van"> Passenger Van</MenuItem>
                            <MenuItem value="  Sedan">  Sedan</MenuItem>
                            <MenuItem value=" SUV"> SUV</MenuItem>
                            <MenuItem value=" SUV-Crossover"> SUV-Crossover</MenuItem>
                            <MenuItem value=" Trailer"> Trailer</MenuItem>
                            <MenuItem value=" Truck"> Truck</MenuItem>
                            <MenuItem value=" Wagon"> Wagon</MenuItem>
                            <MenuItem value=" other"> other</MenuItem>
                        </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Door</InputLabel>
                        <Select  labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Door")}>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                            <MenuItem value="6">6</MenuItem>
                            <MenuItem value="7">7</MenuItem>
                            <MenuItem value="8">8</MenuItem>
                            <MenuItem value="other">other</MenuItem>
                        </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Status")}>
                            <MenuItem value="in stock">in stock</MenuItem>
                            <MenuItem value=" out of stock"> out of stock</MenuItem>
                        </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Condition</InputLabel>
                        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Condition")}>
                            <MenuItem value="New">New</MenuItem>
                            <MenuItem value=" Used"> Used</MenuItem>
                        </Select>
                        </FormControl>
                        <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Fuel Type</InputLabel>
                        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Fuel Type")}>
                            <MenuItem value="Diesel">Diesel</MenuItem>
                            <MenuItem value=" Flex Fuel"> Flex Fuel</MenuItem>
                            <MenuItem value=" Gasoline Fuel"> Gasoline Fuel</MenuItem>
                            <MenuItem value=" Hybrid Gas"> Hybrid Gas</MenuItem>
                            <MenuItem value=" Electric"> Electric</MenuItem>
                            <MenuItem value=" Propane"> Propane</MenuItem>
                            <MenuItem value=" other"> other</MenuItem>
                        </Select>
                        </FormControl>
                        <TextField className={classes.textField} id="outlined-basic" label="Mileage" variant="outlined" type="text" placeholder="Mileage" {...register("Mileage", { min: 0})} />
                        <TextField className={classes.textField} variant="outlined" type="datetime-local" placeholder="Created Date" {...register("Created Date", {})} />
                        <TextField className={classes.textField} variant="outlined" type="datetime-local" placeholder="Modified Date" {...register("Modified Date", {})} />
                        <textarea {...register("Detail Description", {})} />

                        <Button className={classes.button} >Add Inventory</Button>
                        </form>
              </InventoryFormSection>  
            </InventoryFormBodySection>
        </InventoryFormBody>
    )
}

export default InventoryForm
