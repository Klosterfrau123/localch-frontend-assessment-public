import type { OpeningHours as OpeningHoursType, TimeSlot } from '@/lib/api';
import styles from './OpeningHours.module.css';

interface OpeningHoursProps {
  openingHours: OpeningHoursType;
}

type DayKey = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

const DAYS: DayKey[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

const DAY_LABELS: Record<DayKey, { short: string; full: string }> = {
  monday: { short: 'Mo', full: 'Montag' },
  tuesday: { short: 'Di', full: 'Dienstag' },
  wednesday: { short: 'Mi', full: 'Mittwoch' },
  thursday: { short: 'Do', full: 'Donnerstag' },
  friday: { short: 'Fr', full: 'Freitag' },
  saturday: { short: 'Sa', full: 'Samstag' },
  sunday: { short: 'So', full: 'Sonntag' },
};

function formatTimeSlots(slots: TimeSlot[] | undefined): string {
  if (!slots || slots.length === 0) return 'Geschlossen';
  return slots
    .filter((slot) => slot.type === 'OPEN')
    .map((slot) => `${slot.start}–${slot.end}`)
    .join(', ');
}

interface GroupedHours {
  days: DayKey[];
  hours: string;
}

function groupHours(openingHours: OpeningHoursType): GroupedHours[] {
  const groups: GroupedHours[] = [];
  let currentGroup: GroupedHours | null = null;
  for (const day of DAYS) {
    const hours = formatTimeSlots(openingHours.days[day]);
    if (currentGroup && currentGroup.hours === hours) {
      currentGroup.days.push(day);
    } else {
      if (currentGroup) groups.push(currentGroup);
      currentGroup = { days: [day], hours };
    }
  }
  if (currentGroup) groups.push(currentGroup);
  return groups;
}

function formatDayRange(days: DayKey[]): string {
  if (days.length === 1) return DAY_LABELS[days[0]].short;
  if (days.length === 7) return 'Täglich';
  return `${DAY_LABELS[days[0]].short}–${DAY_LABELS[days[days.length - 1]].short}`;
}

function getCurrentDay(): DayKey {
  const dayMap: DayKey[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  return dayMap[new Date().getDay()];
}

export function OpeningHours({ openingHours }: OpeningHoursProps) {
  const groups = groupHours(openingHours);
  const currentDay = getCurrentDay();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Öffnungszeiten</h3>
      <dl className={styles.list}>
        {groups.map((group, index) => {
          const isCurrentDay = group.days.includes(currentDay);
          const isClosed = group.hours === 'Geschlossen';
          return (
            <div
              key={index}
              className={`${styles.row} ${isCurrentDay ? styles.rowCurrent : ''}`}
            >
              <dt className={styles.days}>{formatDayRange(group.days)}</dt>
              <dd className={`${styles.hours} ${isClosed ? styles.hoursClosed : ''}`}>
                {group.hours}
              </dd>
            </div>
          );
        })}
      </dl>
      {openingHours.closed_on_holidays && <p className={styles.note}>An Feiertagen geschlossen</p>}
    </div>
  );
}
