import type { Place } from '@/lib/api';
import {
  formatAddress,
  getPhone,
  getPlaceCategory,
  getPlaceCategoryEmoji,
  getPlaceName,
} from '@/lib/api';
import { StarRating } from '@/components/StarRating/StarRating';
import styles from './PlaceCard.module.css';

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  const name = getPlaceName(place);
  const category = getPlaceCategory(place);
  const emoji = getPlaceCategoryEmoji(place);
  const address = formatAddress(place);
  const phone = getPhone(place);
  const feedback = place.place_feedback_summary;

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        {emoji && (
          <span className={styles.emoji} aria-hidden="true">
            {emoji}
          </span>
        )}
        <div className={styles.headerContent}>
          <h2 className={styles.name}>{name}</h2>
          {category && <p className={styles.category}>{category}</p>}
        </div>
      </div>

      <div className={styles.body}>
        {address && (
          <p className={styles.infoRow}>
            <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
              />
            </svg>
            <span>{address}</span>
          </p>
        )}

        {phone && (
          <p className={styles.infoRow}>
            <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
              />
            </svg>
            <span>{phone}</span>
          </p>
        )}
      </div>

      {feedback && feedback.ratings_count > 0 && (
        <div className={styles.footer}>
          <StarRating rating={feedback.average_rating} size="sm" showValue />
          <span className={styles.ratingCount}>({feedback.ratings_count.toLocaleString()})</span>
          {feedback.positive_recommendation_percentage > 0 && (
            <span className={styles.recommendation}>
              {feedback.positive_recommendation_percentage}% empfohlen
            </span>
          )}
        </div>
      )}
    </article>
  );
}
