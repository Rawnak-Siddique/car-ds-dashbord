import styled from 'styled-components';

export const VendorsFormBody = styled.div`
    width: 100%;
    height: 100vh;
    padding: 5px;
    margin: 5px 5px 5px 5px;
    justify-content: center;
    align-items: center;
    
`;
export const VendorsFormSection = styled.div`
    width: 100%;
    height: 95vh;
    padding: 5px;
    margin: 5px 5px 5px 5px;
    justify-content: center;
    align-items: center;
    display: flex;
    
`;
export const VendorsFormPicture = styled.div`
    width: 600px;
    height: 95vh;
    padding: 5px;
    margin: 5px 5px 5px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const VendorsFormDate = styled.div`
    width: 600px;
    height: 95vh;
    padding: 10px;
    margin: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const VendorsFormPictureDiv = styled.div``;
export const VendorsFormPictureInput = styled.input``;
export const VendorsFormImageDiv = styled.div``;
export const VendorsFormImage = styled.img`
    width: 590px;
    height: 500px;
    padding: 10px;
    border: 1px solid #ccc;
    object-fit: contain;
    border-radius: 15px;
`;