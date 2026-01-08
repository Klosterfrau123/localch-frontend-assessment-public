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
