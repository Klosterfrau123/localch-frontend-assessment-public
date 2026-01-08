'use client';

import { useRouter } from 'next/navigation';
import { Icon } from '@/components/Icon/Icon';
import styles from './BackButton.module.css';

export function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={styles.button}
      aria-label="Zurück"
    >
      <Icon name="arrow-left" className={styles.icon} />
      <span>Zurück</span>
    </button>
  );
}
