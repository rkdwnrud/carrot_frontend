import { useState, MouseEvent, ChangeEvent } from "react";

const WelcomeName = () => {
  const [name, setName] = useState("");
  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    const myName = event.currentTarget.value;
    setName(myName);
  };

  return (
    <section>
      <article>반갑습니다{name}님</article>
      <input type="text" onChange={updateName} />
    </section>
  );
};
export default WelcomeName;
