import type { Meta, StoryObj } from '@storybook/react';
import { Card } from "../../../components/ui";

const meta = {
  title: 'UI/Card',
  component: Card
} as Meta<typeof Card>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default",
    imageUri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png'
  },
};

export const OptionOne: Story = {
  args: {
    title: "Option 1",
    imageUri: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png'
  },
};