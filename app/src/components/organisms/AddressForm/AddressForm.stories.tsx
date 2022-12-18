import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { AddressForm } from './AddressForm';

const Template: Story<ComponentProps<typeof AddressForm>> = (args) => (
  <AddressForm {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'AddressForm';

export default {
  component: AddressForm,
  title: 'Organisms/AddressForm',
};