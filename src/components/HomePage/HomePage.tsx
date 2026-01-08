'use client';

import type { Place } from '@/lib/types';
import { PlaceCard } from '@/components/PlaceCard/PlaceCard';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { getPlaceName } from '@/lib/placeUtils';
import { useSearch } from '@/hooks/useSearch';
import styles from './HomePage.module.css';

interface HomePageProps {
  places: Place[];
}

export function HomePage({ places }: HomePageProps) {
  const { searchTerm, setSearchTerm, filteredItems, isSearching, hasResults } = useSearch(
    places,
    getPlaceName
  );

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Business Places</h1>
          <p className={styles.subtitle}>Entdecke lokale Geschäfte und Restaurants</p>
        </header>

        <div className={styles.searchContainer}>
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Nach Geschäft suchen..."
          />
        </div>

        {!hasResults ? (
          <div className={styles.empty}>
            <p className={styles.emptyText}>
              {isSearching ? `Keine Ergebnisse für "${searchTerm}"` : 'Keine Geschäfte gefunden'}
            </p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredItems.map((place) => (
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
