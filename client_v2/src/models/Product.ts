export interface Product {
  id: string;
  name: string;
  amount: number;
  unit: string;
  user: string;
  status: ProductStatus;
  category: string;
  createdAt: string;
}

export const productStatus = ['Actief', 'Inactief'];
export type ProductStatus = (typeof productStatus)[number];
