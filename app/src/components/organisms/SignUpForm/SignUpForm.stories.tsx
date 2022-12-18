import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { SignUpForm } from './SignUpForm';

const Template: Story<ComponentProps<typeof SignUpForm>> = (args) => (
  <SignUpForm {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'SignUpForm';

export default {
  component: SignUpForm,
  title: 'Organisms/SignUpForm',
};