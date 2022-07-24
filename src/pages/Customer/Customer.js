import React, { useState } from 'react'
import { CustomerBody, CustomerHeader, CustomerHeaderButton, CustomerTables } from './styles'
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
        { title: 'Company Name', field:'company_name'},
        { title: 'first Name', field:'first_name'},
        { title: 'Last Name', field:'last_name'},
        { title: 'Phone Number', field:'phone_number'},
        { title: 'Email', field:'email'},
        { title: 'City', field:'city'},
        { title: 'Fax', field:'fax'},
        { title: 'Mobile Number', field:'mobile_number'},
        { title: 'Province', field:'province'},
        { title: 'Country', field:'country'},
        { title: 'Postal Code', field:'postal_code'},
        { title: 'Creation Date', field:'creation_date'},
    ]);
    const [data, setData] = useState([
        {
            id: 1,  
            company_name: 'Customer',
            first_name: 'Customer',
            last_name: 'Customer',
            email: 'Customer@example.com',
            phone_number: 'CustomerBody',
            last_name: 'Customer',
            city: 'Customer',
            country: 'Customer',
            postal_code: 'Customer',
            creation_date: 'Customer',
            province: 'Customer', 
            fax: 'Customer',
            mobile_number: 'CustomerBody',
        },
        {
            id: 2,
            first_name: 'Customer'},
        {
            id: 3, 
            last_name: 'Customer' },
        {
            id: 4, 
            email: 'Customer@example.com' },
        {
            id: 5, 
            phone_number: 'CustomerBody' },
    ]);
    const navigate = useNavigate();
    const goToSalesForm = () => {
        navigate('/reviews/0');
    }
    const gotoCustomerForm = () => {
        navigate('/add-customer');
    }
    const [selectedRow, setSelectedRow] = useState();
    return (
        <CustomerBody>
            <CustomerHeader>
                <h1>customer section</h1>
                <CustomerHeaderButton>
                <Button className={classes.button} onClick={gotoCustomerForm}>Add Customer</Button>
                <Button className={classes.button} variant='contained' color='primary' onClick={goToSalesForm}>Add Review</Button>
                </CustomerHeaderButton>
            </CustomerHeader>
            <CustomerTables>
                <MaterialTable
            title="Inventory"
            columns={columns}
            data={data}
            onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
            options={{
                search: true,
                headerStyle: {
                            color: '#1C1BAC',
                        },
                rowStyle: rowData => ({
                          backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
                        })
            }}
            />
        </CustomerTables>
        </CustomerBody>
    )
}

export default Customer
