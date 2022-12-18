import React from 'react';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Button = ({ ...props }: Props) => (
  <button
    type="submit"
    className="bg-black border border-white hover:bg-white hover:border-black text-white hover:text-black py-1 px-2 duration-300"
    {...props}
  ></button>
);
