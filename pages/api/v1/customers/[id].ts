import { NextApiResponse, NextApiRequest } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const { id } = req.query;
  res.status(200).json({ data: 'hihihi', id });
};

export default handler;
