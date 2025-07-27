'use client';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventInput } from '@fullcalendar/core';

export default function EventCalendar() {
  const events: EventInput[] = [
    { title: 'Completed Task', date: '2025-07-24' },
    { title: 'Team Meeting', date: '2025-07-26' },
    { title: 'Project Review', date: '2025-07-27' },
  ];

  return (
    <div className="p-6 rounded-xl w-full h-full">
      <div className='min-h-full overflow-y-auto text-black'>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="500px"
          dayCellContent={(arg) => {
            return (
              <div className="text-xs text-blue-600 font-bold">
                {arg.dayNumberText}
              </div>
            );
          }}
          headerToolbar={{
            right: 'next',
            left: 'prev',
            center: 'title',
            // right: 'dayGridMonth',
          }}
        />
      </div>
    </div>
  );
}
