import { useState } from "react";

export default function NumberPicker(): JSX.Element {
  const [counterValue, setCounterValue] = useState(0);
  const [storedValue, setStoredValue] = useState(0);

  const handleAddOneToCounter = () => {
    setCounterValue(counterValue + 1);
  };

  const handleSubtractOneFromCounter = () => {
    setCounterValue(counterValue - 1);
  };

  const handleStoreCurrentCount = () => {
    setStoredValue(counterValue);
  };

  return (
    <>
      <h1>Number picker</h1>
      <p>Your stored number: {storedValue}</p>
      <p>Counter: {counterValue}</p>
      <button onClick={handleSubtractOneFromCounter}>-1</button>
      <button onClick={handleAddOneToCounter}>+1</button>
      <hr />
      <button onClick={handleStoreCurrentCount}>Store current count</button>
    </>
  );
}
