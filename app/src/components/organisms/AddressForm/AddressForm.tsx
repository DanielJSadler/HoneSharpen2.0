import React from 'react';
import { TextInput } from '../../atoms';

interface Props {}

export const AddressForm = (props: Props) => (
  <div className="grid grid-cols-2 gap-2">
    <TextInput label="First name" />
    <TextInput label="Surname" />
    <TextInput label="Email" />
    <TextInput label="Phone number (optional)" />
    <TextInput label="Address line 1" />
    <TextInput label="Address line 2 (optional)" />
    <TextInput label="Town/City" />
    <TextInput label="County" />
    <TextInput label="Postcode" />
  </div>
);
