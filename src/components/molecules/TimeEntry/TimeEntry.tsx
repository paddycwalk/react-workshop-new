import TextField from 'components/atoms/TextField/TextField';
import styles from './TimeEntry.module.scss';

function TimeEntry() {
  return (
    <div className={styles.main}>
      <TextField
        defaultValue="Ticket 210"
        placeholder="Task Name"
        className="Test"
      />
      <TextField placeholder="10:00" format="time" />
      <TextField placeholder="12:00" format="time" />
      <div>Diff</div>
    </div>
  );
}

export default TimeEntry;
