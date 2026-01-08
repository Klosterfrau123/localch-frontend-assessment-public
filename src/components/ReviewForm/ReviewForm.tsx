'use client';

import { useState } from 'react';
import { StarRatingInteractive } from '@/components/StarRating/StarRatingInteractive';
import styles from './ReviewForm.module.css';

interface ReviewFormProps {
  placeName: string;
}

export function ReviewForm({ placeName }: ReviewFormProps) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) {
      setError('Bitte geben Sie Ihren Namen ein.');
      return;
    }
    if (rating === 0) {
      setError('Bitte wählen Sie eine Bewertung.');
      return;
    }
    if (!comment.trim()) {
      setError('Bitte schreiben Sie einen Kommentar.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.container}>
        <div className={styles.success}>
          <svg className={styles.successIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
          <h3 className={styles.successTitle}>Vielen Dank!</h3>
          <p className={styles.successMessage}>
            Ihre Bewertung für {placeName} wurde erfolgreich übermittelt.
          </p>
          <button
            type="button"
            className={styles.resetButton}
            onClick={() => {
              setSubmitted(false);
              setName('');
              setRating(0);
              setComment('');
            }}
          >
            Weitere Bewertung schreiben
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Bewertung schreiben</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="review-name">
            Ihr Name
          </label>
          <input
            id="review-name"
            type="text"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Max Mustermann"
          />
        </div>
        <div className={styles.field}>
          <span className={styles.label}>Ihre Bewertung</span>
          <StarRatingInteractive rating={rating} size="lg" onChange={setRating} />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="review-comment">
            Ihr Kommentar
          </label>
          <textarea
            id="review-comment"
            className={styles.textarea}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            placeholder="Teilen Sie Ihre Erfahrung..."
          />
        </div>
        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}
        <button type="submit" className={styles.submitButton}>
          Bewertung abschicken
        </button>
      </form>
    </div>
  );
}
