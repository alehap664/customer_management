import axiosInstance from '../common/instance';

export const getCustomers = async (): Promise<Customer[]> => {
  const res = await axiosInstance.get('customers');
  console.log('res', res);
  return res.data.data;
};

export const createCustomer = async (customer: Customer): Promise<Customer> => {
  const res = await axiosInstance.post('customers', customer);
  console.log('res', res);
  return res.data.data;
};

export default getCustomers;
