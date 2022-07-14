import styled from "styled-components";

export const InventoryFormBody = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5px;
    margin: 5px 5px 5px 15px;
    position: relative;
   
`;
export const InventoryFormBodySection = styled.div`
    width: 100%;
    height: 90vh;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
export const InventoryFormImage = styled.div`
    width: 600px;
    height: 90vh;
    padding: 5px;
    margin: 5px 15px 5px 5px;
    background-color: cadetblue;
    overflow: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const InventoryFormSection = styled.div`
    width: 600px;
    height: 90vh;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const InventoryFormImagePrimary = styled.div`
    width: 550px;
    height: 450px;
    background-color: cornsilk;
`;
export const InventoryFormImagePrimaryDiv = styled.div``;
export const InventoryFormImagePrimaryHolder = styled.div``;
export const InventoryFormImagePrimaryView = styled.img`
    width: 400px;
    height: 400px;
    padding: 10px;
    border: 1px solid #ccc;
    object-fit: contain;
    border-radius: 15px;
`;