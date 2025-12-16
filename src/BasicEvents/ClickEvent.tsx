import Button from "react-bootstrap/esm/Button";

export default function ClickEvent() {
  const handleClick = () => {
    alert("hello thanx for clicking");
  };
  return (
    <>
      <Button onClick={handleClick}>Click</Button>
    </>
  );
}
