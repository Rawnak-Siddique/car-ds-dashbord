import React from 'react'
import { IoClose } from "react-icons/io5";
import { PopUpInventoryBox, PopUpInventoryCloseButton, PopUpInventoryContainer } from './style';

const PopUpInventory = (props) => {
    return (props.trigger ) ? (
        <PopUpInventoryContainer>
            <PopUpInventoryBox>
                <h1>Pop up</h1>
                <PopUpInventoryCloseButton ><IoClose /></PopUpInventoryCloseButton>
                {props.children}
            </PopUpInventoryBox>
        </PopUpInventoryContainer>
    ) : "";
}

export default PopUpInventory
