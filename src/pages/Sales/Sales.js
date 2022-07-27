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
        { title: 'Name', value: 'name' },
        { title: 'Mobile', value: 'mobile' },
        { title: 'Email', value: 'email' },
        { title: 'Approved by', value: 'approved_by' },
        { title: 'Salesperson', value: 'salesperson' },
        { title: 'View Details', value: 'view_details' },
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
