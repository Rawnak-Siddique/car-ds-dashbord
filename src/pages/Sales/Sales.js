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
        { title: 'Name', field: 'first_name last_name contact_first_name contact_last_name company_name', render: rowData =>{ if ((rowData.company_name.length === 0) || (rowData.company_name === "NA")) { return `${rowData.contact_first_name} ${rowData.contact_last_name} - ${rowData.company_name}` } 
        else { return `${rowData.first_name} ${rowData.last_name}` } } },
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
    const handleInventoryDetailsModalOpen = (data) => {
        inventory.forEach(element => {
            if (element.ticket === data) {
                console.log("condition",element);
                setInventoryDetailsModalData(element);
            }
        })
        setInventoryDetailsModalOpen(true);
        console.log("data", inventoryDetailsModalData);
        console.log(data);
    };
    const handleInventoryDetailsModalClose = () => {
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
        width: 500,
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
                                    <ModalDiv>
                                        <ModalLabel>
                                            Address:  
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.street_address}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            City:  
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.city}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Country: 
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.country}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Province: 
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.province}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Postal code:  
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.postal_code}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Deal Type:  
                                        </ModalLabel>
                                        <ModalInput>
                                        {modalData.deal_type}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Province: 
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.province}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Deal Status:  
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.deal_status}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Delivery timestamp: 
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.delivery_timestamp} 
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Driver license:
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.driver_lic}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Driver license expiry:
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.driver_lic_expiry}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Fax: 
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.fax}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            MVDA No:
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.mvda_no}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            RIN: 
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.rin}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Sales date:
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.sales_date}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Sales report No: 
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.sales_report_no}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Tax No: 
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.tax_no}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Year end: 
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.year_end}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Company name: 
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.company_name}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Contact first name: 
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.contact_first_name}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>
                                            Contact last name:
                                        </ModalLabel>
                                        <ModalInput>
                                            {modalData.contact_last_name}
                                        </ModalInput>
                                    </ModalDiv>
                                    <ModalDiv>
                                        <ModalLabel>Additional information</ModalLabel>
                                        <ModalInput>{modalData.additional_info}</ModalInput>
                                    </ModalDiv>
                                </Typography>
                            </Box>
                        </Fade>
                    </Modal>
            </SalesBodyTables>
            <Cube customLoading={loading} timeout={2000}></Cube>
        </SalesBody>
    )
}
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
