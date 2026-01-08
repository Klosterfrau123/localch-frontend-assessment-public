import {
  fetchPlace,
  formatAddress,
  getPhone,
  getPlaceCategory,
  getPlaceCategoryEmoji,
  getPlaceName,
  getWebsite,
} from '@/lib/api';
import { OpeningHours } from '@/components/OpeningHours/OpeningHours';
import { RatingSummary } from '@/components/RatingSummary/RatingSummary';
import { ReviewForm } from '@/components/ReviewForm/ReviewForm';
import styles from './page.module.css';

interface PlacePageProps {
  params: Promise<{ placeId: string }>;
}

export async function generateMetadata({ params }: PlacePageProps) {
  const { placeId } = await params;
  try {
    const place = await fetchPlace(placeId);
    return { title: `${getPlaceName(place)} | Home Assignment` };
  } catch {
    return { title: 'Place Not Found | Home Assignment' };
  }
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { placeId } = await params;
  const place = await fetchPlace(placeId);

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
          {emoji && (
            <span className={styles.emoji} aria-hidden="true">
              {emoji}
            </span>
          )}
          <div className={styles.headerContent}>
            <h1 className={styles.name}>{name}</h1>
            {category && <p className={styles.category}>{category}</p>}
          </div>
        </header>

        <section className={styles.infoSection} aria-labelledby="contact-heading">
          <h2 id="contact-heading" className={styles.visuallyHidden}>
            Kontakt
          </h2>
          <div className={styles.infoGrid}>
            {address && (
              <div className={styles.infoItem}>
                <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
                <span>{address}</span>
              </div>
            )}
            {phone && (
              <div className={styles.infoItem}>
                <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  />
                </svg>
                <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
              </div>
            )}
            {website && (
              <div className={styles.infoItem}>
                <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                  />
                </svg>
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
