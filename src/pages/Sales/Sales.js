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
        { title: 'Name', field: 'first_name last_name', render: rowData => <>{rowData.first_name} {rowData.last_name}</>},
        { title: 'Mobile', field: 'mobile' },
        { title: 'Email', field: 'email' },
        { title: 'Vehicle', field: 'inventory', render: rowData => <Button variant="outlined" color="primary" onClick={() => handleViewDetailsModalOpen(rowData.inventory)}>Show</Button>},
        { title: 'Approved by', field: 'approved_by' },
        { title: 'Salesperson', field: 'sales_person' },
        { title: 'Details', field: 'additional_info company_name contact_first_name contact_last_name street_address city country province postal_code  deal_type deal_status delivery_timestamp driver_lic driver_lic_expiry fax mvda_no rin sales_date sales_report_no tax_no year_end', render: rowData => <Button variant="outlined" color="primary" onClick={() => handleViewDetailsModalOpen( rowData.additional_info, rowData.company_name, rowData.contact_first_name, rowData.contact_last_name, rowData.street_address, rowData.city, rowData.country, rowData.province, rowData.postal_code, rowData.deal_type, rowData.deal_status, rowData.delivery_timestamp, rowData.driver_lic, rowData.driver_lic_expiry, rowData.fax, rowData.mvda_no, rowData.rin, rowData.sales_date, rowData.sales_report_no, rowData.tax_no, rowData.year_end )} >View</Button>},
    ];
    const [viewDetailsModalOpen, setViewDetailsModalOpen] = useState(false);
    const [modalData, setModalData] = useState('');
    const handleViewDetailsModalOpen = (data) => {
        setModalData(data);
        setViewDetailsModalOpen(true);
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
                                <Typography id='transition-modal-description' sx={{ mt: 2 }}>{modalData}</Typography>
                            </Box>
                        </Fade>
                    </Modal>
            </SalesBodyTables>
            <Cube customLoading={loading} timeout={2000}></Cube>
        </SalesBody>
    )
}

export default Sales
