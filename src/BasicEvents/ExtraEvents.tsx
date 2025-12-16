export const ExtraEvents = () => {
  const handleClick = () => {
    alert("hello");
  };
  return (
    <>
      <p onMouseOver={handleClick}>hello click me</p>
    </>
  );
};
