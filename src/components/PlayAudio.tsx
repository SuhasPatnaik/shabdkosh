interface PlayAudioProps {
  phoneticAudioUrl: string | null;
}

export function PlayAudio({ phoneticAudioUrl }: PlayAudioProps) {
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
