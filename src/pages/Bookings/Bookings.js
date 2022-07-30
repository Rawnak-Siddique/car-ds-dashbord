import { DateTime } from 'luxon';
import React, { useEffect } from 'react';
import { useState } from 'react';
import FlipCard from '../../components/FlipCard/FlipCard';
import { BookingsBody, BookingsBodyHeader, BookingsBodySection } from './styles';

const Bookings = () => {
  // Sample data : 2022-07-27T08:00:00.000Z;
  const [bookingCard, setBookingCard ] = useState([
    {
      "id": 1,
      "timestamp": "2022-07-28T08:00:00.000Z",
      "name": "Krale",
      "email": "skrale0@list-manage.com",
      "message": "Mabuya spilogaster",
      "car": "Pontiac",
      "details": "Platalea leucordia"
    }, {
      "id": 2,
      "timestamp": "2022-07-28T09:00:00.000Z",
      "name": "Kaes",
      "email": "ekaes1@berkeley.edu",
      "message": "Psittacula krameri",
      "car": "Volkswagen",
      "details": "Zosterops pallidus"
    }, {
      "id": 3,
      "timestamp": "2022-08-03T08:00:00.000Z",
      "name": "Tchaikovsky",
      "email": "mtchaikovsky2@vistaprint.com",
      "message": "Cracticus nigroagularis",
      "car": "Nissan",
      "details": "Chloephaga melanoptera"
    }, {
      "id": 4,
      "timestamp": "2022-07-28T08:00:00.000Z",
      "name": "Lansdowne",
      "email": "alansdowne3@pbs.org",
      "message": "Neotis denhami",
      "car": "Mitsubishi",
      "details": "Mycteria leucocephala"
    }, {
      "id": 5,
      "timestamp": "2022-08-04T08:00:00.000Z",
      "name": "Gini",
      "email": "agini4@weather.com",
      "message": "Vanellus armatus",
      "car": "Lotus",
      "details": "Nectarinia chalybea"
    }, {
      "id": 6,
      "timestamp": "2022-08-02T08:00:00.000Z",
      "name": "Gini",
      "email": "agini4@weather.com",
      "message": "Vanellus armatus",
      "car": "Lotus",
      "details": "Nectarinia chalybea"
    }, {
      "id": 7,
      "timestamp": "2022-08-01T08:00:00.000Z",
      "name": "Gini",
      "email": "agini4@weather.com",
      "message": "Vanellus armatus",
      "car": "Lotus",
      "details": "Nectarinia chalybea"
    }, {
      "id": 8,
      "timestamp": "2022-07-30T08:00:00.000Z",
      "name": "Gini",
      "email": "agini4@weather.com",
      "message": "Vanellus armatus",
      "car": "Lotus",
      "details": "Nectarinia chalybea"
    }]);
    const [todaysBooking, setTodaysBooking] = useState([]);
    const [upcomingBooking, setUpcomingBooking] = useState([]);
  // BOOKING APPOINTMENT TYPE - TEST DRIVE , SERVICE APPOINTMENT
  useEffect(() => {
    // setCardByDate();
    setTodaysBooking(bookingCard.filter(booking => {
      const date = DateTime.fromISO(booking.timestamp);
      return date.hasSame(DateTime.local(), 'day');
    }));
    // eslint-disable-next-line array-callback-return
    setUpcomingBooking(bookingCard.filter(booking => {
      const startDate = DateTime.now()
      console.log("startDate: ", startDate);
      const endDate = DateTime.now().plus({days: 6})
      console.log("endDate", endDate);
      const date = DateTime.fromISO(booking.timestamp);
      console.log("date",date);
      if (date >= startDate && date <= endDate){
        return booking;
      }
    }));
  }, []);
  console.log("todaysBooking",todaysBooking);
  console.log("upcomingBooking",upcomingBooking);
  return (
    <BookingsBody>
      <BookingsBodyHeader>
        <h1>
          Here are the bookings/appointments for the cars test drive
        </h1>
      </BookingsBodyHeader>
      <BookingsBodySection>
        <h2 className='text-2xl'>Today's Appointments</h2>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          {todaysBooking.map((todays) => (
            <FlipCard key={todays.id} data={todays} />
          ))}
        </div>
        <h2 className='text-2xl'>
          This week's Appointments
        </h2>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          {upcomingBooking.map((upcoming) => (
            <FlipCard key={upcoming.id} data={upcoming} />
          ))}
        </div> 
        <h2 className='text-2xl'>
          Future Appointments
        </h2>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          {bookingCard.map((booking) => (
            <FlipCard key={booking.id} data={booking} />
          ))}

        </div>
      </BookingsBodySection>
    </BookingsBody>
  );
}

export default Bookings;
