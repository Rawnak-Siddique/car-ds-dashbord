import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InventoryFormEditBody, InventoryFormEditBodyButton, InventoryFormEditBodyImageSection, InventoryFormEditBodyInputsLabel, InventoryFormEditBodyInputsSection, InventoryFormEditBodyInputsValue, InventoryFormEditBodyTextArea, InventoryFormEditBodyTextAreaLabel, InventoryFormEditBodyTextAreaSection, InventoryFormEditBodyTextAreaValue } from './styles'
import { Dropzone, FullScreenPreview, FileItem } from "@dropzone-ui/react";
import { makeStyles, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import useInventory from '../../hooks/useInventory';
import { Controller, useForm } from 'react-hook-form';
import { useMemo } from 'react';
import { SERVER_URL } from "../../variables/variables";
import { updateInventory } from '../../api/api';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: "300px",
        height: "50px",
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
        minWidth: '150px',
        height: "50px",
        fontWeight: "500",
        background: "white",
        borderRadius: "10px",
    },
}));
const InventoryFormEdit = () => {
    const { id } = useParams();
    // ** import custom hook to get inventory data **
    const [inventory] = useInventory(id);

    const classes = useStyles();
    const [editData, setEditData] = useState({});
    const [files, setFiles] = useState([]);
    const [imageSrc, setImageSrc] = useState(undefined);

    // ** useEffect Set Inventory Data **
    useEffect(() => {
        const fetchData = async () => {
            setEditData(inventory[0])
        }
        fetchData()
    }, [inventory])

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: editData
    });

    const updateData = async () => {
        try {
            await updateInventory(editData);
        } catch (error) {
            console.log(error);
        }
    }

    const updateFiles = (incommingFiles) => {
        console.log("incomming files", incommingFiles);
        setFiles(incommingFiles);
    };
    const onDelete = (id) => {
        setFiles(files.filter((x) => x.id !== id));
    };
    const handleSee = (imageSource) => {
        setImageSrc(imageSource);
    };
    const handleClean = (files) => {
        console.log("list cleaned", files);
    };
    return (
        <InventoryFormEditBody>
            Edit Inventory Form
            {/* <InventoryFormEditBodyImageSection >
                <Dropzone
                    style={{ minWidth: "550px" }}
                    //view={"list"}
                    onChange={updateFiles}
                    minHeight="195px"
                    onClean={handleClean}
                    value={files}
                    maxFiles={5}
                    //header={false}
                    // footer={false}
                    maxFileSize={4194304}
                    //label="Drag'n drop files here or click to browse"
                    //label="Suleta tus archivos aquí"
                    accept=".png,image/*"
                    // uploadingMessage={"Uploading..."}
                    url="https://my-awsome-server/upload-my-file"
                    //of course this url doens´t work, is only to make upload button visible
                    //uploadOnDrop
                    //clickable={false}
                    fakeUploading
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
            </InventoryFormEditBodyImageSection> */}
            <h1>Image Edit is under construction</h1>
            {editData ? <form onSubmit={handleSubmit(updateData)} >
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Brand</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Brand</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={editData?.brand}
                                label="Brand" InputLabelProps={{ shrink: true, }}
                                onChange={(e)=> {
                                    setEditData({...editData, brand: e.target.value});
                                    console.log(editData);
                                }}
                                >
                                {
                                    BrandList.map((brand) => {
                                        const [[key]] = Object.entries(brand);
                                        return (
                                            <MenuItem value={key} key={key}>{key}</MenuItem>
                                        )

                                    })
                                }
                            </Select>
                        </FormControl>

                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>

                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Model Name</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Model" variant="outlined" type="text" placeholder="Model" value={editData?.model} onChange={(e) => setEditData({ ...editData, model: e.target.value })} InputLabelProps={{ shrink: true, }} />
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>

                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Vin Number</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Vin Number" variant="outlined" type="text" placeholder="vinNumber" value={editData?.vinNumber} onChange={(e) => setEditData({ ...editData, vinNumber: e.target.value })} InputLabelProps={{ shrink: true, }} />
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Stock</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Stock" variant="outlined" type="number" placeholder="Stock" value={editData?.stock} onChange={(e) => setEditData({ ...editData, stock: e.target.value })} InputLabelProps={{ shrink: true, }} />
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Price ($)</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Price" variant="outlined" type="number" placeholder="Price" value={editData?.price} onChange={(e) => setEditData({ ...editData, price: e.target.value })} InputLabelProps={{ shrink: true, }} />
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Exterior Color</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Exterior Color" variant="outlined" type="text" placeholder="Exterior Color" value={editData?.ext_color} onChange={(e) => setEditData({ ...editData, ext_color: e.target.value })} InputLabelProps={{ shrink: true, }} />
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Interior Color</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Interior Color" variant="outlined" type="text" placeholder="Interior Color" value={editData?.int_color} onChange={(e) => setEditData({ ...editData, int_color: e.target.value })} InputLabelProps={{ shrink: true, }} />
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>OdoMeter</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="OdoMeter" variant="outlined" type="number" placeholder="OdoMeter" value={editData?.odometer} onChange={(e) => setEditData({ ...editData, odometer: e.target.value })} InputLabelProps={{ shrink: true, }} />
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyTextAreaSection>
                    <InventoryFormEditBodyTextAreaLabel>Featured</InventoryFormEditBodyTextAreaLabel>
                    <InventoryFormEditBodyTextAreaValue>
                        <InventoryFormEditBodyTextArea autoWidth="true" placeholder={`Featured ${editData?.featured_text}`} value={editData?.featured_text} onChange={(e) => setEditData({ ...editData, featured_text: e.target.value })} InputLabelProps={{ shrink: true, }} />
                    </InventoryFormEditBodyTextAreaValue>
                </InventoryFormEditBodyTextAreaSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Cylinder</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Cylinder</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Cylinder"
                                value={editData?.cylinder}
                                onChange={(e) => setEditData({ ...editData, cylinder: e.target.value })}>
                                {
                                    CylinderList.map((cylinder) => (
                                        <MenuItem value={cylinder.label} key={cylinder.label}>{cylinder.label}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Transmission</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Transmission</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Transmission"
                                value={editData?.transmission}
                                onChange={(e) => setEditData({ ...editData, transmission: e.target.value })}>
                                {
                                    TransmissionList.map((transmission) => (
                                        <MenuItem value={transmission.label} key={transmission.label}>{transmission.label}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Drive</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Drive</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Drive"
                                value={editData?.drive}
                                onChange={(e) => setEditData({ ...editData, drive: e.target.value })}>
                                {
                                    DriveList.map((drive) => (
                                        <MenuItem value={drive.label} key={drive.label}>{drive.label}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Body Type</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Body Type</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Body Type"
                                value={editData?.body_type}
                                onChange={(e) => setEditData({ ...editData, body_type: e.target.value })}>
                                {
                                    BodyTypeList.map((bodyType) => (
                                        <MenuItem value={bodyType.label} key={bodyType.label}>{bodyType.label}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Door</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Door</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Door"
                                value={editData?.door}
                                onChange={(e) => setEditData({ ...editData, body_type: e.target.value })}>
                                {
                                    DoorList.map((door) => (
                                        <MenuItem value={door.label} key={door.label}>{door.label}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Status</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Status</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Status"
                                value={editData?.status}
                                onChange={(e) => {
                                    setEditData({ ...editData, status : e.target.value })
                                    console.log(editData);
                                }}>

                                {

                                    StatusList.map((status) => {
                                        const [[key, value]] = Object.entries(status)
                                        return (
                                            <MenuItem value={value} key={key}>{key}</MenuItem>
                                        )
                                    })
                                }
                            </Select>
                        </FormControl>
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Condition</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Condition</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Vehicle Condition"
                                value={editData?.vh_condition}
                                onChange={(e) => {
                                    setEditData({ ...editData, vh_condition: e.target.value })
                                    console.log(editData);
                                }}>
                                {
                                    ConditionsList.map((conditions) => (
                                        <MenuItem value={conditions.label} key={conditions.label}>{conditions.label}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Fuel Type</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <FormControl autoWidth="true" variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Fuel Type</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                label="Fuel Type"
                                value={editData?.fuel_type}
                                onChange={(e) => setEditData({ ...editData, fuel_type: e.target.value })}>
                                {
                                    FuelTypeList.map((fuelType) => (
                                        <MenuItem value={fuelType.label} key={fuelType.label}>{fuelType.label}</MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsSection>
                    <InventoryFormEditBodyInputsLabel>Mileage</InventoryFormEditBodyInputsLabel>
                    <InventoryFormEditBodyInputsValue>
                        <TextField className={classes.textField} id="outlined-basic" label="Mileage" variant="outlined" type="text" placeholder="Mileage" value={editData?.mileage} onChange={(e) => setEditData({ ...editData, mileage: e.target.value })} InputLabelProps={{ shrink: true, }} />
                    </InventoryFormEditBodyInputsValue>
                </InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyTextAreaSection>
                    <InventoryFormEditBodyTextAreaLabel>Detail Description</InventoryFormEditBodyTextAreaLabel>
                    <InventoryFormEditBodyTextAreaValue>
                        <InventoryFormEditBodyTextArea autoWidth="true" placeholder={`Featured ${editData?.featured_text}`} value={editData?.description} onChange={(e) => setEditData({ ...editData, description: e.target.value })} InputLabelProps={{ shrink: true, }} />
                    </InventoryFormEditBodyTextAreaValue>
                </InventoryFormEditBodyTextAreaSection>
                <InventoryFormEditBodyButton>
                    <Button type="submit" className={classes.button} >Update Vehicle</Button>
                </InventoryFormEditBodyButton>
            </form> : 'Loading Data ...'}
        </InventoryFormEditBody>

    )
}
const ConditionsList = [
    { label: 'New' },
    { label: 'Updated' },
    { label: 'Used' },
];
const StatusList = [
    { 'In Stock': 1 },
    { 'Sold Out': 0 },
];
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
    { label: "Diesel", },
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
        'AM General': 'AM General',
    },
    {
        'AMC': 'AMC',
    },
    {
        'Acura': 'Acura',
    },
    {
        'Alfa Romeo': 'Alfa Romeo',
    },
    {
        'Aston Martin': 'Aston Martin',
    },
    {
        'Atlas Copco': 'Atlas Copco',
    },
    {
        'Audi': 'Audi',
    },
    {
        'Austin Healey': 'Austin Healey',
    },
    {
        'BMW': 'BMW',
    },
    {
        'Bayliner': 'Bayliner',
    },
    {
        'Bentley': 'Bentley',
    },
    {
        'Bricklin': 'Bricklin',
    },
    {
        'Bugatti': 'Bugatti',
    },
    {
        'Buick': 'Buick',
    },
    {
        'Budd': 'Budd',
    },
    {
        'Cadillac': 'Cadillac',
    },
    {
        'Capacity': 'Capacity',
    },
    {
        'Carrier': 'Carrier',
    },
    {
        'Caterpillar': 'Caterpillar',
    },
    {
        'Cedar Rapids': 'Cedar Rapids',
    },
    {
        'Chevrolet': 'Chevrolet',
    },
    {
        'Chrysler': 'Chrysler',
    },
    {
        'Daewoo': 'Daewoo',
    },
    {
        'Daihatsu': 'Daihatsu',
    },
    {
        'Datsun': 'Datsun',
    },
    {
        'Dodge': 'Dodge',
    },
    {
        'Ducati': 'Ducati',
    },
    {
        'Eagle': 'Eagle',
    },
    {
        'Excavating': 'Excavating',
    },
    {
        'Fiat': 'Fiat',
    },
    {
        'Ferrari': 'Ferrari',
    },
    {
        'Fisker': 'Fisker',
    },
    {
        'Ford': 'Ford',
    },
    {
        'GMC': 'GMC',
    },
    {
        'Genesis': 'Genesis',
    },
    {
        'Genix': 'Genix',
    },
    {
        'Geo HUMMER': 'Geo HUMMER',
    },
    {
        'Harley-Davidson': 'Harley-Davidson',
    },
    {
        'Hino': 'Hino',
    },
    {
        'Honda': 'Honda',
    },
    {
        'Hyundai': 'Hyundai',
    },
    {
        'Infiniti': 'Infiniti',
    },
    {
        'International': 'International',
    },
    {
        'International Harvester': 'International Harvester',
    },
    {
        'Isuzu': 'Isuzu',
    },
    {
        'Jaguar': 'Jaguar',
    },
    {
        JC: 'JC',
    },
    {
        Jeep: 'Jeep',
    },
    {
        Kawasaki: 'Kawasaki',
    },
    {
        Kenworth: 'Kenworth',
    },
    {
        Kia: 'Kia',
    },
    {
        King: 'King',
    },
    {
        Lamborghini: 'Lamborghini',
    },
    {
        'Land Rover': 'Land Rover',
    },
    {
        Lexus: ' Lexus',
    },
    {
        Lincoln: 'Lincoln',
    },
    {
        Lotus: 'Lotus',
    },
    {
        MACK: 'MACK',
    },
    {
        MG: 'MG',
    },
    {
        MINI: 'MINI',
    },
    {
        MV: 'MV',
    },
    {
        Maserati: 'Maserati',
    },
    {
        Mack: 'Mack',
    },
    {
        Maybach: 'Maybach',
    },
    {
        Mazda: 'Mazda',
    },
    {
        McLaren: 'McLaren',
    },
    {
        'Mercedes-Benz': 'Mercedes-Benz',
    },
    {
        Mercury: 'Mercury',
    },
    {
        Mitsubishi: 'Mitsubishi',
    },
    {
        Jeep: 'Jeep',
    },
    {
        'Mobility Ventures': 'Mobility Ventures',
    },
    {
        Nissan: 'Nissan',
    },
    {
        Oldsmobile: 'Oldsmobile',
    },
    {
        Opel: 'Opel',
    },
    {
        Panoz: 'Panoz',
    },
    {
        Peterbilt: 'Peterbilt',
    },
    {
        Plymouth: 'Plymouth',
    },
    {
        Polaris: 'Polaris',
    },
    {
        Pontiac: 'Pontiac',
    },
    {
        Porsche: 'Porsche',
    },
    {
        Ram: 'Ram',
    },
    {
        Reefer: 'Reefer',
    },
    {
        Renault: 'Renault',
    },
    {
        'Roll-off': 'Roll-off',
    },
    {
        'Rolls-Royce': 'Rolls-Royce',
    },
    {
        Saab: 'Saab',
    },
    {
        Saturn: 'Saturn',
    },
    {
        Scion: 'Scion',
    },
    {
        Shelby: 'Shelby',
    },
    {
        Smart: 'Smart',
    },
    {
        'Spyker': 'Spyker',
    },
    {
        label: 'Sterling',
    },
    {
        'Subaru': 'Subaru',
    },
    {
        'Suzuki': 'Suzuki',
    },
    {
        'Taylor': 'Taylor',
    },
    {
        'Terex': 'Terex',
    },
    {
        'Tesla': 'Tesla',
    },
    {
        'Thermo King': 'Thermo King',
    },
    {
        'Thru-Way': 'Thru-Way',
    },
    {
        'Toyota': 'Toyota',
    },
    {
        'Trailmobile': 'Trailmobile',
    },
    {
        'Triumph': 'Triumph',
    },
    {
        'Utility': 'Utility',
    },
    {
        'Volkswagen': 'Volkswagen',
    },
    {
        'Volv': 'Volv',
    },
    {
        'Western Star': 'Western Star',
    },
    {
        'Yamaha': 'Yamaha',
    },
    {
        'Yugo': 'Yugo',
    },
    {
        'Other': 'Other',
    },
];
export default InventoryFormEdit
