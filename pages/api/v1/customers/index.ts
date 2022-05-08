import { NextApiResponse, NextApiRequest } from 'next';
import { method } from '../../../../constants';
import CustomerController from '../../../../controllers/customers';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  if (req.method === method.GET) {
    return await CustomerController.get(req, res);
  }
  if (req.method === method.POST) {
    return await CustomerController.post(req, res);
  }
};

export default handler;
