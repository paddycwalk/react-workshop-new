import TimeEntry from 'components/molecules/TimeEntry/TimeEntry';
import styles from './DayView.module.scss';

interface Props {
  data?: any;
}

function DayView({ data }: Props) {
  console.log('data:', data);

  return (
    <div className={styles.main}>
      <div>Date: {data.date}</div>
      <div>Diff: {data.total}</div>
      <TimeEntry />
      <TimeEntry />
      <TimeEntry />
    </div>
  );
}

export default DayView;
