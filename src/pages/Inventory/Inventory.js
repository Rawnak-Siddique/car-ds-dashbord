import React from 'react';
import { IBody, InventoryButton, InventoryHeader, InventoryTables } from './styles';
import MaterialTable from "material-table";

const Inventory = () => {
  return (
    <div>
      <IBody>
        <InventoryHeader>
            <h1>Look at your inventory</h1>
            <InventoryButton>Add inventory</InventoryButton>
        </InventoryHeader>
        <InventoryTables>
            <h1>table</h1>
            <MaterialTable
          columns={[
            { title: "Adı", field: "name" },
            { title: "Soyadı", field: "surname" },
            { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity",
              lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              name: "Mehmet",
              surname: "Baran",
              birthYear: 1987,
              birthCity: 63,
            },
          ]}
          title="Demo Title"
        />
        </InventoryTables>

      </IBody>
    </div>
  );
}

export default Inventory;
