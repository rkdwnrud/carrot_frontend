import React from "react";
import ButtomAppBar from "./pages/Test/components/ButtomAppBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import TradeEvent from "./pages/Home/components/TradeEvent";
import TreadeInformation from "./pages/Home/components/TradeInformation";
import TradeDetail from "./pages/TradeDetail";
import { Grid, Avatar, Typography, Button } from "@mui/material";
import Chat from "./pages/Chat/index";

const App = (): JSX.Element => {
  return (
    <main>
      <Chat />
      {/* <AppBar position="fixed"> */}
      {/* <Toolbar> */}
      {/* </Toolbar> */}
      {/* </AppBar> */}
      {/* <Toolbar /> */}
      {/* <TradeDetail /> */}
      {/* <ButtomAppBar /> */}
    </main>
  );
};
export default App;
