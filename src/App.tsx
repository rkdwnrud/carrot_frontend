import React from "react";
import ButtomAppBar from "./pages/Test/components/ButtomAppBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const App = (): JSX.Element => {
  return (
    <main>
      <AppBar position="fixed">
        <Toolbar></Toolbar>
      </AppBar>
      <Toolbar />
      내용
      <ButtomAppBar />
    </main>
  );
};
export default App;
