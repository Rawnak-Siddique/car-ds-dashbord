import styled from 'styled-components';

export const InventoryFormV2Body = styled.div`
    width: 100%;
    height: 95vh;
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
export const InventoryFormV2ImageSections = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    padding: 15px;
`;
export const InventoryFormV2ImageHolder = styled.div`
    width: 90%;
    height: 270px;
`;
export const InventoryFormV2ImageInput = styled.div`
    width: 10%;
    height: 270px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const InventoryFormV2DragAndDropSection = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    border-width: 2px;
    border-radius: 2px;
    border-style: dashed;
    background-color: #fafafa;
    color: #bdbdbd;
    outline: none;
`;
export const InventoryFormV2DragAndDropImage = styled.div`
    width: 100%;
    height: 230px;
    background-color: #bdbdbd;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
    align-items: center;
    justify-content: center;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const InventoryFormV2DragAndDropImageHolder = styled.img`
    width: 200px;
    height: 200px;
    margin: 10px;
    object-fit: contain;
`;
export const InventoryFormV2ImageInputButton = styled.button`
    width: 100px;
    height: 30px;
    color: #fafafa;
    background-color: #2196F3;
    border-radius: 20%;
    border: none;
    box-Shadow: 1px 3px 5px 2px rgba(33, 203, 243, .5);
`;
export const InventoryFormV2InputSection = styled.div`
    width: 100%;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;
export const InventoryFormV2InputsLabel = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    padding-left: 20px;
`;
export const InventoryFormV2InputsValue = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
`;
export const InventoryFormV2Button = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const InventoryFormV2TextAreaSection = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;
export const InventoryFormV2TextAreaLabel = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    padding-left: 20px;
`;
export const InventoryFormV2TextAreaValue = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px;
`;
export const InventoryFormV2TextArea = styled.textarea`
    width: 500px;
    height: 200px;
    border-radius: 10px;
    padding: 10px;
`;