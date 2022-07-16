import React from 'react'
import { HomeTopIconsBody, HomeTopIconsHeader, HomeTopIconsNumber, HomeTopIconsPic } from './styles'

const HomeTopIcons = ({ Header, Icon, Amount}) => {
    return (
        <HomeTopIconsBody>
            <HomeTopIconsHeader>{Header}</HomeTopIconsHeader>
            <HomeTopIconsPic>{Icon}</HomeTopIconsPic>
            <HomeTopIconsNumber>{Amount}</HomeTopIconsNumber>
        </HomeTopIconsBody>
    )
}

export default HomeTopIcons
