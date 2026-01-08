const API_BASE = 'https://web.staticlocal.ch/coding-session-rest-api';

export interface TimeSlot {
  start: string;
  end: string;
  type: string;
}

export interface OpeningHours {
  days: Partial<
    Record<
      'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday',
      TimeSlot[]
    >
  >;
  closed_on_holidays: boolean;
  open_by_arrangement: boolean;
}

export interface RatingDimension {
  dimension: string;
  count: number;
  average: number;
  display: boolean;
}

export interface FeedbackSummary {
  recommendations: number;
  positive_recommendations: number;
  ratings_count: number;
  average_rating: number;
  positive_recommendation_percentage: number;
  rating_summaries: RatingDimension[];
}

export interface Contact {
  contact_type: 'phone' | 'url' | 'email';
  formatted_service_code: string;
  call_link?: string;
  url?: string;
}

export interface Category {
  id: string;
  emoji?: string;
  name: {
    de?: string;
    fr?: string;
    it?: string;
    en?: string;
  };
}

export interface Address {
  business: {
    identities: Array<{
      name: string;
      profession?: string;
    }>;
    categories: Category[];
  };
  where: {
    street: string;
    house_number: string;
    zipcode: number;
    city: string;
    state?: string;
  };
  contacts: Contact[];
}

export interface Place {
  local_entry_id: string;
  language: string;
  addresses: Address[];
  place_feedback_summary?: FeedbackSummary;
  opening_hours?: OpeningHours;
}

export async function fetchPlace(placeId: string): Promise<Place> {
  const response = await fetch(`${API_BASE}/${placeId}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch place: ${response.status}`);
  }

  return response.json();
}

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
