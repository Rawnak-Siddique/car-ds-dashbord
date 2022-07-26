import { Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip'
import { FlipCardBodyBack, FlipCardBodyBackButton, FlipCardBodyBackHeader, FlipCardBodyBackSections, FlipCardBodyFront, FlipCardBodyFrontButton, FlipCardBodyFrontHeader, FlipCardBodyFrontSections } from './style'

const FlipCard = ({ date, time, name, email, phone,  message, car, carDetails }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlipped = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <FlipCardBodyFront >
                <FlipCardBodyFrontHeader>
                    <h1>
                        Date: {date ? date : 'N/A'}
                    </h1>
                    <h1>
                        Time: {time ? time : 'N/A'}
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
                        
                    </p>
                </FlipCardBodyFrontSections>
                <FlipCardBodyFrontButton>
                    <Button onClick={handleFlipped} variant="contained" size="medium" color="primary" >Read More</Button>
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
                        {carDetails ? carDetails : 'No details available'}
                    </p>
                </FlipCardBodyBackSections>
                <FlipCardBodyBackButton>
                    <Button onClick={handleFlipped} variant="contained" size="medium" color="primary" >Read More</Button>
                </FlipCardBodyBackButton>
            </FlipCardBodyBack>
        </ReactCardFlip>
    )
}

export default FlipCard
