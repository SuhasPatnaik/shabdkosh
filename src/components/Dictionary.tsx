import WordHeader from "./WordHeader";

export default function Dictionary({ word, phonetics }) {
  return (
    <>
      <WordHeader word={word} phonetics={phonetics} />
    </>
  );
}
