import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { createCustomer } from '../services/customers';
import TextField from '../src/components/atoms/TextField';
import MainLayout from '../src/components/templates/mainLayout';

interface CreateCustomerPageProps {}

const initCustomer: Customer = {
  id: '',
  fullName: '',
  phoneNumber: '',
  address: '',
  createdAt: '',
  updatedAt: '',
  from: 'FBA',
  purpose: 'MDT',
  note: '',
};

const CreateCustomerPage: NextPage<CreateCustomerPageProps> = () => {
  const [customer, setCustomer] = React.useState(initCustomer);
  const [isLoading, setIsLoading] = React.useState(false);

  const onChange =
    (name: keyof Customer) =>
    (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
      setCustomer((value) => {
        value[name] = event.target.value as never;
        return { ...value };
      });
    };

  React.useEffect(() => {
    console.log('customer', customer);
  }, [customer]);

  const onSubmit = async () => {
    setIsLoading(true);
    await createCustomer(customer);
    setIsLoading(false);
  };

  return (
    <MainLayout title="Thêm Khách Hàng">
      <h1>About</h1>
      <p>This is the about page</p>

      <label htmlFor="fullName">Full Name</label>
      <br />
      <TextField
        modifiers={['mayGreen']}
        name="fullName"
        onChange={onChange('fullName')}
      />
      <br />

      <label htmlFor="phoneNumber">Phone Number</label>
      <br />
      <TextField
        modifiers={['mayGreen']}
        name="phoneNumber"
        onChange={onChange('phoneNumber')}
      />
      <br />

      <label htmlFor="address">Address</label>
      <br />
      <TextField
        modifiers={['mayGreen']}
        name="address"
        onChange={onChange('address')}
      />
      <br />

      <label htmlFor="from">From</label>
      <br />
      <select name="from" onChange={onChange('from')}>
        <option value="FBA">FBA</option>
        <option value="ZLA">ZLA</option>
        <option value="SPH">SPH</option>
        <option value="GAW">GAW</option>
        <option value="SEO">SEO</option>
        <option value="LFL">LFL</option>
        <option value="RLS">RLS</option>
        <option value="SED">SED</option>
      </select>
      <br />

      <label htmlFor="purpose">Purpose</label>
      <br />
      <select name="purpose" onChange={onChange('purpose')}>
        <option value="MDT">MDT</option>
        <option value="MDO">MDO</option>
      </select>
      <br />

      <label htmlFor="note">Note</label>
      <br />
      <TextField
        modifiers={['mayGreen']}
        name="note"
        onChange={onChange('note')}
      />
      <br />

      <button onClick={onSubmit} disabled={isLoading}>
        Submit
      </button>

      <p>
        <Link href="/">
          <a>Go home nè</a>
        </Link>
      </p>
    </MainLayout>
  );
};

export default CreateCustomerPage;
