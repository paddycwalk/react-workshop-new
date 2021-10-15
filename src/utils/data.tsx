import { DayData } from 'model/model';

export const dayData: DayData = {
  id: '1',
  date: '14.10.2021',
  total: '7:00',
  timeEntries: [
    {
      id: '1',
      taskName: 'Ticket 1',
      startTime: '09:00',
      endTime: '12:00',
      diff: '3:00',
    },
    {
      id: '2',
      taskName: 'Ticket 2',
      startTime: '13:00',
      endTime: '15:00',
      diff: '2:00',
    },
    {
      id: '2',
      taskName: 'Ticket 3',
      startTime: '15:00',
      endTime: '17:00',
      diff: '2:00',
    },
  ],
};
