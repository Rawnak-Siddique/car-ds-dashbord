import MaterialTable, { MTableToolbar } from 'material-table';
import React, { useState } from 'react'
import { SalesBody } from './styles'

const Sales = () => {
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
                        search: true,
                    }}
                ></MaterialTable>
        </SalesBody>
    )
}

export default Sales
