import React from 'react';
import { HomeLastEventsBody, HomeLastEventsBodyHeader, HomeLastEventsBodySectionList, HomeLastEventsBodySectionListLabel, HomeLastEventsBodySectionListValue, HomeLastEventsBodySections } from './styles';

const HomeLastEvents = ({ Header, seventhTH, thirtyTh, ninetyTH }) => {
  return (
    <HomeLastEventsBody>
      {/* A prop that is being passed in from the parent component. */}
      <HomeLastEventsBodyHeader>{Header} Received</HomeLastEventsBodyHeader>
      <HomeLastEventsBodySections>
        <HomeLastEventsBodySectionList>
            <HomeLastEventsBodySectionListLabel>
                Last 7 days
            </HomeLastEventsBodySectionListLabel>
            <HomeLastEventsBodySectionListValue>
                {/* A prop that is being passed in from the parent component. */}
                {seventhTH}
            </HomeLastEventsBodySectionListValue>
        </HomeLastEventsBodySectionList>
        <HomeLastEventsBodySectionList>
            <HomeLastEventsBodySectionListLabel>
                Last 30 days
            </HomeLastEventsBodySectionListLabel>
            <HomeLastEventsBodySectionListValue>
                {/* A prop that is being passed in from the parent component. */}
                {thirtyTh}
            </HomeLastEventsBodySectionListValue>
        </HomeLastEventsBodySectionList>
        <HomeLastEventsBodySectionList>
            <HomeLastEventsBodySectionListLabel>
                Last 90 days
            </HomeLastEventsBodySectionListLabel>
            <HomeLastEventsBodySectionListValue>
                {/* A prop that is being passed in from the parent component. */}
                {ninetyTH}
            </HomeLastEventsBodySectionListValue>
        </HomeLastEventsBodySectionList>
      </HomeLastEventsBodySections>
    </HomeLastEventsBody>
  );
}

export default HomeLastEvents;
