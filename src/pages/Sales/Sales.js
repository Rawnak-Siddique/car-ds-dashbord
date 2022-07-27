import { Backdrop, Box, Fade, makeStyles, Modal, Typography } from '@material-ui/core';
import { Button } from '@mui/material';
import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SalesBody, SalesBodyHeader, SalesBodyTables } from './styles';
import { Cube } from 'react-preloaders2';

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
    modalStyle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    },
  }));

const Sales = () => {
    const classes = useStyles();
    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'Mobile', field: 'mobile' },
        { title: 'Email', field: 'email' },
        { title: 'Approved by', field: 'approved_by' },
        { title: 'Salesperson', field: 'salesperson' },
        { title: 'View Details', field: 'view_details', render: rowData => <Button variant="outlined" color="primary" onClick={() => handleViewDetailsModalOpen(rowData.details)}>View Details</Button>},
    ]);
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
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Leads 1',
            mobile: '9876543210',
            email: '9876543210@gmail.com',
            approved_by: 'Admin',
            salesperson: 'Admin',
            details: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 2,
            name: 'Leads 2',
            mobile: '9876543210',
            email: '9876543210@gmail.com',
            approved_by: 'Admin',
            salesperson: 'Admin',
            details: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 3,
            name: 'Leads 3',
            mobile: '9876543210',
            email: '9876543210@gmail.com',
            approved_by: 'Admin',
            salesperson: 'Admin',
            details: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 4,
            name: 'Leads 4',
            mobile: '9876543210',
            email: '9876543210@gmail.com',
            approved_by: 'Admin',
            salesperson: 'Admin',
            details: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 5,
            name: 'Leads 5',
            mobile: '9876543210',
            email: '9876543210@gmail.com',
            approved_by: 'Admin',
            salesperson: 'Admin',
            details: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: 6,
            name: 'Leads 6',
            mobile: '9876543210',
            email: '9876543210@gmail.com',
            approved_by: 'Admin',
            salesperson: 'Admin',
            details: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ]);
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
                    data={data}
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
                            <Box sx={classes.modalStyle}>
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
