export default function WordHeader({ word, phonetics }) {
  // Try to find a phonetic with both text and audio
  let usablePhonetics = phonetics?.filter(
    (phonetic) => phonetic.text && phonetic.audio
  );

  // If none found with both, try to find one with just text
  if (!usablePhonetics?.length) {
    usablePhonetics = phonetics?.filter((phonetic) => phonetic.text);
  }

  // If still none found, check for one with just audio
  if (!usablePhonetics?.length) {
    usablePhonetics = phonetics?.filter((phonetic) => phonetic.audio);
  }

  // If nothing found at all, use the first phonetic entry if it exists
  if (!usablePhonetics?.length && phonetics?.length) {
    usablePhonetics = [phonetics[0]];
  }

  const audioUrl = usablePhonetics?.[0]?.audio || null;
  const phoneticText = usablePhonetics?.[0]?.text;

  console.log(audioUrl);
  console.log(phoneticText);

  return (
    <div className="grid grid-cols-2">
      <h1>{word}</h1>
      <PlayAudio phoneticAudioUrl={audioUrl} />
      {phoneticText && <h2>{phoneticText}</h2>}
    </div>
  );
}

function PlayAudio({ phoneticAudioUrl }) {
  const handlePlayAudio = () => {
    if (phoneticAudioUrl) {
      new Audio(phoneticAudioUrl).play();
    }
  };

  return (
    <>
      <button
        onClick={handlePlayAudio}
        className={` ${
          phoneticAudioUrl === null
            ? "opacity-50"
            : "hover:opacity-75 transition-opacity cursor-pointer"
        }`}
      >
        <img
          src="/images/icon-play.svg"
          alt="Play the phonetic audio icon"
          className="size-12"
        />
      </button>
    </>
  );
}
