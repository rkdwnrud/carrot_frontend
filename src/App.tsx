import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";
import Title from "./Title";
import Text from "./Text";
import Photo from "./Photo";
import Counter from "./Counter";
import Adder from "./Adder";
import WelcomeName from "./WelcomName";
import ConditionalText from "./ConditionalText";
import HiddenName from "./HiddenName";
import Pad from "./pages/Test/components/Pad";
import Calculator from "./pages/Test/components/Calculator";
import Test from "./pages/Test";

const App = () => {
  const [latestName, setLatestName] = useState("");
  const updateLatestName = (name: string) => {
    setLatestName(name);
  };
  const preventKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event.key);
    if (event.key === "h") {
      event.preventDefault();
      event.stopPropagation();
    }
  };
  return (
    <>
      <Calculator />
      <HiddenName />
      <ConditionalText />
      <WelcomeName />
      <Adder />
      <div>
        <Counter defaultCount={10} />
      </div>
      <input type="text" onKeyDown={preventKeyDown} />
      <Button name="hello" callback={updateLatestName} />
      <Button name="world" callback={updateLatestName} />
      <Button name="nextop" callback={updateLatestName} />
    </>
  );
};
export default App;
