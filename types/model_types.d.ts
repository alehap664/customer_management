/**
 * - FBA: Facebook Ads
 * - ZLA: Zalo Ads
 * - SPH: Salephone
 * - GAW: Google Ads Word
 * - SEO: Search Engine Optimize
 * - LFL: Leaflets
 * - RLS: Relationship
 * - SED: Seeding
 */
type CustomerFrom =
  | 'FBA'
  | 'ZLA'
  | 'SPH'
  | 'GAW'
  | 'SEO'
  | 'LFL'
  | 'RLS'
  | 'SED';

/**
 * - MDT: Mua đầu tư
 * - MDO: Mua để ở
 */
type CustomerPurpose = 'MDT' | 'MDO';

type Customer = {
  id: string;
  fullName: string;
  phoneNumber: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  from: CustomerFrom;
  purpose: CustomerPurpose;
  note: string;
};
