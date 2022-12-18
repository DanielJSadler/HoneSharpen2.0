import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { LogIn } from './LogIn';

const Template: Story<ComponentProps<typeof LogIn>> = (args) => <LogIn {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'LogIn';

export default {
  component: LogIn,
  title: 'Organisms/LogIn',
};
