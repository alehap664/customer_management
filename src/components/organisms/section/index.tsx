import type { NextPage } from 'next';
import React from 'react';
import mapModifiers from '../../../utils/functions';
import Heading from '../../atoms/Heading';

interface SectionProps {
  children: React.ReactNode;
  modifiers: GeneralStyle[];
  title?: string;
}

const Section: NextPage<SectionProps> = ({ children, modifiers, title }) => {
  return (
    <section className={mapModifiers('o-section', modifiers)}>
      <Heading type={'h1'}>{title}</Heading>
      {children}
    </section>
  );
};

export default Section;
