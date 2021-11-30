import { useState, MouseEvent, ChangeEvent } from "react";
const HiddenName = () => {
  const [name, setName] = useState<string>("");
  const hideName = (event: ChangeEvent<HTMLInputElement>) => {
    let myName = event.currentTarget.value;
    if (myName.length > 2) {
      const namelength = myName.length;
      const endName = myName.substring(namelength - 1, namelength);
      const startName = myName.substring(0, 1);
      const hiddenPart = "*".repeat(namelength - 2);
      myName = startName + hiddenPart + endName;
    }
    setName(myName);
  };

  return (
    <section>
      <article>{name}</article>
      <p>hiddenname</p>
      <input type="text" onChange={hideName} />
    </section>
  );
};
export default HiddenName;
