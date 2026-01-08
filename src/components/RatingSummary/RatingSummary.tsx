import type { FeedbackSummary } from '@/lib/types';
import { config } from '@/lib/config';
import { StarRating } from '@/components/StarRating/StarRating';
import styles from './RatingSummary.module.css';

interface RatingSummaryProps {
  feedback: FeedbackSummary;
}

export function RatingSummary({ feedback }: RatingSummaryProps) {
  const { average_rating, ratings_count, positive_recommendation_percentage, rating_summaries } =
    feedback;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Bewertungen</h3>
      <div className={styles.overall}>
        <div className={styles.overallScore}>
          <span className={styles.scoreValue}>{average_rating.toFixed(1)}</span>
          <StarRating rating={average_rating} size="md" />
        </div>
        <p className={styles.ratingCount}>
          Basierend auf {ratings_count.toLocaleString()} Bewertungen
        </p>
        {positive_recommendation_percentage > 0 && (
          <p className={styles.recommendation}>
            <span>{positive_recommendation_percentage}%</span> würden diesen Ort empfehlen
          </p>
        )}
      </div>

      {rating_summaries.length > 0 && (
        <div className={styles.dimensions}>
          {rating_summaries
            .filter((dim) => dim.display)
            .map((dim) => (
              <div key={dim.dimension} className={styles.dimension}>
                <div className={styles.dimensionHeader}>
                  <span className={styles.dimensionLabel}>
                    {config.dimensions[dim.dimension] ?? dim.dimension}
                  </span>
                  <span className={styles.dimensionValue}>{dim.average.toFixed(1)}</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${(dim.average / 5) * 100}%` }}
                    role="progressbar"
                    aria-valuenow={dim.average}
                    aria-valuemin={0}
                    aria-valuemax={5}
                  />
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
