import React, { useState } from 'react'
import { CustomerBody, CustomerHeader, CustomerHeaderButton, CustomerTables } from './styles'
import { useNavigate } from "react-router-dom";
import MaterialTable from 'material-table';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useCustomers from '../../hooks/useCustomers';
import { DateTime } from 'luxon';

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
    const [customers] = useCustomers();
    const [columns, setColumns] = useState([
        { title: 'Company', field:'company_name'},
        { title: 'Name', field:'name' , render: rowData => <>{rowData.first_name === "" || "NA" ? rowData.contact_first_name : rowData.first_name} {rowData.last_name === "" || "NA" ? rowData.contact_last_name : rowData.last_name}</>},
        { title: 'Phone', field:'phone'},
        { title: 'Email', field:'email'},
        { title: 'City', field:'city'},
        { title: 'Fax', field:'fax'},
        { title: 'Mobile', field:'mobile'},
        { title: 'Province', field:'province'},
        { title: 'Country', field:'country'},
        { title: 'Postal Code', field:'postal_code'},
        { title: 'Created on', field:'creation_date', render: rowData => <>{DateTime.fromISO(rowData.creation_date).toLocaleString()}</>},
    ]);
    const navigate = useNavigate();
    const gotoCustomerForm = () => {
        navigate('/add-customer');
    }
    return (
        <CustomerBody>
            <CustomerHeader>
                <h2 className='text-2xl font-semibold'>Customers</h2>
                <CustomerHeaderButton>
                <Button className={classes.button} onClick={gotoCustomerForm}>Add Customer</Button>
                </CustomerHeaderButton>
            </CustomerHeader>
            <CustomerTables>
                <MaterialTable
            title="List of Customers"
            columns={columns}
            data={customers}
            options={{
                search: true,
                headerStyle: {
                            color: '#1C1BAC',
                },
                cellStyle: { 
                    padding: '4px',
                },
            }}
            />
        </CustomerTables>
        </CustomerBody>
    )
}

export default Customer
