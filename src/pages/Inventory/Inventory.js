import React, { useState } from 'react';
import { DetailDescription, IBody, IMG, InventoryButton, InventoryHeader, InventoryTables, OptionsButton } from './styles';
import MaterialTable, { MTableToolbar } from "material-table";
import { useNavigate } from "react-router-dom";

const Inventory = () => {
  const navigate = useNavigate();
  const goToInventoryForm = () => {
    navigate('/inventory-formV2');
  }
  const [columns, setColumns] = useState([
    { title: "Edit", field: "button", render: rowData => <OptionsButton onClick={() =>{
      navigate(`/inventory-form/edit/${rowData.id}`);
    }} >Edit</OptionsButton> },
    { title: 'Picture', field: 'img', render: rowData => <IMG src={rowData.img} alt="product" /> },
    { title: 'Brand', field: 'brand' },
    { title: 'Model', field: 'model' },
    { title: 'Vin-Number', field: 'vinNumber' },
    { title: 'Stocks', field: 'stocks' },
    { title: 'Price', field: 'price' },
    { title: 'Exterior-Colors', field: 'exteriorColors' },
    { title: 'Interior-Colors', field: 'interiorColors' },
    { title: 'OdoMeter( KM/M )', field: 'OdoMeter' },
    { title: 'Features', field: 'features' },
    { title: 'Cylinder', field: 'cylinder' },
    { title: 'Transmission', field: 'transmission' },
    { title: 'Drive', field: 'drive' },
    { title: 'Body Type', field: 'bodyType' },
    { title: 'Status', field: 'status' },
    { title: 'Condition', field: 'condition' },
    { title: 'Fuel Type', field: 'fuelType' },
    { title: 'Milage', field: 'milage' },
    { title: 'CreatedDate', field: 'createdDate' },
    { title: 'ModifiedDate', field: 'modifiedDate' },
    { title: 'DetailDescription', field: 'detailDescription', render: rowData => <DetailDescription
    >{rowData.detailDescription}</DetailDescription> },
  ]);

  const [data, setData] = useState([
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2014_Toyota_Corolla_S_%281.8%2C_CVT%29.jpg/378px-2014_Toyota_Corolla_S_%281.8%2C_CVT%29.jpg",
      brand: 'Toyota', 
      model: 'Corolla', 
      vinNumber: '123456789', 
      stocks: '1', 
      price: '$100', 
      exteriorColors: 'Red', 
      interiorColors: 'Black', 
      OdoMeter: '100', 
      features: '', 
      cylinder: '1.06', 
      transmission: 'Manual', 
      drive: 'FWD', 
      bodyType: 'Sedan',
      door: '4', 
      status: 'Available', 
      condition: 'Used', 
      fuelType: 'Petrol', 
      milage: '100', 
      createdDate: '01/01/2019', 
      modifiedDate: '01/01/2019', 
      detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    {
      id: 2,
      img: "https://explorecdn.setbuyatoyota.com/app/uploads/2021/07/09223635/Corolla_2022_SE_Nightshade_Black_Sand_Pearl_Model_Selector.png",
      brand: 'Toyota',
      model: 'Corolla',
      vinNumber: '1G1GK1G838G03938',
      stocks: '10',
      price: '$80,000',
      exteriorColors: 'Black',
      interiorColors: 'Black',
      OdoMeter: '0',
      featured: 'Yes',
      cylinder: '4',
      transmission: 'Automatic',
      drive: 'Rear Wheel Drive',
      bodyType: 'Sedan',
      door: '4',
      status: 'in stock',
      condition: 'New',
      fuelType: 'Petrol',
      milage: '11.3 to 13.4',
      createdDate: '01/01/2019',
      modifiedDate: '01/01/2019',
      detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 3,
    img: "https://i.ytimg.com/vi/CPMPx9MKDUc/maxresdefault.jpg", 
    brand: 'BMW', 
    model: 'X5 2019', 
    vinNumber: '1G1GK1G838G03938', 
    stocks: '8', 
    price: '$100,000', 
    exteriorColors: 'Green', 
    interiorColors: 'Black & White', 
    OdoMeter: '0', 
    features: 'true', 
    cylinder: '4', 
    transmission: 'Automatic', 
    drive: 'Rear Wheel Drive', 
    bodyType: 'Suv',
    door: '4', 
    status: 'in stock', 
    condition: 'New', 
    fuelType: 'Diesel', 
    milage: '11.24 to 13.38', 
    createdDate: '01/01/2019', 
    modifiedDate: '01/01/2019', 
    detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  {
    id: 4,
    img: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/AMG-GT/7842/1609141333284/front-left-side-47.jpg", 
    brand: 'Mercedes', 
    model: 'AMG gt', 
    vinNumber: '1G1GK1G838G03938', 
    stocks: '10', 
    price: '$120,000', 
    exteriorColors: 'Yellow', 
    interiorColors: 'Green', 
    OdoMeter: '0', 
    features: 'true', 
    cylinder: '4', 
    transmission: 'Automatic', 
    drive: 'Rear Wheel Drive', 
    bodyType: 'Sedan', 
    door: '4',
    status: 'in stock', 
    condition: 'New', 
    fuelType: 'Petrol', 
    milage: '12.65', 
    createdDate: '01/01/2019', 
    modifiedDate: '01/01/2019', 
    detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
  {
    id: 5,
    img: "https://maserati.scene7.com/is/image/maserati/maserati/international/Models/Levante/Levante-Trofeo/16-9/full/Maserati-Levante-Trofeo-V8-Full-Front.jpg?$1400x2000$&fit=constrain", 
    brand: 'Maserati', 
    model: 'Levante', 
    vinNumber: '1G1GK1G838G03938', 
    stocks: '10',
    price: '$65,000', 
    exteriorColors: 'Black', 
    interiorColors: 'Black', 
    OdoMeter: '100', 
    features: 'false', 
    cylinder: '4', 
    transmission: 'Automatic', 
    drive: 'Rear Wheel Drive', 
    bodyType: 'Hatchback',
    door: '4', 
    status: 'in stock', 
    condition: 'new', 
    fuelType: 'Petrol', 
    milage: '9.46', 
    createdDate: '01/01/2019', 
    modifiedDate: '01/01/2019', 
    detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWrFturgeshkl8p2P2FinQMkumqafkEK0NA&usqp=CAU", 
    brand: 'Lexus', 
    model: 'RX', 
    vinNumber: '1G1GK1G838G03938', 
    stocks: '12', 
    price: '$70,000', 
    exteriorColors: 'Silver', 
    interiorColors: 'Black', 
    OdoMeter: '100', 
    features: 'false',
    cylinder: '6', 
    transmission: 'Automatic', 
    drive: 'Front Wheel Drive', 
    bodyType: 'SUV',
    door: '4', 
    status: 'in stock', 
    condition: 'new', 
    fuelType: 'Petrol', 
    milage: '16', 
    createdDate: '01/01/2019', 
    modifiedDate: '01/01/2019', 
    detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  {
    id: 7,
    img: "https://files.hodoor.world/images/products/images-products-1-5950-362149694-mansory_porsche_cayenne_coupe_06.jpg", 
    brand: 'Porsche', 
    model: 'Cayenne', 
    vinNumber: '1G1GK1G838G03938', 
    stocks: '12', 
    price: '$150,000', 
    exteriorColors: 'Silver', 
    interiorColors: 'Black', 
    OdoMeter: '100', 
    features: 'false',
    cylinder: '8', 
    transmission: 'Automatic', 
    drive: 'All Wheel Drive', 
    bodyType: 'Hatckback', 
    door: '2',
    status: 'in stock', 
    condition: 'new', 
    fuelType: 'Petrol', 
    milage: '8.77 to 41.67', 
    createdDate: '01/01/2019', 
    modifiedDate: '01/01/2019', 
    detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  {
    id: 8,
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Aston_Martin_DB11_Volante_Free_Car_Picture_-_Give_Credit_Via_Link_%28cropped%29.jpg", 
    brand: 'Aston Martin', 
    model: 'DB11', 
    vinNumber: '1G1GK1G838G03938', 
    stocks: '12', 
    price: '$170,000', 
    exteriorColors: 'Silver', 
    interiorColors: 'Black', 
    OdoMeter: '100', 
    features: 'true',
    cylinder: '8', 
    transmission: 'Automatic', 
    drive: 'All Wheel Drive', 
    bodyType: 'Roadster',
    door: '4', 
    status: 'in stock', 
    condition: 'new', 
    fuelType: 'Petrol', 
    milage: '16', 
    createdDate: '01/01/2019', 
    modifiedDate: '01/01/2019', 
    detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  {
    id: 9,
    img: "https://s3-prod-europe.autonews.com/s3fs-public/Giulia%20GTAm%20Montreal%20Green%20900x540.jpg",
    brand: 'Alfa Romeo', 
    model: 'Giulia', 
    vinNumber: '1G1GK1G838G03938', 
    stocks: '12', 
    price: '$70,000', 
    exteriorColors: 'Silver', 
    interiorColors: 'Black', 
    OdoMeter: '0', 
    features: 'false',
    cylinder: '6', 
    transmission: 'Automatic', 
    drive: 'Rear Wheel Drive', 
    bodyType: 'Sedan', 
    door: '4',
    status: 'in stock', 
    condition: 'new', 
    fuelType: 'Petrol', 
    milage: '11.3 to 13.4', 
    createdDate: '01/01/2019', 
    modifiedDate: '01/01/2019', 
    detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' 
  },
  ]);
  
  return (
    <div>
      <IBody>
        <InventoryHeader>
            <h1>Look at your inventory</h1>
            <InventoryButton onClick={goToInventoryForm} >Add inventory</InventoryButton>
        </InventoryHeader>
        <InventoryTables>
        <MaterialTable
          title="Inventory"
          columns={columns}
          data={data}
          
          
        />
        </InventoryTables>
        
      </IBody>
    </div>
  );
}

export default Inventory;
