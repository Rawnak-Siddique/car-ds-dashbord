import MaterialTable from 'material-table';
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { LeadsBody, LeadsHeader } from './styles'
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import useLeads from '../../hooks/useLeads';
import { DateTime } from 'luxon';

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
    tableData: {
        color: 'white',
        backgroundColor: '#BFBFBF',
        '&:hover': {
            background: '#BFBFBF',
        },
    },
}));
const Leads = () => {
    const classes = useStyles();
    const [columns, setColumns] = useState([
        {  title: 'First Name', field: 'first_name' },
        {  title: 'Last Name', field: 'last_name' },
        {  title: 'Phone', field: 'phone' },
        {  title: 'Email', field: 'email' },
        {  title: 'Source', field: 'lead_source' },
        {  title: 'Status', field: 'lead_status' },
        {  title: 'Assignee', field: 'assignee' },
        {  title: 'Creation Date', field: 'creation_date', render: rowData => <>{DateTime.fromISO(rowData.creation_date).toLocaleString()}</> },
        {  title: 'Modified Date', field: 'mod_date', render: rowData => <>{DateTime.fromISO(rowData.mod_date).toLocaleString()}</> },
        {  title: 'year', field: 'year' },
        {  title: 'Make', field: 'make' },
        {  title: 'Model', field: 'model' },
        {  title: 'Vin', field: 'vin' },
        {  title: 'stock number', field: 'stock_no' },
    ]);
    
    const navigate = useNavigate();
    const goToLeadsForm = () => {
        navigate('/leads-form');
    };
    const [leads] = useLeads();
    const getCarDetails = (id) => {
        
    }

    return (
        <LeadsBody>
            <LeadsHeader>
                <h1>Here are the leads that have generated</h1>
                <Button className={classes.button} variant='contained' color='primary' onClick={goToLeadsForm}>Add New Lead</Button>
            </LeadsHeader>
             <MaterialTable
                    title="Leads requests"
                    columns={columns}
                    data={leads}
                    options={{
                        search: true,
                        headerStyle: {
                            color: '#1C1BAC',
                        },
                        rowStyle: {
                            root: {
                                    "&:hover": {
                                    backgroundColor: "rgba(33, 150, 243, 0.5)"
                                }
                            },
                        },
                    }}
                    
                ></MaterialTable>
        </LeadsBody>
    )
}

export default Leads
