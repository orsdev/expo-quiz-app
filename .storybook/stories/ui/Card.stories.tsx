import type { Meta, StoryObj } from '@storybook/react';
import { Card } from "../../../components/ui";

export const ActionsData = {
  onClick(){
    console.log('Card clicked')
  }
};

const meta = {
  title: 'UI/Card',
  component: Card,
  //👇 Our exports that end in "Data"(ActionsData) are not stories.
  excludeStories: /.*Data$/,
} as Meta<typeof Card>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '0',
    text: "Default",
    image: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png',
    ...ActionsData
  },
};

export const OptionOne: Story = {
  args: {
    id: '1',
    text: "Option 1",
    image: 'https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png',
    ...ActionsData
  },
};