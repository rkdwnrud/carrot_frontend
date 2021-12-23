type ChatType = {
  id: string;
  sender: string;
  message: string;
  sendedAt: Date;
};

export const messages: ChatType[] = [
  {
    id: "1",
    sender: "me",
    message: "얼마에 파시나요",
    sendedAt: new Date(),
  },
  {
    id: "2",
    sender: "you",
    message: "16000원",
    sendedAt: new Date(),
  },
  {
    id: "3",
    sender: "me",
    message: "할인해주실수있나요",
    sendedAt: new Date(),
  },
];
