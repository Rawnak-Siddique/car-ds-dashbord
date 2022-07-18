import React, { useState } from 'react'
import { CustomerBody, CustomerHeader, CustomerTables } from './styles'
import { useNavigate } from "react-router-dom";
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
const Customer = () => {
    const classes = useStyles();
    const [columns, setColumns] = useState([
        { title: 'Company Name', field:'company-name'},
        { title: 'first Name', field:'first-name'},
        { title: 'Last Name', field:'last-name'},
        { title: 'Phone Number', field:'phone-number'},
        { title: 'Email', field:'email'},
        { title: 'City', field:'city'},
        { title: 'Fax', field:'fax'},
        { title: 'Mobile Number', field:'mobile-number'},
        { title: 'Province', field:'province'},
        { title: 'Country', field:'country'},
        { title: 'Postal Code', field:'postal-code'},
        { title: 'Creation Date', field:'creation-date'},
    ]);
    const [data, setData] = useState([
        { name: 'Customer' },
    ]);
    const navigate = useNavigate();
    const goToSalesForm = () => {
        navigate('/sales-form');
    }
    return (
        <CustomerBody>
            <CustomerHeader>
                <h1>customer section</h1>
                <Button className={classes.button} variant='contained' color='primary' onClick={goToSalesForm}>Add sales</Button>
            </CustomerHeader>
            <CustomerTables>
                <MaterialTable
            title="Inventory"
            columns={columns}
            data={data}
            options={{
                search: true,
            }}
            />
        </CustomerTables>
        </CustomerBody>
    )
}

export default Customer
