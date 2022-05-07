import type { NextPage } from 'next';
import React from 'react';
import mapModifiers from '../../../utils/functions';

interface TextProps {
  modifiers: GeneralTextStyle[];
  children: React.ReactNode;
}

const Text: NextPage<TextProps> = ({ modifiers, children }) => {
  return <div className={mapModifiers('a-text', modifiers)}>{children}</div>;
};

export default Text;
