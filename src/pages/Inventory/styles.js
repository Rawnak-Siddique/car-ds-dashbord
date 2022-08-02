import styled from "styled-components";

export const IBody = styled.div`
    width: 100%;
    height: 94vh;
    padding: 5px;
    margin: 5px;
    margin-left: 15px;
    overflow: scroll;
    border-radius: 15px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.primary)};
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }

`;
export const InventoryHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
`;
export const InventoryButton = styled.button`
    //background: ${({ theme }) => ( theme.primary)};
    background-color: #2196F3;
    color: white;
    font-weight: bold;
    cursor: pointer;
    width: 150px;
    height: 30px;
    border-radius: 11px;
    border: none;
`;
export const InventoryTables = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? theme.bg2 : theme.primary)};
    color: inherit;
    width: 100%;
    height: calc(100% - 45px);
    padding: 10px;
    overflow: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    ::-moz-scrollbar {
    display: none;
    }
`;
export const DetailDescription = styled.p`
  width: 200px;
  height: 50px;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    white-space: pre-wrap;
    overflow: scroll;
  }
  
`;

export const editButton = styled.button`
  
`;

export const IMG = styled.img`
  width: 160px;
  height: 100px;
  object-fit: contain;
`;