import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { Place } from '@/lib/types';
import { PlaceDetail } from './PlaceDetail';

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
  opening_hours: {
    days: {
      monday: [],
      tuesday: [
        { type: 'OPEN', start: '11:30', end: '15:00' },
        { type: 'OPEN', start: '18:30', end: '00:00' },
      ],
      wednesday: [
        { type: 'OPEN', start: '11:30', end: '15:00' },
        { type: 'OPEN', start: '18:30', end: '00:00' },
      ],
      thursday: [
        { type: 'OPEN', start: '11:30', end: '15:00' },
        { type: 'OPEN', start: '18:30', end: '00:00' },
      ],
      friday: [
        { type: 'OPEN', start: '11:30', end: '15:00' },
        { type: 'OPEN', start: '18:30', end: '00:00' },
      ],
      saturday: [{ type: 'OPEN', start: '18:00', end: '00:00' }],
      sunday: [{ type: 'OPEN', start: '11:30', end: '15:00' }],
    },
    closed_on_holidays: true,
    open_by_arrangement: false,
  },
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

const meta: Meta<typeof PlaceDetail> = {
  title: 'Pages/PlaceDetail',
  component: PlaceDetail,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PlaceDetail>;

export const Default: Story = {
  args: {
    place: mockPlace,
    showBackButton: false,
  },
};

export const WithBackButton: Story = {
  args: {
    place: mockPlace,
    showBackButton: true,
  },
};

export const WithoutOpeningHours: Story = {
  args: {
    place: {
      ...mockPlace,
      opening_hours: undefined,
    },
    showBackButton: false,
  },
};

export const WithoutRatings: Story = {
  args: {
    place: {
      ...mockPlace,
      place_feedback_summary: undefined,
    },
    showBackButton: false,
  },
};

export const Minimal: Story = {
  args: {
    place: {
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
    },
    showBackButton: false,
  },
};
