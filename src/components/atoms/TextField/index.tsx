import type { NextPage } from 'next';
import React from 'react';
import mapModifiers from '../../../utils/functions';
import InputWrapper from '../Input';

interface TextFieldProps {
  modifiers?: GeneralStyle[];
  size?: InputSize;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  defaultValue?: string | number;
  name?: string;
}

const TextField: NextPage<TextFieldProps> = ({
  modifiers,
  size,
  onChange,
  value,
  defaultValue,
  name,
}) => {
  return (
    <InputWrapper size={size} modifiers={modifiers}>
      <input
        className={mapModifiers('a-textField', modifiers)}
        type="text"
        name={name}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

export default TextField;
