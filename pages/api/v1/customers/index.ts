import { NextApiResponse, NextApiRequest } from 'next';
import { method } from '../../../../constants';
import client, { Customer } from '../../../../lib';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  try {
    console.log('req.method', req.method);
    await client.connect();
    if (req.method === method.POST) {
      return res.status(200).json({ data: ['customer'] });
    }

    Customer.find().toArray(async (error, result) => {
      if (error) throw error;

      await client.close();
      return res.status(200).json({ data: result, error, message: 'Success' });
    });
  } catch (error) {
    await client.close();
    return res
      .status(500)
      .json({ data: null, error: error.message, message: 'Fall' });
  }
};

export default handler;
