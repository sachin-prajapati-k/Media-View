import { useState } from "react";
import Button from "react-bootstrap/esm/Button";

export const ExtraEvents = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    alert("hello");
  };

  const onMouseEnter = () => {
    prompt("hello");
  };
  const handleCountPlus = () => {
    setCount(count + 1);
  };
  const handleCountMinus = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>{count}</h3>

      <Button className="bg-primary" onClick={handleCountPlus}>
        inCrement
      </Button>
      <Button className="bg-secondary" onClick={handleCountMinus}>
        inCrement
      </Button>
      <Button className="bg-info" onClick={() => setCount(0)}>
        reset
      </Button>
    </>
  );
};
