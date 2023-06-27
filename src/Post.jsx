// eslint-disable-next-line react/prop-types
export function Post({ name, number, content }) {
  return (
    <>
      <h3>{name}</h3>
      <h5>{number}</h5>
      <p>{content}</p>
    </>
  );
}
