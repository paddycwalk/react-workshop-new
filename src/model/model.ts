export type DayData = {
  id: string;
  date: string;
  total: string;
  timeEntries: TimeEntryData[];
};

export type TimeEntryData = {
  id: string;
  taskName: string;
  startTime: string;
  endTime: string;
  diff: string;
};
