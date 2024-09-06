import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar} from "../../../components/ui";

export const ActionsData = {
    onClick(){
      console.log('Card clicked')
    }
  };
  
  const meta = {
    title: 'UI/ProgressBar',
    component: ProgressBar,
    //👇 Our exports that end in "Data"(ActionsData) are not stories.
    excludeStories: /.*Data$/,
  } as Meta<typeof ProgressBar>

  export default meta;

  const totalLives = 4;
  const total = 4;

  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
        progress: 0,
        total,
        lives: totalLives
    }
  };

  export const TwentyFivePercent: Story = {
    args: {
        progress: 1,
        total,
        lives: totalLives
    }
  }

  export const FiftyPercent: Story = {
    args: {
        progress: 2,
        total,
        lives: totalLives
    }
  }

  export const HundredPercent: Story = {
    args: {
        progress: 4,
        total,
        lives: totalLives
    }
  }