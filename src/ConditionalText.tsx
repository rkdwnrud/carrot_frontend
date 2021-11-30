import { useState, MouseEvent, ChangeEvent } from "react";
const ConditionalText = () => {
  const [name, setName] = useState<string>("");
  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    const myName = event.currentTarget.value;
    setName(myName);
  };

  return (
    <section>
      <article>{name.length > 5 && name}</article>
      <input type="text" onChange={updateName} />
    </section>
  );
};
export default ConditionalText;
