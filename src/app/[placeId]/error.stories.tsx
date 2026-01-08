import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import ErrorPage from './error';

const meta: Meta<typeof ErrorPage> = {
  title: 'Pages/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

// No-op for story interactions
const noop = () => {};

export const NotFound: Story = {
  args: {
    error: Object.assign(new Error('Place not found'), { statusCode: 404 }),
    reset: noop,
  },
};

export const NetworkError: Story = {
  args: {
    error: Object.assign(new Error('Network error'), { context: 'NETWORK' }),
    reset: noop,
  },
};

export const GenericError: Story = {
  args: {
    error: new Error('Something went wrong'),
    reset: noop,
  },
};
