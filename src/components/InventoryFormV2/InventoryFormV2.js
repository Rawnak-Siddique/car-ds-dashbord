import React from 'react'
import { useState } from 'react';
import { InventoryFormV2Body, InventoryFormV2Button, InventoryFormV2InputSection, InventoryFormV2InputsLabel, InventoryFormV2InputsValue, InventoryFormV2TextArea, InventoryFormV2TextAreaSection } from './styles';
import { useForm } from 'react-hook-form';
import { makeStyles, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
// import Dropzone, { useDropzone } from 'react-dropzone';
import { Dropzone, FullScreenPreview, FileItem } from "@dropzone-ui/react";
import { postInventoryFormData } from '../../api/api';
import { SERVER_URL } from "../../variables/variables";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import YearMonthPicker from '../../fragments/YearMonthPicker';


const useStyles = makeStyles((theme) => ({
    textField: {
        width: "300px",
        height: "100%",
        fontWeight: 500,
        background: "#fafafa",
        borderRadius: "10px",
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
        minWidth: '120px',
        height: "100%",
        fontWeight: "500",
        background: "white",
        borderRadius: "10px",
    },
}));

const InventoryFormV2 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // console.log(errors);
    const classes = useStyles();
    let navigate = useNavigate();
    // Move to Dropzone UI

    const [files, setFiles] = useState([]);
    const [sessionTicket, setSessionTicket] = useState([]);
    const [imageSrc, setImageSrc] = useState(undefined);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        if (submitSuccess) {
            navigate('/inventory');
        }
    }, [submitSuccess]);

    const updateFiles = (incommingFiles) => {
        // console.log("incomming files", incommingFiles);
        setFiles(incommingFiles);
    };
    const onDelete = (id) => {
        setFiles(files.filter((x) => x.id !== id));
    };
    const handleSee = (imageSource) => {
        setImageSrc(imageSource);
    };
    const handleClean = (files) => {
        // console.log("list cleaned", files);
    };
    const handleUploadDone = (response) => {
        setSessionTicket(response[0]?.serverResponse.payload?.ticket);
    };

    // *** This section is for sending data to api.js *** //

    const sendInventoryForm = async (data) => {

        // Upload file function
        if (!sessionTicket) {
            alert('No Image Uploaded');
            return;
        }
        // console.log("Inventory Form Submitted", data, sessionTicket);
        try {
            await postInventoryFormData(data, sessionTicket, setSubmitSuccess);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <InventoryFormV2Body>
            Add new inventory
            {/* A dropzone component that allows the user to upload files.  */}
            <Dropzone
                style={{ minWidth: "550px" }}
                //view={"list"}
                onChange={updateFiles}
                minHeight="195px"
                onClean={handleClean}
                value={files}
                maxFiles={30}
                onUploadFinish={handleUploadDone}
                //header={false}
                // footer={false}
                maxFileSize={4194304}
                //label="Drag'n drop files here or click to browse"
                //label="Suleta tus archivos aquí"
                accept=".png,image/*"
                // uploadingMessage={"Uploading..."}
                url={SERVER_URL + "/incoming/postFile"}
                //of course this url doens´t work, is only to make upload button visible
                //uploadOnDrop
                //clickable={false}
                // fakeUploading
                //localization={"FR-fr"}
                disableScroll
            >
                {files.map((file) => (
                    <FileItem
                        {...file}
                        key={file.id}
                        onDelete={onDelete}
                        onSee={handleSee}
                        //localization={"ES-es"}
                        resultOnTooltip
                        preview
                        info
                        hd
                    />
                ))}
                <FullScreenPreview
                    imgSource={imageSrc}
                    openImage={imageSrc}
                    onClose={(e) => handleSee(undefined)}
                />
            </Dropzone>

            {/* The below code is a form that is used to add a new vehicle to the inventory. */}

            <form onSubmit={handleSubmit(sendInventoryForm)} >
                <InventoryFormV2InputSection>
                    <InventoryFormV2InputsLabel>
                        Brand
                    </InventoryFormV2InputsLabel>
                    <InventoryFormV2InputsValue>
                        <FormControl variant="outlined" className={classes.formControl} >
                            <InputLabel id="demo-simple-select-outlined-label">Brand</InputLabel>
                            <Select autoWidth="true" labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined" {...register("brand", { required: true })} >
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
                        <TextField className={classes.textField} id="outlined-basic" label="Model" variant="outlined" type="text" placeholder="Model" {...register("model", { required: true })} />
                    </InventoryFormV2InputsValue>
                </InventoryFormV2InputSection>
                <InventoryFormV2InputSection>
                    <InventoryFormV2InputsLabel>
                        Year
                    </InventoryFormV2InputsLabel>
                    <InventoryFormV2InputsValue>
                        {/* <YearMonthPicker></YearMonthPicker> */}
                        <TextField className={classes.textField} id="outlined-basic" label="Year" variant="outlined" type="text" placeholder="Year" {...register("year", { required: true })} InputLabelProps={{
                            shrink: true,
                        }} />
                    </InventoryFormV2InputsValue>
                </InventoryFormV2InputSection>
                <InventoryFormV2InputSection>
                    <InventoryFormV2InputsLabel>
                        Vin Number
                    </InventoryFormV2InputsLabel>
                    <InventoryFormV2InputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Vin Number" variant="outlined" type="text" placeholder="vinNumber" {...register("vinNumber", { required: true })} />
                    </InventoryFormV2InputsValue>
                </InventoryFormV2InputSection>
                <InventoryFormV2InputSection>
                    <InventoryFormV2InputsLabel>
                        Stock
                    </InventoryFormV2InputsLabel>
                    <InventoryFormV2InputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Stock" variant="outlined" type="number" placeholder="Stock" {...register("stock", { required: true })} />
                    </InventoryFormV2InputsValue>
                </InventoryFormV2InputSection>
                <InventoryFormV2InputSection>
                    <InventoryFormV2InputsLabel>
                        Price ($)
                    </InventoryFormV2InputsLabel>
                    <InventoryFormV2InputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Price" variant="outlined" type="number" placeholder="Price" {...register("price", { required: true, min: 0 })} />
                    </InventoryFormV2InputsValue>
                </InventoryFormV2InputSection>
                <InventoryFormV2InputSection>
                    <InventoryFormV2InputsLabel>
                        Exterior Color
                    </InventoryFormV2InputsLabel>
                    <InventoryFormV2InputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Exterior Color" variant="outlined" type="text" placeholder="Exterior Color" {...register("ext_color", { required: true })} />
                    </InventoryFormV2InputsValue>
                </InventoryFormV2InputSection>
                <InventoryFormV2InputSection>
                    <InventoryFormV2InputsLabel>
                        Interior Color
                    </InventoryFormV2InputsLabel>
                    <InventoryFormV2InputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Interior Color" variant="outlined" type="text" placeholder="Interior Color" {...register("int_color", { required: true })} />
                    </InventoryFormV2InputsValue>
                </InventoryFormV2InputSection>
                <InventoryFormV2InputSection>
                    <InventoryFormV2InputsLabel>
                        OdoMeter
                    </InventoryFormV2InputsLabel>
                    <InventoryFormV2InputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="OdoMeter" variant="outlined" type="number" placeholder="OdoMeter" {...register("odometer", { required: true, min: 0 })} />
                    </InventoryFormV2InputsValue>
                </InventoryFormV2InputSection>
                <InventoryFormV2TextAreaSection>
                    <InventoryFormV2InputsLabel>
                        Featured
                    </InventoryFormV2InputsLabel>
                    <InventoryFormV2InputsValue>
                        <InventoryFormV2TextArea autoWidth="true" placeholder="Featured" {...register("featured_text", { required: true })} />
                    </InventoryFormV2InputsValue>
                </InventoryFormV2TextAreaSection>
                <InventoryFormV2InputSection>
                    <InventoryFormV2InputsLabel>
                        Cylinder
                    </InventoryFormV2InputsLabel>
                    <InventoryFormV2InputsValue>
                        <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Cylinder</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined" {...register("cylinder")}>
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
                                id="demo-simple-select-outlined" {...register("transmission")}>
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
                                id="demo-simple-select-outlined" {...register("drive")}>
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
                                id="demo-simple-select-outlined" {...register("body_type")}>
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
                            <Select labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined" {...register("door")}>
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
                                id="demo-simple-select-outlined" {...register("status")}>
                                <MenuItem value='1'>In Stock</MenuItem>
                                <MenuItem value="0">Out of Stock</MenuItem>
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
                                id="demo-simple-select-outlined" {...register("condition")}>
                                <MenuItem value="New">New</MenuItem>
                                <MenuItem value="Used"> Used</MenuItem>
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
                                id="demo-simple-select-outlined" {...register("fuel_type")}>
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
                        <TextField className={classes.textField} id="outlined-basic" label="Mileage" variant="outlined" type="text" placeholder="Mileage" {...register("mileage", { required: true, min: 0 })} />
                    </InventoryFormV2InputsValue>
                </InventoryFormV2InputSection>
                <InventoryFormV2TextAreaSection>
                    <InventoryFormV2InputsLabel>
                        Detail Description
                    </InventoryFormV2InputsLabel>
                    <InventoryFormV2InputsValue>
                        <InventoryFormV2TextArea variant="outlined" type="text" placeholder="Detail Description"{...register("description", {})} />

                    </InventoryFormV2InputsValue>
                </InventoryFormV2TextAreaSection>
                <InventoryFormV2Button>
                    <Button type="submit" className={classes.button} >Add Vehicle</Button>
                </InventoryFormV2Button>
            </form>
        </InventoryFormV2Body>
    )
}
const DriveList = [
    { label: "4-Wheel" },
    { label: "4x4" },
    { label: "All-Wheel" },
    { label: "Front-Wheel" },
    { label: "Rear-Wheel" },
    { label: "Other" },
];
const TransmissionList = [
    { label: "Automatic" },
    { label: "Manual" },
    { label: "Triprotic" },
    { label: "Other" },
];
const CylinderList = [
    { label: "2" },
    { label: "4" },
    { label: "6" },
    { label: "8" },
    { label: "10" },
    { label: "12" },
    { label: "14" },
    { label: "16" },
    { label: "Other" },
];
const BodyTypeList = [
    { label: "Boat" },
    { label: "Commercial EV" },
    { label: "Convertible" },
    { label: "Coupe" },
    { label: "Coupe-2-Door" },
    { label: "Cargo Van" },
    { label: "Dump" },
    { label: "Golf Carts EV" },
    { label: "Hatchback" },
    { label: "Minivan-Van" },
    { label: "Pickup-Truck" },
    { label: "Passenger Van" },
    { label: "Sedan" },
    { label: "SUV" },
    { label: "SUV-Crossover" },
    { label: "Sport Utility Vehicle" },
    { label: "Trailer" },
    { label: "Truck" },
    { label: "Wagon" },
    { label: "Other" },
];
const DoorList = [
    { label: "2" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "8" },
    { label: "Other" },
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
        label: "Premium",
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