import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InventoryFormEditBody, InventoryFormEditBodyButton, InventoryFormEditBodyImageSection, InventoryFormEditBodyInputsLabel, InventoryFormEditBodyInputsSection, InventoryFormEditBodyInputsValue, InventoryFormEditBodyTextArea, InventoryFormEditBodyTextAreaLabel, InventoryFormEditBodyTextAreaSection, InventoryFormEditBodyTextAreaValue } from './styles'
import { Dropzone, FullScreenPreview, FileItem } from "@dropzone-ui/react";
import { makeStyles, TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

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
    const {id} = useParams();
    const classes = useStyles();
    
    useEffect(() => {
        console.log("parum",id);
        setEditData({id: id},
            {brand: "Audi"},
            {model: "123"},
            {body_type: "Sedan"},
            {condition: "Used"},
            {cylinder: "6"},
            {description: "123"},
            {door: "6"},
            {drive: "All-wheel"},
            {featured_text: "123"},
            {fuel_type: "Hybrid Gas"},
            {ext_color: "123"},
            {int_color: "123"},
            {mileage: "123"},
            {odometer: "123"},
            {price: "121"},
            {status: " out of stock"},
            {stock: "123"},
            {transmission: "manual"},
            {vinNumber: "123"},
            {img: [
                {src: ""},
                {src: ""},
                {src: ""},
                {src: ""},
            ]}
            );
    }, []);
    const [editData, setEditData] = useState([]);
    console.log("edit",editData.id);
    const [files, setFiles] = useState([]);
    const [imageSrc, setImageSrc] = useState(undefined);
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
            <InventoryFormEditBodyImageSection >
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
                maxFileSize={2998000}
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
            </InventoryFormEditBodyImageSection>
            <InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsLabel>Brand</InventoryFormEditBodyInputsLabel>
                <InventoryFormEditBodyInputsValue>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Brand</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={editData.brand}
                            onChange={(e) => setEditData({...editData, brand: e.target.value})}
                            label="Brand"
                            >
                            <MenuItem value={editData.brand}>
                                {editData.brand}
                            </MenuItem>
                            {
                                        BrandList.map((brand) => (
                                            <MenuItem value={brand.label} key={brand.label}>{brand.label}</MenuItem>
                                        ))
                            }
                            </Select>
                    </FormControl>
                </InventoryFormEditBodyInputsValue>
            </InventoryFormEditBodyInputsSection>
            <InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsLabel>Model Name</InventoryFormEditBodyInputsLabel>
                <InventoryFormEditBodyInputsValue>
                <TextField className={classes.textField} id="outlined-basic" label="Model" variant="outlined" type="text" placeholder="Model" value={editData.model} onChange={(e) => setEditData({...editData, model: e.target.value})} />
                </InventoryFormEditBodyInputsValue>
            </InventoryFormEditBodyInputsSection>
            <InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsLabel>Vin Number</InventoryFormEditBodyInputsLabel>
                <InventoryFormEditBodyInputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Vin Number" variant="outlined" type="text" placeholder="vinNumber" value={editData.vinNumber} onChange={(e) => setEditData({...editData, vinNumber: e.target.value})}/>
                </InventoryFormEditBodyInputsValue>
            </InventoryFormEditBodyInputsSection>
            <InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsLabel>Stock</InventoryFormEditBodyInputsLabel>
                <InventoryFormEditBodyInputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Stock" variant="outlined" type="number" placeholder="Stock" value={editData.stock} onChange={(e) => setEditData({...editData, stock: e.target.value})}/>    
                </InventoryFormEditBodyInputsValue>
            </InventoryFormEditBodyInputsSection>
            <InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsLabel>Price ($)</InventoryFormEditBodyInputsLabel>
                <InventoryFormEditBodyInputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Price" variant="outlined" type="number" placeholder="Price" value={editData.price} onChange={(e) => setEditData({...editData, price: e.target.value})}/>
                </InventoryFormEditBodyInputsValue>
            </InventoryFormEditBodyInputsSection>
            <InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsLabel>Exterior Color</InventoryFormEditBodyInputsLabel>
                <InventoryFormEditBodyInputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Exterior Color" variant="outlined" type="text" placeholder="Exterior Color" value={editData.ext_color} onChange={(e) => setEditData({...editData, ext_color: e.target.value})}/>
                </InventoryFormEditBodyInputsValue>
            </InventoryFormEditBodyInputsSection>
            <InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsLabel>Interior Color</InventoryFormEditBodyInputsLabel>
                <InventoryFormEditBodyInputsValue>
                    <TextField className={classes.textField} id="outlined-basic" label="Interior Color" variant="outlined" type="text" placeholder="Interior Color" value={editData.int_color} onChange={(e) => setEditData({...editData, int_color: e.target.value})} />
                </InventoryFormEditBodyInputsValue>
            </InventoryFormEditBodyInputsSection>
            <InventoryFormEditBodyInputsSection>
                <InventoryFormEditBodyInputsLabel>OdoMeter</InventoryFormEditBodyInputsLabel>
                <InventoryFormEditBodyInputsValue>
                <TextField className={classes.textField} id="outlined-basic" label="OdoMeter" variant="outlined" type="number" placeholder="OdoMeter" value={editData.odometer} onChange={(e) => setEditData({...editData, odometer: e.target.value})} />
                </InventoryFormEditBodyInputsValue>
            </InventoryFormEditBodyInputsSection>
            <InventoryFormEditBodyTextAreaSection>
                <InventoryFormEditBodyTextAreaLabel>Featured</InventoryFormEditBodyTextAreaLabel>
                <InventoryFormEditBodyTextAreaValue>
                    <InventoryFormEditBodyTextArea autoWidth="true" placeholder={`Featured ${editData.featured_text}`} value={editData.featured_text} onChange={(e) => setEditData({...editData, featured_text: e.target.value})} />
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
                                value={editData.cylinder}
                                onChange={(e) => setEditData({...editData, cylinder: e.target.value})}>
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
                                value={editData.transmission}
                                onChange={(e) => setEditData({...editData, transmission: e.target.value})}>
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
                                value={editData.drive}
                                onChange={(e) => setEditData({...editData, drive: e.target.value})}>
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
                                    value={editData.body_type}
                                    onChange={(e) => setEditData({...editData, body_type: e.target.value})}>
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
                                        value={editData.body_type}
                                        onChange={(e) => setEditData({...editData, body_type: e.target.value})}>
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
                                        value={editData.status}
                                        onChange={(e) => setEditData({...editData, status: e.target.value})}>
                                        {
                                            StatusList.map((status) => (
                                                <MenuItem value={status.label} key={status.label}>{status.label}</MenuItem>
                                            ))
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
                                        label="Condition" 
                                        value={editData.condition}
                                        onChange={(e) => setEditData({...editData, condition: e.target.value})}>
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
                                        value={editData.fuel_type}
                                        onChange={(e) => setEditData({...editData, fuel_type: e.target.value})}>
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
                <TextField className={classes.textField} id="outlined-basic" label="Mileage" variant="outlined" type="text" placeholder="Mileage" value={editData.mileage} onChange={(e) => setEditData({...editData, mileage: e.target.value})}  />
                </InventoryFormEditBodyInputsValue>
            </InventoryFormEditBodyInputsSection>
            <InventoryFormEditBodyTextAreaSection>
                <InventoryFormEditBodyTextAreaLabel>Detail Description</InventoryFormEditBodyTextAreaLabel>
                <InventoryFormEditBodyTextAreaValue>
                <InventoryFormEditBodyTextArea autoWidth="true" placeholder={`Featured ${editData.featured_text}`} value={editData.description} onChange={(e) => setEditData({...editData, description: e.target.value})} />
                </InventoryFormEditBodyTextAreaValue>
            </InventoryFormEditBodyTextAreaSection>
            <InventoryFormEditBodyButton>
                <Button type="button" className={classes.button} >Add Inventory</Button>
            </InventoryFormEditBodyButton>
            
        </InventoryFormEditBody>
    )
}
const ConditionsList = [
    { label: 'New' },
    { label: 'Updated' },
    { label: 'Used' },
];
const StatusList = [
    { label: 'In Stock'},
    { label: 'Out of stock'},
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
    { label: "Diesel",},
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
export default InventoryFormEdit
