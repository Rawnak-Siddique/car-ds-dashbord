import { DateTime } from 'luxon';
import React, { useEffect } from 'react';
import { useState } from 'react';
import FlipCard from '../../components/FlipCard/FlipCard';
import useBookings from '../../hooks/useBookings';
import { BookingsBody, BookingsBodyHeader, BookingsBodySection } from './styles';

const Bookings = () => {
  // Sample data : 2022-07-27T08:00:00.000Z;
    const [bookingsCard] = useBookings();
    const [todaysBooking, setTodaysBooking] = useState([]);
    const [upcomingBooking, setUpcomingBooking] = useState([]);
  // BOOKING APPOINTMENT TYPE - TEST DRIVE , SERVICE APPOINTMENT
  useEffect(() => {
    // setCardByDate();
    setTodaysBooking(bookingsCard.filter(booking => {
      const date = DateTime.fromISO(booking.appointment_date);
      return date.hasSame(DateTime.local(), 'day');
    }));
    // eslint-disable-next-line array-callback-return
    setUpcomingBooking(bookingsCard.filter(booking => {
      const startDate = DateTime.now()
      // console.log("startDate: ", startDate);
      const endDate = DateTime.now().plus({days: 6})
      // console.log("endDate", endDate);
      const date = DateTime.fromISO(booking.appointment_date);
      // console.log("date",date);
      if (date >= startDate && date <= endDate){
        return booking;
      }
    }));
  }, []);
  return (
    <BookingsBody>
      <BookingsBodyHeader>
        <h1>
          Here are the bookings/appointments for the cars test drive
        </h1>
      </BookingsBodyHeader>
      <BookingsBodySection>
        <h2 className='text-2xl'>Today's Appointments</h2>
        {todaysBooking.length === 0 ? (
            <div className="w-full h-10 flex items-center justify-center">
              <p>No appointments today sorry ...</p>
            </div>
        ) : (
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            {todaysBooking.map((todays) => (
              <FlipCard key={todays.id} data={todays} />
            ))}
          </div>
        )}
        <h2 className='text-2xl'>
          Upcoming 7 Days
        </h2>
        {upcomingBooking.length === 0 ? (
            <div className="w-full h-10 flex items-center justify-center">
              <p>No appointments in the next 7 days sorry ...</p>
            </div>
        ) : (
              <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                {upcomingBooking.map((upcoming) => (
                  <FlipCard key={upcoming.id} data={upcoming} />
                ))}
              </div> 
        )}
        <h2 className='text-2xl'>
          All Appointments
        </h2>
        {bookingsCard.length === 0 ? (
            <div className="w-full h-10 flex items-center justify-center">
              <p>No appointments sorry ...</p>
            </div>
        ) : (
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            {bookingsCard.map((booking) => (
              <FlipCard key={booking.id} data={booking} />
            ))}
          </div>
        )}
      </BookingsBodySection>
    </BookingsBody>
  );
}

export default Bookings;
