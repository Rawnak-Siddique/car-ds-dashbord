import React from 'react';
import { HomeLastEventsBody, HomeLastEventsBodyHeader, HomeLastEventsBodySectionList, HomeLastEventsBodySectionListLabel, HomeLastEventsBodySectionListValue, HomeLastEventsBodySections } from './styles';

const HomeLastEvents = ({ Header, seventhTH, thirtyTh, ninetyTH }) => {
  return (
    <HomeLastEventsBody>
      <HomeLastEventsBodyHeader>{Header} Received</HomeLastEventsBodyHeader>
      <HomeLastEventsBodySections>
        <HomeLastEventsBodySectionList>
            <HomeLastEventsBodySectionListLabel>
                Last 7 days
            </HomeLastEventsBodySectionListLabel>
            <HomeLastEventsBodySectionListValue>
                {seventhTH}
            </HomeLastEventsBodySectionListValue>
        </HomeLastEventsBodySectionList>
        <HomeLastEventsBodySectionList>
            <HomeLastEventsBodySectionListLabel>
                Last 30 days
            </HomeLastEventsBodySectionListLabel>
            <HomeLastEventsBodySectionListValue>
                {thirtyTh}
            </HomeLastEventsBodySectionListValue>
        </HomeLastEventsBodySectionList>
        <HomeLastEventsBodySectionList>
            <HomeLastEventsBodySectionListLabel>
                Last 90 days
            </HomeLastEventsBodySectionListLabel>
            <HomeLastEventsBodySectionListValue>
                {ninetyTH}
            </HomeLastEventsBodySectionListValue>
        </HomeLastEventsBodySectionList>
      </HomeLastEventsBodySections>
    </HomeLastEventsBody>
  );
}

export default HomeLastEvents;
