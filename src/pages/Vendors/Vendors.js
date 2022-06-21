import MaterialTable, { MTableToolbar } from 'material-table'
import React, { useState } from 'react'
import { OptionsButton } from '../Inventory/styles'
import { VendorsBody } from './styles'

const Vendors = () => {
    const [filtering, setFiltering] = useState(false);
    const [columns, setColumns] = useState([
        { title: 'Company Name', field: 'company-name' },
        { title: 'First Name', field: 'first-name' },
        { title: 'Last Name', field: 'last-name' },
        { title: 'Phone', field: 'phone' },
        { title: 'Email', field: 'email' },
        { title: 'City', field: 'city' },
        { title: 'Fax', field: 'fax' },
        { title: 'Mobile', field: 'mobile' },
        { title: 'Provinces', field: 'provinces' },
        { title: 'Country', field: 'country' },
        { title: 'Postal Code', field: 'postal-code' },
        { title: 'Creation Date', field: 'creation-date' },
    ]);
    const [data, setData] = useState([
        {
            name: 'Vendors 1',
        },
    ]);
    return (
        <VendorsBody>
            <MaterialTable
                    title="Vendors list"
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
        </VendorsBody>
    )
}

export default Vendors
