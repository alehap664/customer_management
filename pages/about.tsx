import { NextPage } from 'next';
import Link from 'next/link';
import MainLayout from '../src/components/templates/mainLayout';

interface AboutPageProps {}

const AboutPage: NextPage<AboutPageProps> = () => (
  <MainLayout title="About">
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home nef</a>
      </Link>
    </p>
  </MainLayout>
);

export default AboutPage;
