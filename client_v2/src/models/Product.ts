export interface Product {
  id: string;
  name: string;
  amount: number;
  unit: string;
  user: string;
  status: 'Actief' | 'Inactief';
  category: string;
  dateUpdated: Date;
}
