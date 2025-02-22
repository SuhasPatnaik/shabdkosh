export default function Meaning({ meanings, sourceUrl }) {
  return (
    <>
      {meanings?.map((meaning, index) => (
        <div key={index}>
          <span className="flex gap-4 items-center">
            <p>{meaning?.partOfSpeech}</p>
            <div className="w-full border-t-2" />
          </span>
          <p className="text-neutral-400">Meaning</p>
          <ul className="flex flex-col gap-2">
            {meaning.definitions?.map((definition, index) => (
              <>
                <li key={index} className="list-disc">
                  {definition?.definition}
                </li>
                <li key={index} className="text-neutral-400">
                  {JSON.stringify(definition?.example)}
                </li>
              </>
            ))}
          </ul>
          {meaning.synonyms?.length > 0 && (
            <div>
              <p className="text-neutral-400">Synonyms</p>
              <p>{meaning.synonyms?.join(",")}</p>
            </div>
          )}
        </div>
      ))}
      <div className="w-full border-t-2" />
      <p className="text-neutral-400">
        <u>Source</u>
      </p>
      <a href={sourceUrl} target="_blank" className="flex gap-2">
        <u>{sourceUrl}</u>
        <img src="images/icon-new-window.svg" alt="Open in new tab icon" />
      </a>
    </>
  );
}
