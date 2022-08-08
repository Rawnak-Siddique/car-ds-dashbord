import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, makeStyles, Menu } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MdMoreHoriz } from 'react-icons/md';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import { SERVER_URL } from '../../variables/variables';
import MaxWidthDialog from '../../fragments/MaxWidthDialog';

const useStyles = makeStyles(() => ({
    edit: {
        '&:hover': {
            background: '#2196F3',
        }
    },
    /* A css class that is used to change the background color of the delete button when the mouse is
    over it. */
    delete: {
        '&:hover': {
            background: '#f62424',
        }
    },
}))

const EditPopover = ({ data }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const ITEM_HEIGHT = 48;
    const navigate = useNavigate();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDialogClickOpen = () => {
        setOpen(true);
    };

    const handleDialogClose = (v) => {
        if (v) {
            axios.delete(SERVER_URL + '/incoming/delete', {
                headers: {
                    Authorization: ''
                },
                data: {
                    ticket: data.ticket
                }
            })
                .then(response => {
                    if (response.data.submit_status === 'success') {
                        console.log(response);
                        window.location.reload();
                    }
                    else {
                        alert('Server: Delete Failed. Contact Administrator');
                    }
                })
        }
        setOpen(false);
    };


    // Max Width Dialog Pre-Sets

    const [mwdOpen, setMWDOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('xl');

    const handleMWDOpen = () => {
        setMWDOpen(true);
    };

    const handleMWDClose = () => {
        setMWDOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={Boolean(anchorEl) ? 'long-menu' : undefined}
                aria-expanded={Boolean(anchorEl) ? 'true' : undefined}
                aria-haspopup="true"
                onClick={(event) => setAnchorEl(event.currentTarget)}
            >
                <MdMoreHoriz />
            </IconButton>
            <Menu
                /* A prop that is used to set the anchor element. */
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                /* A prop that is used to set the anchor element. */
                anchorEl={anchorEl}
                /* A boolean value that is used to check if the menu is open or not. */
                open={Boolean(anchorEl)}
                /* A function that is closing the menu. */
                onClose={() => setAnchorEl(null)}
                /* Setting the width and height of the menu. */
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '15ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem /* A unique identifier for the option. */
                        key={option.label} /* Checking if the option is edit or delete and returning the
          class. */
                        selected={option === 'Pyxis'} /* A function that is checking if
          the option is edit or delete
          and returning the class. */
                        className={() => {
                            /* Checking if the option is edit or delete and returning the class. */
                            if (option.class === 'edit') {
                                return classes.edit;
                            } else if (option.class === 'delete') {
                                return classes.delete;
                            } else if (option.class === 'sold') {
                                return classes.sold;
                            }
                        }} /* A function that is checking if the option is edit or delete and returning the class. */
                        onClick={() => {
                            // you have to test which one will work
                            // or this one below
                            /* Checking if the option is edit or delete and returning the class. */
                            if (option.click === 'Edit') {
                                navigate(`/inventory-form/edit/${data.ticket}`);
                            } else if (option.click === 'Delete') {
                                // navigate(`/inventory-form/delete/${data.ticket}`);
                                setAnchorEl(null)
                                handleDialogClickOpen();
                            } else if (option.click === 'Sold') {
                                setAnchorEl(null)
                                handleMWDOpen();
                            }
                        }}>
                        {/* Rendering the label of the option. */}
                        {option.label}
                    </MenuItem>
                ))}
            </Menu>
            <Dialog
                open={open}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Any and every data related to this Vehicle Entry will be deleted and be removed from the website as well
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleDialogClose(false)}>Go Back</Button>
                    <Button onClick={() => handleDialogClose(true)} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
            <MaxWidthDialog handleClickOpen={handleMWDOpen} fullWidth={fullWidth} maxWidth={maxWidth} open={mwdOpen} handleClose={handleMWDClose} handleMaxWidthChange={handleMaxWidthChange} handleFullWidthChange={handleFullWidthChange}></MaxWidthDialog>
        </div>
    );
};

const options = [
    {
        label: 'Edit',
        click: 'Edit',
        class: 'edit',
        id: 55,
    },
    // {
    //     label: 'Mark as Sold',
    //     click: 'Sold',
    //     class: 'sold',
    //     id: 55,
    // },
    {
        label: 'Delete',
        click: 'Delete',
        class: 'delete',
        id: 55,
    },
];

export default EditPopover;