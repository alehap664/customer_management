import type { NextPage } from 'next';
import React from 'react';
import mapModifiers from '../../../utils/functions';

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  type: HeadingType;
  modifiers?: GeneralTextStyle[];
  children: React.ReactNode;
}

const Heading: NextPage<HeadingProps> = ({ type, modifiers, children }) => {
  return (
    <div className={mapModifiers('a-heading', type, modifiers)}>{children}</div>
  );
};

export default Heading;
