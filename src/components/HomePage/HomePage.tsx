'use client';

import { useState, useMemo } from 'react';
import type { Place } from '@/lib/types';
import { PlaceCard } from '@/components/PlaceCard/PlaceCard';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { getPlaceName } from '@/lib/placeUtils';
import styles from './HomePage.module.css';

interface HomePageProps {
  places: Place[];
}

export function HomePage({ places }: HomePageProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlaces = useMemo(() => {
    if (!searchTerm.trim()) return places;
    const term = searchTerm.toLowerCase();
    return places.filter((place) => getPlaceName(place).toLowerCase().includes(term));
  }, [places, searchTerm]);

  const showEmptyState = filteredPlaces.length === 0;
  const isSearching = searchTerm.trim().length > 0;

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

        {showEmptyState ? (
          <div className={styles.empty}>
            <p className={styles.emptyText}>
              {isSearching ? `Keine Ergebnisse für "${searchTerm}"` : 'Keine Geschäfte gefunden'}
            </p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredPlaces.map((place) => (
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
