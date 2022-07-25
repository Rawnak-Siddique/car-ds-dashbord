import React from 'react';
import FlipCard from '../../components/FlipCard/FlipCard';
import { BookingsBody, BookingsBodyHeader, BookingsBodySection, BookingsBodySectionAll, BookingsBodySectionThisWeek, BookingsBodySectionToday } from './styles';

const Bookings = () => {
  return (
    <BookingsBody>
      <BookingsBodyHeader>
        <h1>
          Here are the bookings/appointments for the cars test drive
        </h1>
      </BookingsBodyHeader>
      <BookingsBodySection>
          today
        <BookingsBodySectionToday>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
        </BookingsBodySectionToday>
          This week
        <BookingsBodySectionThisWeek>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
        </BookingsBodySectionThisWeek>
          All
        <BookingsBodySectionAll>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
          <FlipCard/>
        </BookingsBodySectionAll>
      </BookingsBodySection>
    </BookingsBody>
  );
}

export default Bookings;
