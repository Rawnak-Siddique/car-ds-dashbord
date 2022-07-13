import styled from "styled-components";

export const PopUpInventoryContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
   
`;
export const PopUpInventoryBox = styled.div`
    position: absolute;
    padding: 20px;
    width: 500px;
    height: 500px;
    background-color: whitesmoke;
    border-radius: 10px;
    
`;
export const PopUpInventoryCloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    border-radius: 10px;
    background: rgba(255,12,9,0.52);
    color: white;
    font-size: 20px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;  
`;