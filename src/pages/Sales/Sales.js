import MaterialTable, { MTableToolbar } from 'material-table';
import React, { useState } from 'react'
import { OptionsButton } from '../Inventory/styles';
import { SalesBody } from './styles'

const Sales = () => {
    const [filtering, setFiltering] = useState(false);
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
    return (
        <SalesBody>
            <MaterialTable
                    title="Sales history"
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
        </SalesBody>
    )
}

export default Sales
