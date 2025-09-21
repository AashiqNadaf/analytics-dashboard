export type Order = {
  id: string;
  user: string;
  project: string;
  address: string;
  status: string;
  date: Date;
  userProfile: string;
};

export type OrderList = {
  orders: Order[];
};
