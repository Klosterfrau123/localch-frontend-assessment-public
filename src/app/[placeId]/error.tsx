'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from '@/components/Icon/Icon';
import styles from './error.module.css';

interface ErrorPageProps {
  error: Error & { statusCode?: number; context?: string };
  reset: () => void;
}

function getErrorContent(isNotFound: boolean, isNetworkError: boolean) {
  if (isNotFound) {
    return {
      title: 'Ort nicht gefunden',
      message: 'Der gesuchte Ort existiert nicht oder wurde entfernt.',
    };
  }
  if (isNetworkError) {
    return {
      title: 'Verbindungsfehler',
      message: 'Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.',
    };
  }
  return {
    title: 'Etwas ist schiefgelaufen',
    message: 'Beim Laden der Daten ist ein Fehler aufgetreten.',
  };
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  const router = useRouter();

  useEffect(() => {
    console.error('Place page error:', error);
  }, [error]);

  const isNotFound = error.statusCode === 404;
  const isNetworkError = error.context === 'NETWORK';
  const { title, message } = getErrorContent(isNotFound, isNetworkError);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.iconWrapper}>
          <Icon name="globe" className={styles.icon} />
        </div>

        <h1 className={styles.title}>{title}</h1>

        <p className={styles.message}>{message}</p>

        <div className={styles.actions}>
          <button type="button" onClick={reset} className={styles.buttonPrimary}>
            Erneut versuchen
          </button>
          <button type="button" onClick={() => router.push('/')} className={styles.buttonSecondary}>
            Zur Startseite
          </button>
        </div>
      </div>
    </main>
  );
}
