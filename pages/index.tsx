import { useEffect } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../src/components/templates/mainLayout';
import Heading from '../src/components/atoms/Heading';
import MainTable from '../src/components/organisms/mainTable';
import React from 'react';
import getCustomers from '../services/customers';

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  const [rowData, setRowData] = React.useState<Customer[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = React.useCallback(async () => {
    const data = await getCustomers();
    setRowData(data);
  }, []);

  return (
    <MainLayout title="Home">
      <Heading type={'h1'} modifiers={['mayGreen', 'center']}>
        Title
      </Heading>

      <button onClick={fetchData}>Click</button>

      <MainTable rowData={rowData} />
    </MainLayout>
  );
};

export default IndexPage;
