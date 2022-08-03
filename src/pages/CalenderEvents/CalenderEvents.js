import React from 'react';
import { CalenderEventsBody, CalenderEventsBodyCalendar, CalenderEventsBodyEvents, CalenderEventsBodyEventsLists, CalenderEventsBodyHeader } from './styles';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'


const CalenderEvents = () => {
  return (
    <CalenderEventsBody> 
      <CalenderEventsBodyHeader>
        Look at upcoming events and create new events for your business
      </CalenderEventsBodyHeader>
      <CalenderEventsBodyEvents>
        Create Events here
      </CalenderEventsBodyEvents>
      <CalenderEventsBodyCalendar>
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            eventColor={"#" + Math.floor(Math.random() * 16777215).toString(16)}
            />
      </CalenderEventsBodyCalendar>
      <CalenderEventsBodyEventsLists>
        Show Events here details
      </CalenderEventsBodyEventsLists>
    </CalenderEventsBody>
  );
}

export default CalenderEvents;

