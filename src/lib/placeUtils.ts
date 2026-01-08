import type { Place } from './types';

/** Extracts data from deeply nested API structure: place.addresses[0].business... */

export function getPlaceName(place: Place): string {
  return place.addresses[0]?.business?.identities[0]?.name ?? 'Unknown';
}

export function getPlaceCategory(place: Place): string {
  const category = place.addresses[0]?.business?.categories[0];
  return category?.name?.de ?? category?.name?.en ?? '';
}

export function getPlaceCategoryEmoji(place: Place): string {
  return place.addresses[0]?.business?.categories[0]?.emoji ?? '';
}

export function formatAddress(place: Place): string {
  const where = place.addresses[0]?.where;
  if (!where) return '';
  return `${where.street} ${where.house_number}, ${where.zipcode} ${where.city}`;
}

export function getPhone(place: Place): string | undefined {
  const contacts = place.addresses[0]?.contacts ?? [];
  const phone = contacts.find((c) => c.contact_type === 'phone');
  return phone?.formatted_service_code;
}

export function getWebsite(place: Place): string | undefined {
  const contacts = place.addresses[0]?.contacts ?? [];
  const url = contacts.find((c) => c.contact_type === 'url');
  return url?.formatted_service_code;
}
