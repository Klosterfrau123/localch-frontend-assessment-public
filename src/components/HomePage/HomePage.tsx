import type { Place } from '@/lib/types';
import { PlaceCard } from '@/components/PlaceCard/PlaceCard';
import { getPlaceName } from '@/lib/placeUtils';
import styles from './HomePage.module.css';

interface HomePageProps {
  places: Place[];
}

export function HomePage({ places }: HomePageProps) {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Business Places</h1>
          <p className={styles.subtitle}>Entdecke lokale Geschäfte und Restaurants</p>
        </header>
        {places.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyText}>Keine Geschäfte gefunden</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {places.map((place) => (
              <a
                key={place.local_entry_id}
                href={`/${place.local_entry_id}`}
                className={styles.link}
                aria-label={`Details zu ${getPlaceName(place)} anzeigen`}
              >
                <PlaceCard place={place} />
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
