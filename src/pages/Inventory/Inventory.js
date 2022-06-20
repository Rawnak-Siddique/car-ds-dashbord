import React, { useState } from 'react';
import { DetailDescription, IBody, InventoryButton, InventoryHeader, InventoryTables, OptionsButton } from './styles';
import MaterialTable, { MTableToolbar } from "material-table";

const Inventory = () => {
  const [filtering, setFiltering] = useState(false);
  const [columns, setColumns] = useState([
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
    { brand: 'Toyota', 
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
    detailDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
  { 
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
            <InventoryButton>Add inventory</InventoryButton>
        </InventoryHeader>
        <InventoryTables>
        <MaterialTable
      title="Inventory"
      columns={columns}
      data={data}
      options={{
        filtering: filtering,
        search: true,
        selection: true,
      }}
      components={{
        Toolbar: props => (
          <div>
            <MTableToolbar {...props} />
            <div>
              <OptionsButton onClick={() => {setFiltering(!filtering)}} >Filtering</OptionsButton>
            </div>
          </div>
        )
      }}
      editable={{
        
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
    />
        </InventoryTables>

      </IBody>
    </div>
  );
}

export default Inventory;
