import type { Meta, StoryObj } from '@storybook/vue3'
import AppButton from './AppButton.vue'

const meta: Meta<typeof AppButton> = {
  title: 'Components/AppButton',
  component: AppButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    isLoading: {
      control: 'boolean',
    },
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof AppButton>

export const Primary: Story = {
  args: {
    label: 'Add to Cart',
    variant: 'primary',
    isLoading: false,
  },
}

export const Secondary: Story = {
  args: {
    label: 'Remove from Cart',
    variant: 'secondary',
    isLoading: false,
  },
}

export const Loading: Story = {
  args: {
    label: 'Add to Cart',
    loadingLabel: 'Adding...',
    variant: 'primary',
    isLoading: true,
  },
}
export const TailwindTest = () => ({
  template: `<div class="bg-red-500 text-white p-4">Test Tailwind</div>`,
})