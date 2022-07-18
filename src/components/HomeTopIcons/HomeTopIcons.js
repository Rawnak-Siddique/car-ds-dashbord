import React from 'react'
import { HomeTopIcon, HomeTopIconsBody, HomeTopIconsHeader, HomeTopIconsNumber, HomeTopIconsPic } from './styles'

const HomeTopIcons = ({ Header, Icon, Amount, color }) => {
    return (
        /* Setting the border color of the component. */
        <HomeTopIconsBody style={{
            border: `2px solid ${color}`,
        }}>
           { /* Rendering the Header prop. */}
            <HomeTopIconsHeader>{Header}</HomeTopIconsHeader>
            <HomeTopIconsPic>
               { /* Setting the background color and color of the icon. */}
                <HomeTopIcon style={{
                    backgroundColor: `${color}50`,
                    color: `${color}`,
                }}>
                    {Icon}
                </HomeTopIcon>
            </HomeTopIconsPic>
            {/* Rendering the Amount prop. */}
            <HomeTopIconsNumber>{Amount}</HomeTopIconsNumber>
        </HomeTopIconsBody>
    )
}

export default HomeTopIcons
