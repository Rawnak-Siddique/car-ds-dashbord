import styled from "styled-components";

export const InventoryFormEditBody = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5px;
    overflow: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
    align-items: center;
`;
export const InventoryFormEditBodyImageSection = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    padding: 15px;
`;
export const InventoryFormEditBodyInputsSection = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;
export const InventoryFormEditBodyInputsLabel = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    padding-left: 20px;
`;
export const InventoryFormEditBodyInputsValue = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
`;
export const InventoryFormEditBodyTextAreaSection = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;
export const InventoryFormEditBodyTextAreaLabel = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    padding-left: 20px
`;
export const InventoryFormEditBodyTextAreaValue = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
`;
export const InventoryFormEditBodyTextArea = styled.textarea`
    width: 500px;
    height: 200px;
    border-radius: 10px;
    padding: 10px;
`;
export const InventoryFormEditBodyButton = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;