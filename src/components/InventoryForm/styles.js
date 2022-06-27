import styled from "styled-components";

export const InventoryFormBody = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5px;
    margin: 5px;
    margin-left: 15px;
   position: relative;
   
`;
export const InventoryFormBodySection = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const InventoryFormImage = styled.div`
    width: 100%;
    height: 410px;
    padding: 5px;
    display: flex;
`;
export const InventoryFormImageHolder = styled.img`
    width: 500px;
    height: 400px;
    object-fit: contain;
`;
export const InventoryFormImageUpload = styled.div`
    width: 100%;
    height: 400px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const InventoryFormSection = styled.div`
    width: 500px;
    height: 1500px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;