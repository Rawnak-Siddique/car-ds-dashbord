import styled from "styled-components";

export const IBody = styled.div`
    width: 100%;
    height: 95vh;
    padding: 5px;
    margin: 5px;
    margin-left: 15px;
    overflow: scroll;

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
    background: ${({ theme }) => ( theme.primary)};
    color: white;
    font-weight: bold;
    cursor: pointer;
    width: 150px;
    height: 30px;
    border-radius: 11px;
    border: none;
`;
export const InventoryTables = styled.div`
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
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
  height: 80px;
  white-space:nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    white-space: pre-wrap;
    overflow: scroll;
  }
  
`;
export const OptionsButton = styled.button`
  background : ${({ theme }) => theme.primary};
  color: white;
  cursor: pointer;
  width: 100px;
  height: 30px;
  border-radius: 11px;
  border: none;
  margin: 10px;
`;
export const IMG = styled.img`
  width: 160px;
  height: 100px;
  object-fit: contain;
`;