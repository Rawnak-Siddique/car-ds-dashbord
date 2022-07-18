import React, { useState } from 'react';
import { DetailDescription, IBody, IMG, InventoryButton, InventoryHeader, InventoryTables } from './styles';
import MaterialTable, { MTableToolbar } from "material-table";
import { useNavigate } from "react-router-dom";
import useInventory from '../../hooks/useInventory';
import { DateTime } from "luxon";
import { Button } from '@material-ui/core';


const Inventory = () => {
  const navigate = useNavigate();
  const goToInventoryForm = () => {
    navigate('/inventory-form');
  }
  const [columns, setColumns] = useState([
    {
      title: "Edit", field: "button", render: rowData => <>
        <Button variant='contained' color='primary'
          onClick={() => {
            navigate(`/inventory-form/edit/${rowData.id}`);
          }} >Edit</Button>
        <Button variant='contained' color='secondary' onClick={() => {
          navigate(`/inventory-form/delete/${rowData.id}`);
        }} >Delete</Button>
      </>
    },
    { title: 'Picture', field: 'img', render: rowData => <IMG src={rowData.img} alt="product" /> },
    { title: 'Brand', field: 'brand' },
    { title: 'Model', field: 'model' },
    { title: 'Vin-Number', field: 'vinNumber' },
    { title: 'Stocks', field: 'stock' },
    { title: 'Price', field: 'price' },
    { title: 'Exterior-Colors', field: 'ext_color' },
    { title: 'Interior-Colors', field: 'int_color' },
    { title: 'OdoMeter( KM/M )', field: 'odometer' },
    { title: 'Features', field: 'featured_text' },
    { title: 'Cylinder', field: 'cylinder' },
    { title: 'Transmission', field: 'transmission' },
    { title: 'Drive', field: 'drive' },
    { title: 'Body Type', field: 'body_type' },
    { title: 'Status', field: 'status', render: rowData => <>{rowData.status === 0 ? 'Sold' : 'In Stock'}</> },
    { title: 'Condition', field: 'vh_condition' },
    { title: 'Fuel Type', field: 'fuel_type' },
    { title: 'Milage', field: 'mileage' },
    { title: 'CreatedDate', field: 'post_date', render: rowData => <>{DateTime.fromISO(rowData.post_date).toLocaleString()}</> },
    { title: 'ModifiedDate', field: 'mod_date', render: rowData => <>{DateTime.fromISO(rowData.mod_date).toLocaleString()}</> },
    {
      title: 'DetailDescription', field: 'description', render: rowData => <DetailDescription
      >{rowData.description}</DetailDescription>
    },
  ]);

  const [data, setData] = useState([]);

  const [inventory] = useInventory();


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
            data={inventory}
          />
        </InventoryTables>

      </IBody>
    </div>
  );
}

export default Inventory;
