import MaterialTable from 'material-table'
import React from 'react'
import { VendorsBody, VendorsButton, VendorsHeader } from './styles'
import { useNavigate } from "react-router-dom";

const Vendors = () => {
    const columns = [
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
    ];
    const data = [
        {
            name: 'Vendors 1',
        },
    ];
    const navigate = useNavigate();
    const goToVendorsForm = () => {
        navigate('/vendors-form');
    };
    return (
        <VendorsBody>
            <VendorsHeader>
                <h1>List of Employees</h1>
                <VendorsButton onClick={goToVendorsForm}>Add Vendor</VendorsButton>
            </VendorsHeader>
            <MaterialTable
                    title="Vendors list"
                    columns={columns}
                    data={data}
                    options={{
                        search: true,
                        headerStyle: {
                            color: '#1C1BAC',
                        },  
                    }}
                ></MaterialTable>
        </VendorsBody>
    )
}

export default Vendors
