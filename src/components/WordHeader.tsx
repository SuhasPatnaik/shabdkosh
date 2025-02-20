export default function WordHeader({ word, phonetic }) {
  console.log("phonetics::: ", phonetic);
  return (
    <div className="grid grid-cols-2">
      <h1>{word}</h1>
      <PlayAudio phoneticAudio={phonetic} />
      <h2>{phonetic}</h2>
    </div>
  );
}

function PlayAudio({ phoneticAudio }) {
  return (
    <div>
      <img src="/images/icon-play.svg" alt="Play the phonetic audio icon" />
    </div>
  );
}
