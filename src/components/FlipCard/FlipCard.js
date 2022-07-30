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
    const { timestamp, name, email, phone,  message, car, details } = data;
    const classes = useStyles();

    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlipped = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <FlipCardBodyFront >
                <FlipCardBodyFrontHeader>
                    {/* <h1>
                        Date: {timestamp ? timestamp : 'N/A'}
                    </h1> */}
                    <h1>
                        Time: {timestamp ? timestamp : 'N/A'} 
                        {/* Time  dekhaben HUGE FONTS Centered*/}
                    </h1>
                </FlipCardBodyFrontHeader>
                <FlipCardBodyFrontSections>
                <p style={{
                        height: '45px',
                    }}>
                        Customers Name: {name ? name : 'N/A'}
                    </p>
                    <p style={{
                        height: '25px',
                    }}>
                        Customers Email: {email ? email : 'No Email'}
                    </p>
                    <p style={{
                        height: '25px',
                    }}>
                        Customer Phone: {phone ? phone : 'N/A'}
                    </p>
                    <p>
                        {message ? message : 'No message'}
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
                        Car name: {car ? car : 'No car'}
                    </h1>
                </FlipCardBodyBackHeader>
                <FlipCardBodyBackSections>
                    <p>
                        {details ? details : 'No details available'}
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
