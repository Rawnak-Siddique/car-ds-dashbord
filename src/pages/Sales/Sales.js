import { makeStyles } from '@material-ui/core';
import { Button } from '@mui/material';
import MaterialTable from 'material-table';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SalesBody, SalesBodyHeader, SalesBodyTables } from './styles'

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
    const [columns, setColumns] = useState([
        { title: 'First Name', field: 'first-name' },
        { title: 'Last Name', field: 'last-name' },
        { title: 'Phone', field: 'phone' },
        { title: 'Mobile', field: 'mobile' },
        { title: 'Email', field: 'email' },
        { title: 'vinNumber', field: 'vin-number' },
        { title: 'Stock ', field: 'stock' },
        { title: 'OdoMeter', field: 'odoMeter' },
        { title: 'Type', field: 'type' },
        { title: 'Date', field: 'date' },
        { title: 'RL or WHL', field: 'rl-whl' },
        { title: 'Status', field: 'status' },
        { title: 'Approved by', field: 'approvedBy' },
        { title: 'SalesPerson', field: 'salesPerson' },
        { title: 'Creation Date', field: 'creationDate' },
        { title: 'Modified Date', field: 'modifiedDate' },
    ]);
    const [data, setData] = useState([
        {
            name: 'Leads 1',
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
            </SalesBodyTables>
            
        </SalesBody>
    )
}

export default Sales
