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
}

const TextField: NextPage<TextFieldProps> = ({
  modifiers,
  size,
  onChange,
  value,
  defaultValue,
}) => {
  return (
    <InputWrapper size={size} modifiers={modifiers}>
      <input
        className={mapModifiers('a-textField', modifiers)}
        type="text"
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
      />
    </InputWrapper>
  );
};

export default TextField;
