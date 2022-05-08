import moment from 'moment';
import { NextApiRequest, NextApiResponse } from 'next';
import client, { Customer } from '../../lib';
import { createId } from '../../src/utils/functions';

export default {
  get: async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
      await client.connect();

      Customer.find().toArray(async (error, result) => {
        if (error) throw error;

        await client.close();
        return res
          .status(200)
          .json({ data: result, error, message: 'Success' });
      });
    } catch (error) {
      await client.close();
      return res
        .status(500)
        .json({ data: null, error: error.message, message: 'Fall' });
    }
  },
  post: async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
      await client.connect();
      const customerUpload: CustomerModel = req.body;

      const dup = await Customer.findOne({
        phoneNumber: customerUpload.phoneNumber,
      });

      if (dup) throw new Error('Dupplicate customer with phone number');

      Customer.find({
        id: { $regex: `${moment().format('YYYYMMDD')}` },
      }).toArray(async (error, result) => {
        if (error) throw error;

        const id = createId(result.length);
        customerUpload.id = id;

        await Customer.insertOne(customerUpload);

        return res.status(200).json({ data: customerUpload });
      });
    } catch (error) {
      await client.close();
      return res
        .status(500)
        .json({ data: null, error: error.message, message: 'Fall' });
    }
  },
};
