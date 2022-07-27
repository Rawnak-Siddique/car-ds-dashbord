import { DateTime } from 'luxon';
import React, { useEffect } from 'react';
import { useState } from 'react';
import FlipCard from '../../components/FlipCard/FlipCard';
import { BookingsBody, BookingsBodyHeader, BookingsBodySection } from './styles';

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

  // Sample data : 2022-07-27T08:00:00.000Z;

  const [bookingCard, setBookingCard] = useState([
    {
      "id": 1,
      "timestamp": "2022-07-27T08:00:00.000Z",
      "name": "Krale",
      "email": "skrale0@list-manage.com",
      "message": "Mabuya spilogaster",
      "car": "Pontiac",
      "details": "Platalea leucordia"
    }, {
      "id": 2,
      "timestamp": "2022-07-24T09:00:00.000Z",
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
      "timestamp": "2022-07-29T08:00:00.000Z",
      "name": "Gini",
      "email": "agini4@weather.com",
      "message": "Vanellus armatus",
      "car": "Lotus",
      "details": "Nectarinia chalybea"
    }]);



  // BOOKING APPOINTMENT TYPE - TEST DRIVE , SERVICE APPOINTMENT
  useEffect(() => {
    // setCardByDate();
  }, []);
  const todays = bookingCard.filter(booking => DateTime.fromISO(booking.timestamp).day === DateTime.now().plus({days: 7}).day);

  console.log("todays", todays);
  function getStartDate() {
      const today = new Date();
      const first = today.getDate() - today.getDay() + 1;

      const tuesday = new Date(today.setDate(first + 1));
      // console.log(tuesday); // 👉️ Tue Jan 18 2022

      const monday = new Date(today.setDate(first));

      return monday;
    }
  function getEndDate() {
      const today = new Date();
      const first = today.getDate() - today.getDay() + 1;

      const tuesday = new Date(today.setDate(first + 1));
      // console.log(tuesday); // 👉️ Tue Jan 18 2022

      const monday = new Date(today.setDate(first));

      return monday;
    }

    // function getResultData() {
    //   var startDate = new Date("2015-08-04");
    //     var endDate = new Date("2015-08-12");

    //     var resultProductData = product_data.filter(function (a) {
    //         var hitDates = a.ProductHits || {};
    //         // extract all date strings
    //         hitDates = Object.keys(hitDates);
    //         // convert strings to Date objcts
    //         hitDates = hitDates.map(function(date) { return new Date(date); });
    //         // filter this dates by startDate and endDate
    //         var hitDateMatches = hitDates.filter(function(date) { return date >= startDate && date <= endDate });
    //         // if there is more than 0 results keep it. if 0 then filter it away
    //         return hitDateMatches.length>0;
    //     });
    //     console.log(resultProductData);
    // }

  //   // 👇️ Mon Jan 17 2022
  //   console.log(getMondayOfCurrentWeek());
  // const setCardByDate = () => {
  //   const todayDateString = `${todayYear}-${todayMonth}-${todayDate}`;
  //   const thisWeeks = bookingCard.filter(booking => booking.date >= todayDateString && booking.date <= todayDateString + 7);
  //   console.log("this week", thisWeeks);
  // };
  return (
    <BookingsBody>
      <BookingsBodyHeader>
        <h1>
          Here are the bookings/appointments for the cars test drive
        </h1>
      </BookingsBodyHeader>
      <BookingsBodySection>
        {/* <h2 className='text-2xl'>Today's Appointments</h2>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
        </div>
        <h2 className='text-2xl'>
          This week's Appointments
        </h2>
        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
          <FlipCard />
        </div> */}
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
