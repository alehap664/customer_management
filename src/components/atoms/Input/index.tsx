import type { NextPage } from 'next';
import React from 'react';
import mapModifiers from '../../../utils/functions';

interface InputProps {
  modifiers?: GeneralStyle[];
  size?: InputSize;
  children: React.ReactNode;
}

const Input: NextPage<InputProps> = ({ modifiers, size = 'md', children }) => {
  return (
    <div className={mapModifiers('a-input', modifiers, size)}>
      {children}
      <fieldset className="a-input_fieldset"></fieldset>
    </div>
  );
};

export default Input;
