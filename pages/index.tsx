import { useEffect } from 'react';
import type { NextPage } from 'next';
import MainLayout from '../src/components/templates/mainLayout';
import Heading from '../src/components/atoms/Heading';
import MainTable from '../src/components/organisms/mainTable';
import React from 'react';
import getCustomers, { createCustomer } from '../services/customers';
import moment from 'moment';
import { FORMAT_DAY } from '../constants';

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

  const fetchPostData = async () => {
    const toDay = moment().format(FORMAT_DAY);
    const customersCreatedToday = (await getCustomers()).filter((customer) => {
      const customerCreatedAt = moment(customer.createdAt, FORMAT_DAY).format(
        FORMAT_DAY,
      );
      return toDay === customerCreatedAt;
    });

    const customer = {
      id: `${moment().format('YYYY')}${moment().format('MM')}${moment().format(
        'DD',
      )}${customersCreatedToday.length + 1}`,
      fullName: 'Nguyễn Đức Thịnh ' + (customersCreatedToday.length + 1),
      phoneNumber: '0777020078',
      address: '171/10 Tuy Lý Vương P12 Q8',
      createdAt: toDay,
      updatedAt: toDay,
      from: 'FBA' as CustomerFrom,
      purpose: 'MDT' as CustomerPurpose,
      note: 'Note',
    };
    const customerRes = await createCustomer(customer);
    const newRowData = [...rowData];
    newRowData.push(customerRes);
    setRowData([...newRowData]);
  };

  return (
    <MainLayout title="Home">
      <Heading type={'h1'} modifiers={['mayGreen', 'center']}>
        Title
      </Heading>

      <button onClick={fetchData}>Click</button>
      <button onClick={fetchPostData}>Post</button>

      <MainTable rowData={rowData} />
    </MainLayout>
  );
};

export default IndexPage;
