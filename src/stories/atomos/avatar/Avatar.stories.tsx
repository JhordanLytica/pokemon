import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
  title: 'Atomos/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: '#B92952',
  },
} as unknown as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#B92952',
  size: 'small'
};