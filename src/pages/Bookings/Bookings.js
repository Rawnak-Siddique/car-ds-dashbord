import React from 'react';
import { useState } from 'react';
import FlipCard from '../../components/FlipCard/FlipCard';
import { BookingsBody, BookingsBodyHeader, BookingsBodySection, BookingsBodySectionAll, BookingsBodySectionThisWeek, BookingsBodySectionToday } from './styles';

const Bookings = () => {
  const [bookingCard, setBookingCard] = useState([
    {
      id: 1,
      date: '2020-05-12',
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
      date: '2020-05-10',
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
      date: '2020-05-05',
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
      date: '2020-05-05',
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
      date: '2020-03-010',
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
      date: '2020-03-17',
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
      date: '2020-01-015',
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
          {bookingCard.map((booking) => (
            <FlipCard date={booking.date} time={booking.time} name={booking.name} email={booking.Email} phone={booking.phone} message={booking.message} car={booking.car} carDetails={booking.details} />
          ))}
        </BookingsBodySectionAll>
      </BookingsBodySection>
    </BookingsBody>
  );
}

export default Bookings;
