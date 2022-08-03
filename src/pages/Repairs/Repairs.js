import { Button } from '@material-ui/core';
import MaterialTable, { MTableToolbar } from 'material-table'
import React, { useState } from 'react'
import { RepairsBody, RepairsTable } from './styles'

const Repairs = () => {
    const [filtering, setFiltering] = useState(false);
    const columns = [
        {  title: 'Repairs', field: 'name' },
    ];
    const [data, setData] = useState([
        {
            name: 'Repair 1',
        },
    ]);
    return (
        <RepairsBody>
            <RepairsTable>
                <MaterialTable
                    title="Repair requests"
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
                ></MaterialTable>
            </RepairsTable>
        </RepairsBody>
    )
}

export default Repairs
