import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { FeedbackSummary } from '@/lib/types';
import { RatingSummary } from './RatingSummary';

const meta: Meta<typeof RatingSummary> = {
  title: 'Components/RatingSummary',
  component: RatingSummary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '350px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RatingSummary>;

const excellentFeedback: FeedbackSummary = {
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
};

const averageFeedback: FeedbackSummary = {
  recommendations: 50,
  positive_recommendations: 32,
  ratings_count: 45,
  average_rating: 3.2,
  positive_recommendation_percentage: 64,
  rating_summaries: [
    { dimension: 'ambiente', count: 40, average: 3.5, display: true },
    { dimension: 'service', count: 42, average: 3.0, display: true },
    { dimension: 'food', count: 38, average: 3.1, display: true },
  ],
};

export const Excellent: Story = {
  args: {
    feedback: excellentFeedback,
  },
};

export const Average: Story = {
  args: {
    feedback: averageFeedback,
  },
};
