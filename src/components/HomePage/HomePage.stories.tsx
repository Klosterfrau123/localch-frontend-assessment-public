import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { Place } from '@/lib/types';
import { HomePage } from './HomePage';

const mockPlaces: Place[] = [
  {
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
        ],
      },
    ],
    place_feedback_summary: {
      recommendations: 4794,
      positive_recommendations: 4664,
      ratings_count: 4312,
      average_rating: 4.78,
      positive_recommendation_percentage: 97,
      rating_summaries: [],
    },
  },
  {
    local_entry_id: 'ohGSnJtMIC5nPfYRi_HTAg',
    language: 'de',
    addresses: [
      {
        business: {
          identities: [{ name: 'Café Sprüngli' }],
          categories: [
            {
              id: 'cafe123',
              emoji: '☕🍫',
              name: { de: 'Café & Konditorei', en: 'Café & Pastry' },
            },
          ],
        },
        where: {
          street: 'Bahnhofstrasse',
          house_number: '21',
          zipcode: 8001,
          city: 'Zürich',
        },
        contacts: [
          {
            contact_type: 'phone',
            formatted_service_code: '044 224 46 46',
            call_link: '+41442244646',
          },
        ],
      },
    ],
    place_feedback_summary: {
      recommendations: 2500,
      positive_recommendations: 2400,
      ratings_count: 1800,
      average_rating: 4.65,
      positive_recommendation_percentage: 96,
      rating_summaries: [],
    },
  },
];

const meta: Meta<typeof HomePage> = {
  title: 'Pages/A HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  args: {
    places: mockPlaces,
  },
};

export const ManyPlaces: Story = {
  args: {
    places: [
      ...mockPlaces,
      {
        ...mockPlaces[0],
        local_entry_id: 'place3',
        addresses: [
          {
            ...mockPlaces[0].addresses[0],
            business: {
              ...mockPlaces[0].addresses[0].business,
              identities: [{ name: 'Pizzeria Napoli' }],
            },
          },
        ],
      },
      {
        ...mockPlaces[1],
        local_entry_id: 'place4',
        addresses: [
          {
            ...mockPlaces[1].addresses[0],
            business: {
              ...mockPlaces[1].addresses[0].business,
              identities: [{ name: 'Bäckerei Müller' }],
            },
          },
        ],
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    places: [],
  },
};
