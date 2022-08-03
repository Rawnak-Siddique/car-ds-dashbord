import { Button, makeStyles } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FlipCardBodyBack, FlipCardBodyBackButton, FlipCardBodyBackHeader, FlipCardBodyBackSections, FlipCardBodyFront, FlipCardBodyFrontButton, FlipCardBodyFrontHeader, FlipCardBodyFrontSections } from './style'

const useStyles = makeStyles(() => ({
    button: {
      background: '#2196F3',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
      width: '150px',
      height: '40px',
      borderRadius: '12px',
      border: 'none',
      '&:hover': {
        background: '#2408F2',
      }
    },
  }));
const FlipCard = ({data}) => {
    const { appointment_date, book_from, contact_pref, creation_date, email, first_name, last_name, inventory, make, message, model, odometer, phone, year, requested_services } = data;
    const classes = useStyles();

    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlipped = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <FlipCardBodyFront >
                <FlipCardBodyFrontHeader>
                    <h1>
                        Time: {appointment_date ? appointment_date : 'N/A'} 
                        {/* Time  dekhaben HUGE FONTS Centered*/}
                    </h1>
                    <h1>
                        Day: {contact_pref ? contact_pref : 'N/A'}
                    </h1>                    
                </FlipCardBodyFrontHeader>
                <FlipCardBodyFrontSections>
                    <p className='font-bold' >
                        Service type:- <span className='font-light' >{book_from}</span>
                    </p>
                    <p className='font-bold' >
                        Customers Name:- <span className='font-light' >{first_name ? `${first_name} ${last_name}`: 'N/A'}</span>
                    </p>
                    <p className='font-bold' >
                        Customers Email:- <span className='font-light' >{email ? email : 'No Email'}</span>
                    </p>
                    <p className='font-bold' >
                        Customer Phone:- <span className='font-light' >{phone ? phone : 'N/A'}</span>
                    </p>
                    <p>
                        <span className='font-light' >{message ? message : 'No message'} <br />
                        {creation_date}</span>
                        {/* Message will go to backpart. Instead of messages - Card Name Make Model*/}
                    </p>
                </FlipCardBodyFrontSections>
                <FlipCardBodyFrontButton>
                    <Button onClick={handleFlipped} variant="contained" size="medium" className={classes.button} >Details</Button>
                </FlipCardBodyFrontButton>
            </FlipCardBodyFront>

            <FlipCardBodyBack >
                <FlipCardBodyBackHeader>
                    <h1>
                        Car name: {make ?`${make} ${model} ${year} ${odometer}` : 'No car'}
                    </h1>
                </FlipCardBodyBackHeader>
                <FlipCardBodyBackSections>
                    <p>
                        {inventory} <br />
                        {requested_services ? requested_services : 'No details available'}
                    </p>
                </FlipCardBodyBackSections>
                <FlipCardBodyBackButton>
                    <Button onClick={handleFlipped} variant="contained" size="medium" className={classes.button} >Summary</Button>
                </FlipCardBodyBackButton>
            </FlipCardBodyBack>
        </ReactCardFlip>
    )
}

export default FlipCard
