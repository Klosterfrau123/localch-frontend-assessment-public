import type { OpeningHours, TimeSlot } from './types';

export type DayKey =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export const DAYS: DayKey[] = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
];

export const DAY_LABELS: Record<DayKey, { short: string; full: string }> = {
  monday: { short: 'Mo', full: 'Montag' },
  tuesday: { short: 'Di', full: 'Dienstag' },
  wednesday: { short: 'Mi', full: 'Mittwoch' },
  thursday: { short: 'Do', full: 'Donnerstag' },
  friday: { short: 'Fr', full: 'Freitag' },
  saturday: { short: 'Sa', full: 'Samstag' },
  sunday: { short: 'So', full: 'Sonntag' },
};

export function getCurrentDay(): DayKey {
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

export function formatTimeSlots(slots: TimeSlot[] | undefined): string[] {
  if (!slots || slots.length === 0) return ['Geschlossen'];
  const openSlots = slots.filter((slot) => slot.type === 'OPEN');
  if (openSlots.length === 0) return ['Geschlossen'];
  return openSlots.map((slot) => `${slot.start}–${slot.end}`);
}

export function formatTimeSlotsString(slots: TimeSlot[] | undefined): string {
  return formatTimeSlots(slots).join(', ');
}

export function formatTodayHours(openingHours: OpeningHours | undefined): string | null {
  if (!openingHours) return null;
  const today = getCurrentDay();
  const slots = openingHours.days[today];
  const formatted = formatTimeSlotsString(slots);
  return formatted === 'Geschlossen' ? 'Heute geschlossen' : `Heute: ${formatted}`;
}
