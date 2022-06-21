import MaterialTable, { MTableToolbar } from 'material-table';
import React, { useState } from 'react'
import { OptionsButton } from '../Inventory/styles';
import { LeadsBody } from './styles'

const Leads = () => {
    const [filtering, setFiltering] = useState(false);
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
    return (
        <LeadsBody>
             <MaterialTable
                    title="Leads requests"
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
                            <OptionsButton onClick={() => {setFiltering(!filtering)}} >Filtering</OptionsButton>
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
                ></MaterialTable>
        </LeadsBody>
    )
}

export default Leads
