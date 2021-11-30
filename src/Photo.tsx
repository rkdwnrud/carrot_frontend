type Phototype = {
  address: string;
  description: string;
};
const Photo = (type1: Phototype) => {
  const { description, address } = type1;
  return (
    <>
      <section>
        <img src={address} />
      </section>
      <article>{description}</article>
    </>
  );
};
export default Photo;
