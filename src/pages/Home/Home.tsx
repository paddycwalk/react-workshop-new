import DayView from 'components/organisms/DayView/DayView';
import { dayData } from 'utils/data';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.main}>
      My Time <DayView data={dayData} />
    </div>
  );
}

export default Home;
