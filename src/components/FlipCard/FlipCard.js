import { Button } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
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
                        Here are the bookings/appointments for the cars test driver webkit  wdadad d
                    </h1>
                </FlipCardBodyFrontHeader>
                <FlipCardBodyFrontSections>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, repellendus ut voluptatem animi neque aliquid dolorum? Voluptatem voluptatibus, odio et, ducimus sint quia fugiat consectetur autem atque nihil, dolorem quasi.
                    </p>
                </FlipCardBodyFrontSections>
                <FlipCardBodyFrontButton>
                    <Button onClick={handleFlipped} variant="contained" size="medium" color="primary" >Read More</Button>
                </FlipCardBodyFrontButton>
            </FlipCardBodyFront>
            <FlipCardBodyBack >
                <FlipCardBodyBackHeader>
                    <h1>
                        Here are the bookings/appointments for the cars test driver webkit  wdadad d
                    </h1>
                </FlipCardBodyBackHeader>
                <FlipCardBodyBackSections>
                    <p>
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
