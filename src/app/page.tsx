import { fetchPlace } from '@/lib/api';
import { config } from '@/lib/config';
import { PlaceCard } from '@/components/PlaceCard/PlaceCard';
import styles from './page.module.css';

export default async function HomePage() {
  const places = await Promise.all(config.examplePlaceIds.map((id) => fetchPlace(id)));

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
