import { useEffect, useRef, useState } from "react";

export default function WordHeader({ word, phonetics }) {
  let usablePhonetics = phonetics;

  if (phonetics && phonetics.length > 1) {
    usablePhonetics = phonetics.filter(
      (phonetic) => phonetic.text && phonetic.audio
    );
  }

  const audioUrl = usablePhonetics?.[0]?.audio || null;
  const phoneticText = usablePhonetics?.[0]?.text;

  return (
    <div className="grid grid-cols-2">
      <h1>{word}</h1>
      <PlayAudio phoneticAudioUrl={audioUrl} />
      {phoneticText && <h2>{phoneticText}</h2>}
    </div>
  );
}

function PlayAudio({ phoneticAudioUrl }) {
  const [noAudio, setNoAudio] = useState(false);
  const audioRef = useRef(null);

  console.log("phoneticAudio::: ", phoneticAudioUrl);

  useEffect(() => {
    if (phoneticAudioUrl === null) {
      setNoAudio(true);
    } else {
      setNoAudio(false);
    }
  }, [phoneticAudioUrl]);

  const handlePhoneticAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src={phoneticAudioUrl} type="audio/mpeg" />
      </audio>
      <button
        onClick={handlePhoneticAudio}
        className={` ${
          noAudio
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
