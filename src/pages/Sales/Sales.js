import { Backdrop, Box, Fade, makeStyles, Modal, Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SalesBody, SalesBodyHeader, SalesBodyTables } from './styles';
import { Cube } from 'react-preloaders2';
import useSales from '../../hooks/useSales';

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
    console.log(sales);
    const columns = [
        { title: 'Name', field: 'first_name last_name', render: rowData => <>{`${rowData.first_name} ${rowData.last_name}`}</>},
        { title: 'Mobile', field: 'mobile' },
        { title: 'Email', field: 'email' },
        { title: 'Vehicle', field: 'inventory', render: rowData => <Button variant="outlined" color="primary" onClick={() => handleViewDetailsModalOpen(rowData.inventory)}>Show</Button>},
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
        width: 400,
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
                                    Address: {modalData.street_address}<br></br>
                                    City: {modalData.city}<br></br>
                                    Country: {modalData.country}<br></br>
                                    Province: {modalData.province}<br></br>
                                    Postal code: {modalData.postal_code}<br></br>
                                    Deal Type: {modalData.deal_type}<br></br>
                                    Deal Status: {modalData.deal_status}<br></br>
                                    Delivery timestamp: {modalData.delivery_timestamp}<br></br>
                                    Driver license: {modalData.driver_lic}<br></br>
                                    Driver license expiry: {modalData.driver_lic_expiry}<br></br>
                                    Fax: {modalData.fax}<br></br>
                                    MVDA No: {modalData.mvda_no}<br></br>
                                    RIN: {modalData.rin}<br></br>
                                    Sales date: {modalData.sales_date}<br></br>
                                    Sales report No: {modalData.sales_report_no}<br></br>
                                    Tax No: {modalData.tax_no}<br></br>
                                    Year end: {modalData.year_end}<br></br>
                                    Company name: {modalData.company_name}<br></br>
                                    Contact first name: {modalData.contact_first_name}<br></br>
                                    Contact last name: {modalData.contact_last_name}<br></br>
                                </Typography>
                            </Box>
                        </Fade>
                    </Modal>
            </SalesBodyTables>
            <Cube customLoading={loading} timeout={2000}></Cube>
        </SalesBody>
    )
}

export default Sales
