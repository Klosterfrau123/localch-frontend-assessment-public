import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import styles from './page.module.css';

export default function Loading() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.loadingContainer}>
          <LoadingSpinner size="lg" />
          <p className={styles.loadingText}>Lädt...</p>
        </div>
      </div>
    </main>
  );
}
