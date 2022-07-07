import React from 'react'
import { useState } from 'react';
import { InventoryFormV2Body, InventoryFormV2Button, InventoryFormV2DragAndDropImage, InventoryFormV2DragAndDropImageHolder, InventoryFormV2DragAndDropSection, InventoryFormV2ImageHolder, InventoryFormV2ImageInput, InventoryFormV2ImageInputButton, InventoryFormV2ImageSections, InventoryFormV2InputSection, InventoryFormV2InputsLabel, InventoryFormV2InputsValue } from './styles';
import { useForm } from 'react-hook-form';
import { makeStyles, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useDropzone } from 'react-dropzone';

const useStyles = makeStyles((theme) => ({
    textField: {
      width: "300px",
      height: "50px",
      fontWeight: 500,
      background: "#fafafa",
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
       minWidth: '120px',
       height: "50px",
       fontWeight: "500",
       background: "white",
    },
}));

const InventoryFormV2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors);
    const classes = useStyles();
    const [inventoryFiles, setInventoryFiles] = useState('');
    const [inventoryFilesURL, setInventoryFilesURL] = useState([]);
    const ImageUpload = () => {
        console.log("File", inventoryFiles);
        console.log("Url",inventoryFilesURL);
    };
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: true,
        onDrop: (acceptedFiles) => {
            setInventoryFiles(acceptedFiles);
            setInventoryFilesURL(
                acceptedFiles.map((upFile) => Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile),
                }))
            );
        }
    });

  return (
    <InventoryFormV2Body>
        Add new inventory
        <InventoryFormV2ImageSections>
            <InventoryFormV2ImageHolder>
                <InventoryFormV2DragAndDropSection {...getRootProps()} >
                    <input {...getInputProps()} type="file" multiple="true" />
                    {
                        isDragActive ? <p>Drop image here</p> : <p>Drag & drop Image here or click here </p>
                    }
                    <InventoryFormV2DragAndDropImage>
                        {
                            inventoryFilesURL.map((image) => (
                                <InventoryFormV2DragAndDropImageHolder key={image.name} src={image.preview} alt={image.name} />
                            ))
                        }
                    </InventoryFormV2DragAndDropImage>
                </InventoryFormV2DragAndDropSection>
            </InventoryFormV2ImageHolder>
            <InventoryFormV2ImageInput>
                <InventoryFormV2ImageInputButton type="button" onClick={() => ImageUpload()} >Save Image</InventoryFormV2ImageInputButton>
            </InventoryFormV2ImageInput>
        </InventoryFormV2ImageSections>
        <form >
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Brand
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <FormControl variant="outlined" className={classes.formControl} >
                        <InputLabel id="demo-simple-select-outlined-label">Brand</InputLabel>    
                        <Select autoWidth="true" labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Brand", { required: true })}>
                        {
                            BrandList.map((brand) => (
                                <MenuItem value={brand.label} key={brand.label}>{brand.label}</MenuItem>
                            ))
                        }
                        </Select>  
                    </FormControl> 
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Model Name
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Model" variant="outlined" type="text" placeholder="Model" {...register("Model", {required: true})} /> 
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                   Vin Number
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Vin Number" variant="outlined" type="text" placeholder="vinNumber" {...register("vinNumber", {required: true})} /> 
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Stock
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Stock" variant="outlined" type="number" placeholder="Stock" {...register("Stock", {required: true})} /> 
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Price ($)
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Price" variant="outlined" type="number" placeholder="Price" {...register("Price", { required: true, min: 0})} />
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Exterior Color
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Exterior Color" variant="outlined" type="text" placeholder="Exterior Color" {...register("Exterior Color", {required: true})} /> 
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Interior Color
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Interior Color" variant="outlined" type="text" placeholder="Interior Color" {...register("Interior Color", {required: true})} /> 
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    OdoMeter
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="OdoMeter" variant="outlined" type="number" placeholder="OdoMeter" {...register("OdoMeter", { required: true, min: 0})} />
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                   Featured
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <textarea {...register("Featured", {required: true})} /> 
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Cylinder
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
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
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Transmission
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Transmission</InputLabel>
                        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Transmission")}>
                            <MenuItem value="Automatic">Automatic</MenuItem>
                            <MenuItem value=" Manual"> Manual</MenuItem>
                            <MenuItem value=" Triprotic"> Triprotic</MenuItem>
                            <MenuItem value=" other"> other</MenuItem>
                        </Select>
                        </FormControl> 
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Drive
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
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
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Body Type
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
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
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Door
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
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
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Status
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Status")}>
                            <MenuItem value="in stock">in stock</MenuItem>
                            <MenuItem value=" out of stock"> out of stock</MenuItem>
                        </Select>
                        </FormControl>
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Condition
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Condition</InputLabel>
                        <Select labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined" {...register("Condition")}>
                            <MenuItem value="New">New</MenuItem>
                            <MenuItem value=" Used"> Used</MenuItem>
                        </Select>
                        </FormControl>
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Fuel Type
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
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
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Mileage
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Mileage" variant="outlined" type="text" placeholder="Mileage" {...register("Mileage", { required: true,min: 0})} />
                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2InputSection>
                <InventoryFormV2InputsLabel>
                    Detail Description
                </InventoryFormV2InputsLabel>
                <InventoryFormV2InputsValue>
                    <textarea {...register("Detail Description", {})} />

                </InventoryFormV2InputsValue>
            </InventoryFormV2InputSection>
            <InventoryFormV2Button>
                <Button type="submit" className={classes.button} >Add Inventory</Button>
            </InventoryFormV2Button>
        </form>
    </InventoryFormV2Body>
  )
}

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
export default InventoryFormV2;