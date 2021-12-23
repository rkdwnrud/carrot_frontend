import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { create } from "domain";
import moment from "moment";
import { tradeItems } from "../data";

type TradeInformationType = {
  title: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
};
const TreadeInformation = (information: TradeInformationType): JSX.Element => {
  const { title, location, price, createdAt, updatedAt } = information;
  const date = updatedAt != null ? moment(updatedAt) : moment(createdAt);
  const displayDate = date.format("yyyy-MM-DD HH:mm");

  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="subtitle1" style={{ color: "rgba(0,0,0,0.5)" }}>
        {location}*{displayDate}
      </Typography>
      <Typography variant="subtitle1">
        <strong>{price}원</strong>
      </Typography>
    </Box>
  );
};
export default TreadeInformation;
