import React, { useState } from 'react'
import { CustomerBody, CustomerButton, CustomerHeader, CustomerTables } from './styles'
import { useNavigate } from "react-router-dom";
import MaterialTable, { MTableToolbar } from 'material-table';
import { Button } from '@material-ui/core';

const Customer = () => {
    const [filtering, setFiltering] = useState(false);
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
                <CustomerButton onClick={goToSalesForm}>Add sales</CustomerButton>
            </CustomerHeader>
            <CustomerTables>
                <MaterialTable
            title="Inventory"
            columns={columns}
            data={data}
            options={{
                filtering: filtering,
                search: true,
                selection: true,
            }}
            components={{
                Toolbar: props => (
                <div>
                    <MTableToolbar {...props} />
                    <div>
                    <Button onClick={() => {setFiltering(!filtering)}} >Filtering</Button>
                    </div>
                </div>
                )
            }}
            editable={{  
                onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);

                    resolve();
                    }, 1000)
                }),
                onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                    setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
                    
                    resolve()
                    }, 1000)
                }),
            }}
            />
        </CustomerTables>
        </CustomerBody>
    )
}

export default Customer
