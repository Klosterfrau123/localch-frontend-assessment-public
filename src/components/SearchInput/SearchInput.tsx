'use client';

import { Icon } from '@/components/Icon/Icon';
import styles from './SearchInput.module.css';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchInput({ value, onChange, placeholder = 'Suchen...' }: SearchInputProps) {
  return (
    <div className={styles.container}>
      <Icon name="search" className={styles.icon} />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
        aria-label={placeholder}
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange('')}
          className={styles.clearButton}
          aria-label="Suche löschen"
        >
          <Icon name="close" className={styles.clearIcon} />
        </button>
      )}
    </div>
  );
}
