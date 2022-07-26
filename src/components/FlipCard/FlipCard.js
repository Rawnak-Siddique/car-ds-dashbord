import { Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip'
import { FlipCardBodyBack, FlipCardBodyBackButton, FlipCardBodyBackHeader, FlipCardBodyBackSections, FlipCardBodyFront, FlipCardBodyFrontButton, FlipCardBodyFrontHeader, FlipCardBodyFrontSections } from './style'

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlipped = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
            <FlipCardBodyFront >
                <FlipCardBodyFrontHeader>
                    <h1>
                        Appointment Date: date
                        Appointment Time: time
                        Customers Name: First Name Last Name
                    </h1>
                </FlipCardBodyFrontHeader>
                <FlipCardBodyFrontSections>
                    <p style={{
                        height: '25px',
                        borderBottom: '1px solid grey',
                    }}>
                        Customers Email: Email
                    </p>
                    <p style={{
                        height: '25px',
                        borderBottom: '1px solid grey',
                    }}>
                        Customer Phone: Phone
                    </p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, repellendus ut voluptatem animi neque aliquid dolorum? Voluptatem voluptatibus, odio et quisquam quidem, quisquam quisquam quisquam.
                    </p>
                </FlipCardBodyFrontSections>
                <FlipCardBodyFrontButton>
                    <Button onClick={handleFlipped} variant="contained" size="medium" color="primary" >Read More</Button>
                </FlipCardBodyFrontButton>
            </FlipCardBodyFront>

            <FlipCardBodyBack >
                <FlipCardBodyBackHeader>
                    <h1>
                        Car name: car

                    </h1>
                </FlipCardBodyBackHeader>
                <FlipCardBodyBackSections>
                    <p>
                        car details
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, repellendus ut voluptatem animi neque aliquid dolorum? Voluptatem voluptatibus, odio et, ducimus sint quia fugiat consectetur autem atque nihil, dolorem quasi.
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
