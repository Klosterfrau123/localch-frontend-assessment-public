import styles from './StarRating.module.css';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
}

const sizeClasses = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

function getStarFill(isFilled: boolean, isHalf: boolean, value: number, rating: number): string {
  if (isFilled) return 'var(--color-star)';
  if (isHalf) return `url(#star-fill-${value}-${rating})`;
  return 'var(--color-star-empty)';
}

export function StarRating({
  rating,
  maxRating = 5,
  size = 'md',
  showValue = false,
}: StarRatingProps) {
  const stars = Array.from({ length: maxRating }, (_, i) => i + 1);
  const roundedRating = Math.round(rating * 2) / 2;

  return (
    <div
      className={`${styles.container} ${sizeClasses[size]}`}
      role="img"
      aria-label={`Rating: ${rating.toFixed(1)} out of ${maxRating}`}
    >
      {stars.map((value) => {
        const fillPercentage = Math.min(100, Math.max(0, (roundedRating - value + 1) * 100));
        const isFilled = fillPercentage >= 100;
        const isHalf = fillPercentage > 0 && fillPercentage < 100;

        return (
          <span key={value} className={styles.star}>
            <svg viewBox="0 0 24 24">
              <defs>
                <linearGradient id={`star-fill-${value}-${rating}`}>
                  <stop offset={`${fillPercentage}%`} stopColor="var(--color-star)" />
                  <stop offset={`${fillPercentage}%`} stopColor="var(--color-star-empty)" />
                </linearGradient>
              </defs>
              <path
                fill={getStarFill(isFilled, isHalf, value, rating)}
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </span>
        );
      })}
      {showValue && <span className={styles.value}>{rating.toFixed(1)}</span>}
    </div>
  );
}
