import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export function LoadingSpinner({ size = 'md' }: LoadingSpinnerProps) {
  return (
    <div className={`${styles.spinner} ${sizeClasses[size]}`} role="status" aria-label="Laden...">
      <svg viewBox="0 0 24 24" fill="none">
        <circle
          className={styles.track}
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className={styles.arc}
          d="M12 2a10 10 0 0 1 10 10"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
