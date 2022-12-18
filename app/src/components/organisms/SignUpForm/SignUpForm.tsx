import React from 'react';
import { TextInput } from '../../atoms';

interface Props {}

export const SignUpForm = (props: Props) => (
  <div>
    <TextInput label="First name" />
    <TextInput label="Surname" />
    <TextInput label="Email" />
    <TextInput label="Password" />
    <TextInput label="Confirm password" />
  </div>
);
