import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { TextInput } from './TextInput';

const Template: Story<ComponentProps<typeof TextInput>> = (args) => (
  <TextInput {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'TextInput';

export default {
  component: TextInput,
  title: 'Atoms/TextInput',
};