export interface Phonetic {
  text: string;
  audio?: string;
}

export interface Definition {
  definition: string;
  synonyms: Array<string>[];
  example: string;
}

export interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: Array<string>[];
}

export interface DictionaryData {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  sourceUrls: string;
}

export interface FontMenuProps {
  fontFamily: string;
  onFontChange: (selectedFont: string) => void;
}
