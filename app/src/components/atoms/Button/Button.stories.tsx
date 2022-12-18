import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Button } from './Button';

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'Button';

export default {
  component: Button,
  title: 'Atoms/Button',
};