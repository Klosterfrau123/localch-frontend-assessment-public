'use client';

import styles from './StarRating.module.css';

interface StarRatingInteractiveProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  onChange: (rating: number) => void;
}

const sizeClasses = {
  sm: styles.sm,
  md: styles.md,
  lg: styles.lg,
};

export function StarRatingInteractive({
  rating,
  maxRating = 5,
  size = 'lg',
  onChange,
}: StarRatingInteractiveProps) {
  const stars = Array.from({ length: maxRating }, (_, i) => i + 1);

  const handleKeyDown = (event: React.KeyboardEvent, value: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onChange(value);
    }
  };

  return (
    <div
      className={`${styles.container} ${sizeClasses[size]}`}
      role="radiogroup"
      aria-label="Rating"
    >
      {stars.map((value) => {
        const isFilled = value <= rating;

        return (
          <span
            key={value}
            className={`${styles.star} ${styles.starInteractive}`}
            onClick={() => onChange(value)}
            onKeyDown={(e) => handleKeyDown(e, value)}
            tabIndex={0}
            role="radio"
            aria-checked={rating === value}
            aria-label={`${value} star${value !== 1 ? 's' : ''}`}
          >
            <svg viewBox="0 0 24 24">
              <path
                fill={isFilled ? 'var(--color-star)' : 'var(--color-star-empty)'}
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </svg>
          </span>
        );
      })}
    </div>
  );
}
