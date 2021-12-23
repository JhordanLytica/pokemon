import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Section } from './Section';

export default {
  title: 'Moleculas/Section',
  component: Section,
  argTypes: {
    backgroundColor: '#B92952',
  },
} as unknown as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#ffffff',
};