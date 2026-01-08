import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'Components/StarRating',
  component: StarRating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StarRating>;

export const HighRating: Story = {
  args: {
    rating: 4.8,
    showValue: true,
    size: 'md',
  },
};

export const LowRating: Story = {
  args: {
    rating: 2.5,
    showValue: true,
    size: 'md',
  },
};
