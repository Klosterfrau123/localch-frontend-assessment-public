import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { OpeningHours as OpeningHoursType } from '@/lib/types';
import { OpeningHours } from './OpeningHours';

const weekdayHours: OpeningHoursType = {
  days: {
    monday: [
      { start: '11:30', end: '14:00', type: 'OPEN' },
      { start: '18:30', end: '22:00', type: 'OPEN' },
    ],
    tuesday: [
      { start: '11:30', end: '14:00', type: 'OPEN' },
      { start: '18:30', end: '22:00', type: 'OPEN' },
    ],
    wednesday: [
      { start: '11:30', end: '14:00', type: 'OPEN' },
      { start: '18:30', end: '22:00', type: 'OPEN' },
    ],
    thursday: [
      { start: '11:30', end: '14:00', type: 'OPEN' },
      { start: '18:30', end: '22:00', type: 'OPEN' },
    ],
    friday: [
      { start: '11:30', end: '14:00', type: 'OPEN' },
      { start: '18:30', end: '22:00', type: 'OPEN' },
    ],
  },
  closed_on_holidays: true,
  open_by_arrangement: false,
};

const fullWeekHours: OpeningHoursType = {
  days: {
    monday: [{ start: '08:00', end: '22:00', type: 'OPEN' }],
    tuesday: [{ start: '08:00', end: '22:00', type: 'OPEN' }],
    wednesday: [{ start: '08:00', end: '22:00', type: 'OPEN' }],
    thursday: [{ start: '08:00', end: '22:00', type: 'OPEN' }],
    friday: [{ start: '08:00', end: '22:00', type: 'OPEN' }],
    saturday: [{ start: '10:00', end: '18:00', type: 'OPEN' }],
    sunday: [{ start: '10:00', end: '18:00', type: 'OPEN' }],
  },
  closed_on_holidays: false,
  open_by_arrangement: false,
};

const mixedHours: OpeningHoursType = {
  days: {
    tuesday: [
      { start: '11:30', end: '15:00', type: 'OPEN' },
      { start: '18:30', end: '00:00', type: 'OPEN' },
    ],
    wednesday: [
      { start: '11:30', end: '15:00', type: 'OPEN' },
      { start: '18:30', end: '00:00', type: 'OPEN' },
    ],
    thursday: [
      { start: '11:30', end: '15:00', type: 'OPEN' },
      { start: '18:30', end: '00:00', type: 'OPEN' },
    ],
    friday: [
      { start: '11:30', end: '15:00', type: 'OPEN' },
      { start: '18:30', end: '00:00', type: 'OPEN' },
    ],
    saturday: [{ start: '18:00', end: '00:00', type: 'OPEN' }],
    sunday: [{ start: '11:30', end: '15:00', type: 'OPEN' }],
  },
  closed_on_holidays: false,
  open_by_arrangement: false,
};

const meta: Meta<typeof OpeningHours> = {
  title: 'Components/OpeningHours',
  component: OpeningHours,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px', width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OpeningHours>;

export const WeekdaysOnly: Story = {
  args: {
    openingHours: weekdayHours,
  },
};

export const FullWeek: Story = {
  args: {
    openingHours: fullWeekHours,
  },
};

export const MixedSchedule: Story = {
  args: {
    openingHours: mixedHours,
  },
};

export const WeekendOnly: Story = {
  args: {
    openingHours: {
      days: {
        saturday: [{ start: '10:00', end: '20:00', type: 'OPEN' }],
        sunday: [{ start: '10:00', end: '20:00', type: 'OPEN' }],
      },
      closed_on_holidays: false,
      open_by_arrangement: true,
    },
  },
};
