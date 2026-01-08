'use client';

import type { Place } from '@/lib/types';
import {
  formatAddress,
  getPhone,
  getPlaceCategory,
  getPlaceCategoryEmoji,
  getPlaceName,
  getWebsite,
} from '@/lib/placeUtils';
import { BackButton } from '@/components/BackButton/BackButton';
import { Icon } from '@/components/Icon/Icon';
import { OpeningHours } from '@/components/OpeningHours/OpeningHours';
import { RatingSummary } from '@/components/RatingSummary/RatingSummary';
import { ReviewForm } from '@/components/ReviewForm/ReviewForm';
import styles from './PlaceDetail.module.css';

interface PlaceDetailProps {
  place: Place;
  showBackButton?: boolean;
}

export function PlaceDetail({ place, showBackButton = true }: PlaceDetailProps) {
  const name = getPlaceName(place);
  const category = getPlaceCategory(place);
  const emoji = getPlaceCategoryEmoji(place);
  const address = formatAddress(place);
  const phone = getPhone(place);
  const website = getWebsite(place);

  return (
    <main className={styles.main}>
      <article className={styles.container}>
        <header className={styles.header}>
          {showBackButton && <BackButton />}
          <div className={styles.headerMain}>
            {emoji && (
              <span className={styles.emoji} aria-hidden="true">
                {emoji}
              </span>
            )}
            <div className={styles.headerContent}>
              <h1 className={styles.name}>{name}</h1>
              {category && <p className={styles.category}>{category}</p>}
            </div>
          </div>
        </header>

        <section className={styles.infoSection} aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="visually-hidden">
            Kontakt
          </h2>
          <div className={styles.infoGrid}>
            {address && (
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoItem}
              >
                <Icon name="location" className={styles.icon} />
                <span>{address}</span>
              </a>
            )}
            {phone && (
              <div className={styles.infoItem}>
                <Icon name="phone" className={styles.icon} />
                <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
              </div>
            )}
            {website && (
              <div className={styles.infoItem}>
                <Icon name="globe" className={styles.icon} />
                <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
                  {website}
                </a>
              </div>
            )}
          </div>
        </section>

        <div className={styles.content}>
          <div className={styles.sidebar}>
            {place.opening_hours && <OpeningHours openingHours={place.opening_hours} />}
            {place.place_feedback_summary && place.place_feedback_summary.ratings_count > 0 && (
              <RatingSummary feedback={place.place_feedback_summary} />
            )}
          </div>
          <div>
            <ReviewForm placeName={name} />
          </div>
        </div>
      </article>
    </main>
  );
}
