export default function WordHeader({ word, phonetics }) {
  // Find a phonetic with both text and audio
  let usablePhonetics = phonetics?.filter(
    (phonetic) => phonetic.text && phonetic.audio
  );

  // If none found with both, find one with just text
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
    <div className="py-6 grid grid-cols-2 gap-y-[0.5rem]">
      <h1 className="text-[2rem]">{word}</h1>
      <div className="row-span-2 justify-self-end self-center">
        <PlayAudio phoneticAudioUrl={audioUrl} />
      </div>
      {phoneticText && <h2 className="text-primary-accent">{phoneticText}</h2>}
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
