import React from 'react';

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { label?: string; error?: string; textClassName?: string };

export const TextInput = ({ label, error, textClassName, ...props }: Props) => {
  return (
    <div className="flex flex-col w-full space-y-1">
      <label className={`text-sm ${textClassName}`}>{label}</label>
      <input
        {...props}
        className={
          props.className
            ? props.className
            : 'border border-black rounded-xl py-1 px-2 focus:outline-gray-300'
        }
      >
        {props.value}
      </input>
    </div>
  );
};
