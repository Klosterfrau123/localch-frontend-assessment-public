import type { OpeningHours as OpeningHoursType } from '@/lib/types';
import { type DayKey, DAYS, DAY_LABELS, formatTimeSlots, getCurrentDay } from '@/lib/openingHours';
import styles from './OpeningHours.module.css';

interface OpeningHoursProps {
  openingHours: OpeningHoursType;
}

interface GroupedHours {
  days: DayKey[];
  hours: string[];
}

function groupHours(openingHours: OpeningHoursType): GroupedHours[] {
  const groups: GroupedHours[] = [];
  let currentGroup: GroupedHours | null = null;
  for (const day of DAYS) {
    const hours = formatTimeSlots(openingHours.days[day]);
    const hoursKey = hours.join('|');
    const currentKey = currentGroup?.hours.join('|');
    if (currentGroup && currentKey === hoursKey) {
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

export function OpeningHours({ openingHours }: OpeningHoursProps) {
  const groups = groupHours(openingHours);
  const currentDay = getCurrentDay();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Öffnungszeiten</h3>
      <dl className={styles.list}>
        {groups.map((group, index) => {
          const isCurrentDay = group.days.includes(currentDay);
          const isClosed = group.hours[0] === 'Geschlossen';
          return (
            <div key={index} className={`${styles.row} ${isCurrentDay ? styles.rowCurrent : ''}`}>
              <dt className={styles.days}>{formatDayRange(group.days)}</dt>
              <dd className={`${styles.hours} ${isClosed ? styles.hoursClosed : ''}`}>
                {group.hours.map((time, i) => (
                  <span key={i} className={styles.timeSlot}>
                    {time}
                  </span>
                ))}
              </dd>
            </div>
          );
        })}
      </dl>
      {openingHours.closed_on_holidays && <p className={styles.note}>An Feiertagen geschlossen</p>}
    </div>
  );
}
