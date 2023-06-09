import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card
}

type Story = StoryObj<typeof Card>

export const Primary: Story = {
  args: {
    theme: 'primary',
    children: 'Children карточки',
    style: { color: 'white' }
  }
}

export const Border: Story = {
  args: {
    theme: 'border',
    children: 'Children карточки'
  }
}

export default meta
