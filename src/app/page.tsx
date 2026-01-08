import { fetchPlace } from '@/lib/api';
import { PlaceCard } from '@/components/PlaceCard/PlaceCard';
import styles from './page.module.css';

const EXAMPLE_PLACE_IDS = ['GXvPAor1ifNfpF0U5PTG0w', 'ohGSnJtMIC5nPfYRi_HTAg'];

export default async function HomePage() {
  const places = await Promise.all(EXAMPLE_PLACE_IDS.map((id) => fetchPlace(id)));

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Business Places</h1>
          <p className={styles.subtitle}>Entdecke lokale Geschäfte und Restaurants</p>
        </header>
        <div className={styles.grid}>
          {places.map((place) => (
            <a key={place.local_entry_id} href={`/${place.local_entry_id}`} className={styles.link}>
              <PlaceCard place={place} />
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
