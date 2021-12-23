type TradeItem = {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
  interest?: number;
  chat?: number;
};

export const tradeItems: TradeItem[] = [
  {
    id: "1번",
    imageUrl: "123456",
    title: "1번",
    location: "./C",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 1000,
    chat: 1,
    interest: 1,
  },
];
