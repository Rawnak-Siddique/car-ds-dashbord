import MaterialTable, { MTableToolbar } from 'material-table';
import React, { useState } from 'react'
import { OptionsButton } from '../Inventory/styles';
import { SalesBody } from './styles'

const Sales = () => {
    const [filtering, setFiltering] = useState(false);
    const [columns, setColumns] = useState([
        {  title: 'Leads', field: 'name' },
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
