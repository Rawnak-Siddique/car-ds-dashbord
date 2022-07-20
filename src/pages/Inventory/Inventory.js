import React, { useState } from 'react';
import { IBody, IMG, InventoryHeader, InventoryTables } from './styles';
import MaterialTable from "material-table";
import { useNavigate } from "react-router-dom";
import useInventory from '../../hooks/useInventory';
import { DateTime } from "luxon";
import { Box, Button, Modal, Typography, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SERVER_URL } from '../../variables/variables';
import { Cube } from 'react-preloaders2';
import { useEffect } from 'react';
import EditPopover from '../../components/EditPopover/EditPopover';

const useStyles = makeStyles(() => ({
  button: {
    background: '#2196F3',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '150px',
    height: '40px',
    borderRadius: '12px',
    border: 'none',
  },
}));
const Inventory = () => {
  const navigate = useNavigate();
  /* A hook that is used to get the classes that are defined in the `useStyles` function. */
  const classes = useStyles();

  const [inventory] = useInventory();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);
 

  /** Modal controls and states */
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [featuredModalOpen, setFeaturedModalOpen] = React.useState(false);
  const handleFeaturedModalOpen = (data) => {
    setModalData(data);
    setFeaturedModalOpen(true);
  }
  const handleFeaturedModalClose = () => setFeaturedModalOpen(false);
  const [modalData, setModalData] = useState('');

  const goToInventoryForm = () => {
    navigate('/inventory-form');
  }
  const [columns, setColumns] = useState([
    {
      title: "Edit", field: "button", render: rowData => <>
        {/*<Button variant='contained' color='primary'
          onClick={() => {
            navigate(`/inventory-form/edit/${rowData.id}`);
          }} >Edit</Button>
        <Button variant='contained' color='secondary' onClick={() => {
          navigate(`/inventory-form/delete/${rowData.id}`);
        }} >Delete</Button>
        */}
        {/* A button that is used to open the menu. */}
        <EditPopover data={rowData}></EditPopover>
      </>
    },
    { title: 'Picture', field: 'image', render: rowData => <IMG src={SERVER_URL + '/outgoing/inventory/thumb/' + rowData.ticket} alt="product" /> },
    { title: 'Brand', field: 'brand' },
    { title: 'Model', field: 'model' },
    { title: 'Year', field: 'year' },
    { title: 'Vin-Number', field: 'vinNumber' },
    { title: 'Stocks', field: 'stock' },
    { title: 'Price', field: 'price', render: rowData => <>$ {rowData.price}</> },
    { title: 'Exterior-Colors', field: 'ext_color' },
    { title: 'Interior-Colors', field: 'int_color' },
    { title: 'OdoMeter( KM/M )', field: 'odometer', render: rowData => <>{rowData.price} KM</> },
    { title: 'Features', field: 'featured_text', render: rowData => <Button variant="outlined" color="primary" onClick={() => handleFeaturedModalOpen(rowData.featured_text)}>View</Button> },
    { title: 'Cylinder', field: 'cylinder' },
    { title: 'Transmission', field: 'transmission' },
    { title: 'Drive', field: 'drive' },
    { title: 'Body Type', field: 'body_type' },
    { title: 'Status', field: 'status', render: rowData => <>{rowData.status === 0 ? 'Sold' : 'In Stock'}</> },
    { title: 'Condition', field: 'vh_condition' },
    { title: 'Fuel Type', field: 'fuel_type' },
    { title: 'Milage', field: 'mileage', render: rowData => <>{rowData.price} KM</> },
    { title: 'Created Date', field: 'post_date', render: rowData => <>{DateTime.fromISO(rowData.post_date).toLocaleString()}</> },
    { title: 'Modified Date', field: 'mod_date', render: rowData => <>{DateTime.fromISO(rowData.mod_date).toLocaleString()}</> },
    {
      title: 'Detail Description', field: 'description', render: rowData => <Button variant="outlined" color="primary" onClick={() => handleFeaturedModalOpen(rowData.description)}>View</Button>
    },
  ]);


  return (

    <div>
      <IBody>
        <InventoryHeader>
          <h1>Look at your inventory</h1>
          <Button className={classes.button} variant='contained' color='primary' onClick={goToInventoryForm}>Add inventory</Button>
        </InventoryHeader>
        <InventoryTables>
          <MaterialTable
            title="Inventory"
            columns={columns}
            data={inventory}
            size="small"
            stickyHeader
          />
        </InventoryTables>
        {/** the code below you have to paste in the button and do some testing */}

        {/**---------------------------------------------------------------- */}
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={featuredModalOpen}
            onClose={handleFeaturedModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={featuredModalOpen}>
              <Box sx={modalStyle}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                  Description
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {modalData}
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
      </IBody >
      <Cube customLoading={loading} time={2000}></Cube>
    </div >
  );
}



const options = [
  {
    label: 'Edit',
    click: 'edit',
    class: 'edit',
    id: 55,
  },
  {
    label: 'Delete',
    click: 'Delete',
    class: 'delete',
    id: 55,
  },
];

export default Inventory;
