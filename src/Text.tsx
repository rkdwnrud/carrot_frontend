type Texttype = {
  text: string;
  type: string;
};
const Text = (TypeText: Texttype) => {
  const { text, type } = TypeText;
  return (
    <p>
      {type === "bold" && <strong>{text}</strong>}
      {type === "header" && <h1>{text}</h1>}
    </p>
  );
};
export default Text;
