import WordHeader from "./WordHeader";

export default function Dictionary({ word, phonetic }) {
  return (
    <>
      <WordHeader word={word} phonetic={phonetic} />
    </>
  );
}
