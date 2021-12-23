import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'Atomos/Input',
  component: Input,
  argTypes: {
    backgroundColor: '#B92952',
  },
} as unknown as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'small'
};