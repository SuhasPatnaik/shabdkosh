import Meaning from "./Meaning";
import WordHeader from "./WordHeader";

export default function Dictionary({ word, phonetics, meanings, sourceUrls }) {
  return (
    <>
      <WordHeader word={word} phonetics={phonetics} />
      <Meaning meanings={meanings} sourceUrls={sourceUrls} />
    </>
  );
}
