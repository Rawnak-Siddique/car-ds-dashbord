import MaterialTable from 'material-table';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { LeadsBody, LeadsHeader } from './styles'
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    button: {
        background: '#2196F3',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '150px',
        height: '40px',
        borderRadius: '12px',
        border: 'none',
    },
}));
const Leads = () => {
    const classes = useStyles();
    const [columns, setColumns] = useState([
        {  title: 'First Name', field: 'first-name' },
        {  title: 'Last Name', field: 'last-name' },
        {  title: 'Phone', field: 'phone' },
        {  title: 'Email', field: 'email' },
        {  title: 'Source', field: 'source' },
        {  title: 'Status', field: 'status' },
        {  title: 'Assignee', field: 'assignee' },
        {  title: 'Creation Date', field: 'creation-date' },
        {  title: 'Modified Date', field: 'modified-date' },
        {  title: 'year', field: 'year' },
        {  title: 'Make', field: 'make' },
        {  title: 'Model', field: 'model' },
        {  title: 'Vin', field: 'vinNumber' },
        {  title: 'stock number', field: 'stock' },
    ]);
    const [data, setData] = useState([
        {
            name: 'Leads 1',
        },
    ]);
    const navigate = useNavigate();
    const goToLeadsForm = () => {
        navigate('/leads-form');
    };
    return (
        <LeadsBody>
            <LeadsHeader>
                <h1>Here are the leads that have generated</h1>
                <Button className={classes.button} variant='contained' color='primary' onClick={goToLeadsForm}>Add New Lead</Button>
            </LeadsHeader>
             <MaterialTable
                    title="Leads requests"
                    columns={columns}
                    data={data}
                    options={{
                        search: true,
                    }}
                    
                ></MaterialTable>
        </LeadsBody>
    )
}

export default Leads
