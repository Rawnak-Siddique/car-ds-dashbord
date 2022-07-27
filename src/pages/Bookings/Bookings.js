import React, { useEffect } from 'react';
import { useState } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import FlipCard from '../../components/FlipCard/FlipCard';
import { BookingsBody, BookingsBodyHeader, BookingsBodySection, BookingsBodySectionAll, BookingsBodySectionThisWeek, BookingsBodySectionToday } from './styles';

const Bookings = () => {
    const today = new Date();
    console.log(today);
    const todayDate = today.getDate();
    console.log(todayDate);
    const todayMonth = today.getMonth();
    console.log(todayMonth);
    const todayYear = today.getFullYear();
    console.log(todayYear);
    const date1 = today.setDate('28-06-2022');
    console.log(date1);
  const [bookingCard, setBookingCard] = useState([
    {
      id: 1,
      date:  date1,
      time: '12:00',
      customer: 'John Doe',
      email: 'John@John.com',
      phone: '123456789',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      car: 'Toyota',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quisquam.',
    },
    {
      id: 2,
      date: '2022-06-28',
      time: '12:00',
      customer: 'John Doe',
      email: 'John@John.com',
      phone: '123456789',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      car: 'Toyota',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quisquam.',
    },
    {
      id: 3,
      date: '2022-06-29',
      time: '12:00',
      customer: 'John Doe',
      email: 'John@John.com',
      phone: '123456789',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      car: 'Toyota',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quisquam.',
    },
    {
      id: 4,
      date: '2022-05-05',
      time: '12:00',
      customer: 'John Doe',
      email: 'John@John.com',
      phone: '123456789',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      car: 'Toyota',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quisquam.',
    },
    {
      id: 5,
      date: '2022-03-10',
      time: '12:00',
      customer: 'John Doe',
      email: 'John@John.com',
      phone: '123456789',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      car: 'Toyota',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quisquam.',
    },
    {
      id: 6,
      date: '2022-03-17',
      time: '12:00',
      customer: 'John Doe',
      email: 'John@John.com',
      phone: '123456789',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      car: 'Toyota',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quisquam.',
    },
    {
      id: 7,
      date: '2020-03-11',
      time: '12:00',
      customer: 'John Doe',
      email: 'John@John.com',
      phone: '123456789',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      car: 'Toyota',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quisquam.',
    },
    {
      id: 8,
      date: '2022-01-015',
      time: '12:00',
      customer: 'John Doe',
      email: 'John@John.com',
      phone: '123456789',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      car: 'Toyota',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quisquam.',
    },
    {
      id: 9,
      date: '2020-02-01',
      time: '12:00',
      customer: 'John Doe',
      email: 'John@John.com',
      phone: '123456789',
      message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.',
      car: 'Toyota',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quisquam.',
    },
  ]);
  useEffect(() => {
    setCardByDate();
  }, []);
  const todays = bookingCard.filter(booking => booking.date === '2020-05-12');
  console.log("todays",todays);
  const setCardByDate = () => {
    
    const todayDateString = `${todayYear}-${todayMonth}-${todayDate}`;
    const thisWeeks = bookingCard.filter(booking => booking.date >= todayDateString && booking.date <= todayDateString+7);
    console.log("so",thisWeeks);
  };
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
          <HorizontalScroll>
            <FlipCard/>
            <FlipCard/>
            <FlipCard/>
            <FlipCard/>
            <FlipCard/>
            <FlipCard/>
          </HorizontalScroll>
        </BookingsBodySectionToday>
          This week
        <BookingsBodySectionThisWeek>
          <HorizontalScroll>
            <FlipCard/>
            <FlipCard/>
            <FlipCard/>
            <FlipCard/>
            <FlipCard/>
            <FlipCard/>
          </HorizontalScroll>
        </BookingsBodySectionThisWeek>
          All
        <BookingsBodySectionAll>
          <HorizontalScroll>
            {bookingCard.map((booking) => (
              <FlipCard key={booking.id} date={booking.date} time={booking.time} name={booking.name} email={booking.Email} phone={booking.phone} message={booking.message} car={booking.car} carDetails={booking.details} />
            ))}
          </HorizontalScroll>
        </BookingsBodySectionAll>
      </BookingsBodySection>
    </BookingsBody>
  );
}

export default Bookings;
