import React from 'react'
import { useState } from 'react';
import { InventoryFormV2Body, InventoryFormV2Button, InventoryFormV2DragAndDropImage, InventoryFormV2DragAndDropImageHolder, InventoryFormV2DragAndDropSection, InventoryFormV2ImageHolder, InventoryFormV2ImageInput, InventoryFormV2ImageInputButton, InventoryFormV2ImageSections, InventoryFormV2InputSection, InventoryFormV2InputsLabel, InventoryFormV2InputsValue } from './styles';
import { useForm } from 'react-hook-form';
import { makeStyles, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useDropzone } from 'react-dropzone';
import { postInventoryFormData } from '../../api/api';

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
    const sendInventoryForm = async (data) => {
        console.log("Inventory Form Submitted", inventoryFiles, data);
        /*console.log("Inventory Form Submitted", data);*/
        try {
            await postInventoryFormData(inventoryFiles, data);
        } catch (error) {
            console.log(error);
        }
    };

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
        <form onSubmit={handleSubmit(sendInventoryForm)} >
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
                                {
                                    CylinderList.map((cylinder) => (
                                        <MenuItem value={cylinder.label} key={cylinder.label}>{cylinder.label}</MenuItem>
                                    ))
                                }
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
                            {
                                TransmissionList.map((transmission) => (
                                    <MenuItem value={transmission.label} key={transmission.label}>{transmission.label}</MenuItem>
                                ))
                            }
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
                            {
                                DriveList.map((drive) => (
                                    <MenuItem value={drive.label} key={drive.label}>{drive.label}</MenuItem>
                                ))
                            }
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
                            {
                                BodyTypeList.map((bodyType) => (
                                    <MenuItem value={bodyType.label} key={bodyType.label}>{bodyType.label}</MenuItem>
                                ))
                            }
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
                            {
                                DoorList.map((door) => (
                                    <MenuItem value={door.label} key={door.label}>{door.label}</MenuItem>
                                ))
                            }
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
                            {
                                FuelTypeList.map((fuelType) => (
                                    <MenuItem value={fuelType.label} key={fuelType.label}>{fuelType.label}</MenuItem>
                                ))
                            }
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
const DriveList = [
    {label: "4-wheel"},
    {label: " 4x4"},
    {label: " all-wheel"},
    {label: " front-wheel"},
    {label: " rear-wheel"},
    {label: " other"},
];
const TransmissionList = [
    {label: "automatic"},
    {label: "manual"},
    {label: "Triprotic"},
    {label: "other"},
];
const CylinderList = [
    {label: "2"},
    {label: "4"},
    {label: "6"},
    {label: "8"},
    {label: "10"},
    {label: "12"},
    {label: "14"},
    {label: "16"},
    {label: "Other"},
];
const BodyTypeList = [
    {label: "Boat"},
    {label: " Commercial EV"},
    {label: " Convertible"},
    {label: " Coupe"},
    {label: " Coupe-2-Door"},
    {label: " Cargo Van"},
    {label: " Dump"},
    {label: " Golf Carts EV"},
    {label: " Hatchback"},
    {label: " Minivan-Van"},
    {label: " Pickup-Truck"},
    {label: " Passenger Van"},
    {label: "  Sedan"},
    {label: " SUV"},
    {label: " SUV-Crossover"},
    {label: " Trailer"},
    {label: " Truck"},
    {label: " Wagon"},
    {label: " other"},
];
const DoorList = [
    {label: "2"},
    {label: "4"},
    {label: "5"},
    {label: "6"},
    {label: "8"},
    {label: "Other"},
];
const FuelTypeList = [
    {
        label: "Diesel",
    },
    {
        label: "Petrol",
    },
    {
        label: "Gasoline",
    },
    {
        label: "Flex Fuel",
    },
    {
        label: "Hybrid Gas",
    },
    {
        label: "Electric",
    },
    {
        label: "Propane",
    },
    {
        label: "Other",
    },
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
export default InventoryFormV2;