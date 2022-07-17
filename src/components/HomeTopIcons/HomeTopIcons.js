import React from 'react'
import { HomeTopIcon, HomeTopIconsBody, HomeTopIconsHeader, HomeTopIconsNumber, HomeTopIconsPic } from './styles'

const HomeTopIcons = ({ Header, Icon, Amount, color }) => {
    return (
        <HomeTopIconsBody style={{
            border: `2px solid ${color}`,
        }}>
            <HomeTopIconsHeader>{Header}</HomeTopIconsHeader>
            <HomeTopIconsPic>
                <HomeTopIcon style={{
                    backgroundColor: `${color}50`,
                    color: `${color}`,
                }}>
                    {Icon}
                </HomeTopIcon>
            </HomeTopIconsPic>
            <HomeTopIconsNumber>{Amount}</HomeTopIconsNumber>
        </HomeTopIconsBody>
    )
}

export default HomeTopIcons
