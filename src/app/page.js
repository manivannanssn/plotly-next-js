import Image from 'next/image';
import styles from './page.module.css';
import PlotlyWrapper from './PlotlyWrapper';

export default function Home() {
  return (
    <div className={styles.main}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', padding: '16px' }}>
        <PlotlyWrapper />
      </div>
    </div>
  );
}
