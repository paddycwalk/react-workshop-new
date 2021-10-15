import TextField from 'components/atoms/TextField/TextField';
import { TimeEntryData } from 'model/model';
import styles from './TimeEntry.module.scss';

type Props = TimeEntryData;

function TimeEntry({ taskName, startTime, endTime, diff }: Props) {
  return (
    <div className={styles.main}>
      <TextField
        defaultValue={taskName}
        placeholder="Task Name"
        className="Test"
      />
      <TextField placeholder="10:00" defaultValue={startTime} format="time" />
      <TextField placeholder="12:00" defaultValue={endTime} format="time" />
      <div>{diff}</div>
    </div>
  );
}

export default TimeEntry;
