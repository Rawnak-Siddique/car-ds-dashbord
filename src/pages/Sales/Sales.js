import { Backdrop, Box, Fade, makeStyles, Modal, Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ModalDiv, ModalInput, ModalLabel, SalesBody, SalesBodyHeader, SalesBodyTables } from './styles';
import { Cube } from 'react-preloaders2';
import useSales from '../../hooks/useSales';
import useInventory from '../../hooks/useInventory';

const useStyles = makeStyles(() => ({
    button: {
        background: '#2196F3',
        color: 'white',
        cursor: 'pointer',
        width: '150px',
        height: '40px',
        borderRadius: '12px',
        border: 'none',
    },
  }));

const Sales = () => {
    const classes = useStyles();
    const [sales] = useSales();
    const [inventory] = useInventory();
    console.log(inventory);
    console.log(sales);
    const columns = [
        { title: 'Name', field: 'first_name last_name contact_first_name contact_last_name company_name', render: rowData =>{ if ((rowData.company_name.length === 0) || (rowData.company_name === "NA")) { return `${rowData.first_name} ${rowData.last_name}` }
        else { return `${rowData.contact_first_name} ${rowData.contact_last_name} - ${rowData.company_name}` }   } },
        { title: 'Mobile', field: 'mobile' },
        { title: 'Email', field: 'email' },
        { title: 'Vehicle', field: 'inventory', render: rowData => <Button variant="outlined" color="primary" onClick={() => handleInventoryDetailsModalOpen(rowData.inventory)}>Show</Button>},
        { title: 'Approved by', field: 'approved_by' },
        { title: 'Salesperson', field: 'sales_person' },
        { title: 'Details', field: 'additional_info company_name contact_first_name contact_last_name street_address city country province postal_code  deal_type deal_status delivery_timestamp driver_lic driver_lic_expiry fax mvda_no rin sales_date sales_report_no tax_no year_end', render: rowData => <Button variant="outlined" color="primary" onClick={() => handleViewDetailsModalOpen( rowData )} >View</Button>},
    ];
    const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
    const [modalData, setModalData] = useState('');
    const handleViewDetailsModalOpen = (data) => {  
        
        setModalData(data);
        setViewDetailsModalOpen(true);
        console.log(data);
    };
    const handleViewDetailsModalClose = () => {
        setViewDetailsModalOpen(false);
    };
    const [viewInventoryDetailsModalOpen, setInventoryDetailsModalOpen] = useState(false);
    const [inventoryDetailsModalData, setInventoryDetailsModalData] = useState('');
    /* A function that is called when the button is clicked. */
    const handleInventoryDetailsModalOpen = (data) => {
       /* Iterating over the inventory array and checking if the ticket property of the element is
       equal to the data passed in. If it is, it sets the inventoryDetailsModalData to the element. */
        inventory.forEach(element => {
           /* Checking if the ticket property of the element is equal to the data passed in. If it is,
           it sets the inventoryDetailsModalData to the element. */
            if (element.ticket === data) {
                console.log("condition",element);
                setInventoryDetailsModalData(element);
            }
        })
        /* Setting the state of the `viewInventoryDetailsModalOpen` to true. */
        setInventoryDetailsModalOpen(true);
        /* Logging the value of the `inventoryDetailsModalData` variable to the console. */
        console.log("data", inventoryDetailsModalData);
        /* Logging the value of the `data` variable to the console. */
        console.log(data);
    };
    /**
     * When the user clicks the close button, the modal will close.
     */
    const handleInventoryDetailsModalClose = () => {
       /* Setting the state of the `viewInventoryDetailsModalOpen` to false. */
        setInventoryDetailsModalOpen(false);
    };
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
      const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        maxHeight: '700px',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflow: 'scroll',
      };
    
    const navigate = useNavigate();
    const goToSalesForm = () => {
        navigate('/sales-form');
    }
    return (
        <SalesBody>
            <SalesBodyHeader>
                <h1>Sales section</h1>
                <Button className={classes.button} variant='contained' color='primary' onClick={goToSalesForm}>Add sales</Button>
            </SalesBodyHeader>
            <SalesBodyTables>
                <MaterialTable
                    title="Sales history"
                    columns={columns}
                    data={sales}
                    options={{
                        search: true,
                        headerStyle: {
                            color: '#1C1BAC',
                        },
                    }}
                ></MaterialTable>
                <Modal aria-labelledby='transition-modal-title'
                    aria-describedby='transition-modal-description'
                    open={viewInventoryDetailsModalOpen}
                    onClose={handleInventoryDetailsModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }} >
                        <Fade in={viewInventoryDetailsModalOpen} >
                            <Box sx={modalStyle}>
                                <Typography id='transition-modal-title' variant='h6' component='h2'>
                                    Car details
                                </Typography>
                                <Typography id='transition-modal-description' sx={{ mt: 2 }}>
                                    {/* Mapping over the inventoryModalMap array and returning a
                                    ModalDiv component for each item in the array. */}
                                    {inventoryModalMap.map( (item) => {
                                        const [[key, value]] = Object.entries(item);
                                        return (
                                            <ModalDiv key={key}>
                                                <ModalLabel>
                                                    {key}:  
                                                </ModalLabel>
                                                <ModalInput>
                                                    {inventoryDetailsModalData[value]}
                                                </ModalInput>
                                            </ModalDiv>
                                        )
                                    }
                                    )}
                                </Typography>
                            </Box>
                        </Fade>
                    </Modal>
                <Modal aria-labelledby='transition-modal-title'
                    aria-describedby='transition-modal-description'
                    open={viewDetailsModalOpen}
                    onClose={handleViewDetailsModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }} >
                        <Fade in={viewDetailsModalOpen}>
                            <Box sx={modalStyle}>
                                <Typography id='transition-modal-title' variant='h6' component='h2'>
                                    Details
                                </Typography>
                                <Typography id='transition-modal-description' sx={{ mt: 2 }}>
                                   { /* Mapping over the salesModalMap array and returning a ModalDiv
                                    component for each item in the array. */}
                                    {salesModalMap.map( (sale) => {
                                        const [[key, value]] = Object.entries(sale);
                                        return (
                                            <ModalDiv key={key}>
                                                <ModalLabel>
                                                    {key}:  
                                                </ModalLabel>
                                                <ModalInput>
                                                    {modalData[value]}
                                                </ModalInput>
                                            </ModalDiv>
                                        )
                                    })}
                                </Typography>
                            </Box>
                        </Fade>
                    </Modal>
            </SalesBodyTables>
            <Cube customLoading={loading} timeout={2000}></Cube>
        </SalesBody>
    )
}
/* An array of objects. Each object has a key and a value. The key is the label that will be displayed
on the modal and the value is the property of the modalData object that will be displayed. */
const salesModalMap = [
    {
        Address: 'street_address',
    },
    {
        City: 'city',
    },
    {
        Country: 'country',
    },
    {
        Province: 'province',
    },
    {
        'Postal code': 'postal_code',
    },
    {
        'Deal Type': 'deal_type',
    },
    {
        'Deal Status': 'deal_status',
    },
    {
        'Delivery timestamp': 'delivery_timestamp',
    },
    {
        'Driver license': 'driver_lic',
    },
    {
        'Driver license expiry': 'driver_lic_expiry',
    },
    {
        Fax: 'fax',
    },
    {
        'MVDA No': 'mvda_no',
    },
    {
        RIN: 'rin',
    },
    {
        'Sales date': 'sales_date',
    },
    {
        'Sales report No': 'sales_report_no',
    },
    {
        'Tax No': 'tax_no',
    },
    {
        'Year end': 'year_end',
    },
    {
        'Company name': 'company_name',
    },
    {
        'Contact first name': 'contact_first_name',
    },
    {
        'Contact last name': 'contact_last_name',
    },
    {
        'Additional information': 'additional_info',
    },
];
/* An array of objects. Each object has a key and a value. The key is the label that will be displayed absolutely within the modal and the value is the property of the modalData object that will be displayed. */
const inventoryModalMap = [
    {
        brand: 'brand',
    },
    {
        Modal: 'model',
    },
    {
        Year: 'year',
    },
    {
        BodyType: 'body_type',
    },
    {
        Cylinders: 'cylinders',
    },
    {
        Drive: 'drive',
    },
    {
        Door: 'door',
    },
    {
        ExteriorColor: 'ext_color',
    },
    {
        Fuel: 'fuel_type',
    },
    {
        Features: 'featured_text',
    },
    {
        InteriorColor: 'int_color',
    },
    {
        Mileage: 'mileage',
    },
    {
        Odometer: 'odometer',
    },
    {
        Price: 'price',
    },
    {
        Status: 'status',
    },
    {
        StockNumber: 'stock',
    },
    {
        Transmission: 'transmission',
    },
    {
        Vin: 'vinNumber',
    },
    {
        CreatedDate: 'post_date',
    },
    {
        UpdatedDate: 'mod_date',
    },
    {
        Description: 'description',
    },
];    

export default Sales
