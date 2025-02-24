import WordHeader from "./WordHeader";
import { Phonetic, Meaning } from "../types";
import MeaningContent from "./MeaningContent";

interface DictionaryProps {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string;
}

export default function Dictionary({
  word,
  phonetics,
  meanings,
  sourceUrls,
}: DictionaryProps) {
  return (
    <>
      <WordHeader word={word} phonetics={phonetics} />
      <MeaningContent meanings={meanings} sourceUrls={sourceUrls} />
    </>
  );
}
