import { useState } from "react";

export default function EmojiPicker(): JSX.Element {
  const [storedMood, setStoredMood] = useState<string[]>([]);

  const handleMoodChangeToSad = () => {
    setStoredMood([...storedMood, "😢"]);
  };

  const handleMoodChangeToAnxious = () => {
    setStoredMood([...storedMood, "😅"]);
  };

  const handleMoodChangeToAngry = () => {
    setStoredMood([...storedMood, "🤬"]);
  };

  const handleMoodChangeToScared = () => {
    setStoredMood([...storedMood, "😱"]);
  };

  const handleMoodChangeToCool = () => {
    setStoredMood([...storedMood, "😎"]);
  };

  const handleMoodChangeToEmpty = () => {
    setStoredMood([]);
  };

  const listItems = storedMood.map((emoji, index) => (
    <>
      <li key={index}>{emoji}</li>
    </>
  ));

  return (
    <>
      <h1>Emoji Picker</h1>
      <p>
        Your recent moods:{" "}
        <ul>
          {listItems.slice(
            Math.max(listItems.length - 6, 0),
            listItems.length - 1
          )}
        </ul>
      </p>
      <p>
        Your current mood: {listItems.slice(Math.max(listItems.length - 1, 0))}
      </p>
      <hr />
      {<button onClick={handleMoodChangeToSad}>😢</button>}
      {<button onClick={handleMoodChangeToAnxious}>😅</button>}
      {<button onClick={handleMoodChangeToAngry}>🤬</button>}
      {<button onClick={handleMoodChangeToScared}>😱</button>}
      {<button onClick={handleMoodChangeToCool}>😎</button>}
      {<button onClick={handleMoodChangeToEmpty}>Reset</button>}
    </>
  );
}
