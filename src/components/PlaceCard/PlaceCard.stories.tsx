import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { Place } from '@/lib/api';
import { PlaceCard } from './PlaceCard';

const mockPlace: Place = {
  local_entry_id: 'GXvPAor1ifNfpF0U5PTG0w',
  language: 'de',
  addresses: [
    {
      business: {
        identities: [{ name: 'Casa Ferlin', profession: 'Chiantiquelle' }],
        categories: [
          {
            id: 'lmwa2OSdl1x6KTmGOnXiZw',
            emoji: '🍝🇮🇹',
            name: { de: 'Italienische Küche', en: 'Italian cuisine' },
          },
        ],
      },
      where: {
        street: 'Stampfenbachstrasse',
        house_number: '38',
        zipcode: 8006,
        city: 'Zürich',
        state: 'ZH',
      },
      contacts: [
        {
          contact_type: 'phone',
          formatted_service_code: '044 362 35 09',
          call_link: '+41443623509',
        },
        {
          contact_type: 'url',
          formatted_service_code: 'www.casaferlin.ch',
          url: 'http://www.casaferlin.ch',
        },
      ],
    },
  ],
  place_feedback_summary: {
    recommendations: 4794,
    positive_recommendations: 4664,
    ratings_count: 4312,
    average_rating: 4.78,
    positive_recommendation_percentage: 97,
    rating_summaries: [
      { dimension: 'ambiente', count: 1477, average: 4.24, display: true },
      { dimension: 'service', count: 2917, average: 4.81, display: true },
      { dimension: 'food', count: 2870, average: 4.83, display: true },
    ],
  },
};

const mockPlaceMinimal: Place = {
  local_entry_id: 'minimal',
  language: 'de',
  addresses: [
    {
      business: {
        identities: [{ name: 'Kleines Café' }],
        categories: [],
      },
      where: {
        street: 'Hauptstrasse',
        house_number: '1',
        zipcode: 8000,
        city: 'Zürich',
      },
      contacts: [],
    },
  ],
};

const meta: Meta<typeof PlaceCard> = {
  title: 'Components/PlaceCard',
  component: PlaceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PlaceCard>;

export const Default: Story = {
  args: {
    place: mockPlace,
  },
};

const baseFeedbackSummary = mockPlace.place_feedback_summary ?? {
  recommendations: 0,
  positive_recommendations: 0,
  ratings_count: 0,
  average_rating: 0,
  positive_recommendation_percentage: 0,
  rating_summaries: [],
};

export const HighRating: Story = {
  args: {
    place: {
      ...mockPlace,
      place_feedback_summary: {
        ...baseFeedbackSummary,
        average_rating: 5.0,
        positive_recommendation_percentage: 100,
      },
    },
  },
};

export const LowRating: Story = {
  args: {
    place: {
      ...mockPlace,
      place_feedback_summary: {
        ...baseFeedbackSummary,
        average_rating: 2.5,
        positive_recommendation_percentage: 45,
      },
    },
  },
};

export const Minimal: Story = {
  args: {
    place: mockPlaceMinimal,
  },
};

export const NoRatings: Story = {
  args: {
    place: {
      ...mockPlace,
      place_feedback_summary: undefined,
    },
  },
};
