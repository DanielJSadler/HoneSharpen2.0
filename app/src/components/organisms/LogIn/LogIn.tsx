import React from 'react';
import { Button, TextInput } from '../../atoms';
interface Props {}

export const LogIn = (props: Props) => {
  return (
    <div className="border border-white bg-black p-10 rounded-lg space-y-2 flex flex-col justify-center items-center shadow-lg shadow-white">
      <TextInput
        type="email"
        label="Email"
        textClassName="text-white"
        className="bg-black border border-white py-1 px-2 text-white focus:outline-white"
      />
      <TextInput
        type="password"
        label="Pasword"
        textClassName="text-white"
        className="bg-black border border-white py-1 px-2 text-white focus:outline-white "
      />
      <div className="pt-2">
        <Button>Log In</Button>
      </div>
      <a>
        <p className="text-white hover:cursor-pointer">Don't have an account? Create one here</p>
      </a>
    </div>
  );
};
