import type { Place } from '@/lib/types';
import {
  formatAddress,
  getPhone,
  getPlaceCategory,
  getPlaceCategoryEmoji,
  getPlaceName,
} from '@/lib/placeUtils';
import { formatTodayHours } from '@/lib/openingHours';
import { Icon } from '@/components/Icon/Icon';
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
  const todayHours = formatTodayHours(place.opening_hours);

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
            <Icon name="location" className={styles.icon} />
            <span>{address}</span>
          </p>
        )}

        {phone && (
          <p className={styles.infoRow}>
            <Icon name="phone" className={styles.icon} />
            <span>{phone}</span>
          </p>
        )}

        {todayHours && (
          <p className={styles.infoRow}>
            <Icon name="clock" className={styles.icon} />
            <span className={todayHours.includes('geschlossen') ? styles.closed : ''}>
              {todayHours}
            </span>
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
