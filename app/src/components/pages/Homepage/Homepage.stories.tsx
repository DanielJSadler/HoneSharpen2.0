import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { Homepage } from './Homepage';

const Template: Story<ComponentProps<typeof Homepage>> = (args) => (
  <Homepage {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'Homepage';

export default {
  component: Homepage,
  title: 'Pages/Homepage',
};