import TextField from 'components/atoms/TextField/TextField';
import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.main}>
      My Time <TextField />
    </div>
  );
}

export default Home;
