export default function Meaning({ meanings, sourceUrls }) {
  return (
    <>
      {meanings?.map((meaning, index) => (
        <div key={index} className="mb-6">
          <span className="flex gap-4 items-center pb-8">
            <p className="italic text-[1.125rem] font-semibold">
              {meaning?.partOfSpeech}
            </p>
            <div className="w-full border-t-2" />
          </span>
          <p className="text-neutral-400 pb-4">Meaning</p>
          <ul className="flex flex-col gap-2 mb-6">
            {meaning.definitions?.map((definition, index) => (
              <div key={index} className="relative pl-6">
                <li className="list-none">
                  <span className="absolute left-0 text-primary-accent">•</span>
                  <span className="">{definition?.definition}</span>
                  <span className="block text-neutral-400 mt-2 italic">
                    {JSON.stringify(definition?.example)}
                  </span>
                </li>
              </div>
            ))}
          </ul>
          {meaning.synonyms?.length > 0 && (
            <div className="flex gap-4">
              <p className="text-neutral-400">Synonyms</p>
              <p className="text-primary-accent font-semibold">
                {meaning.synonyms?.join(", ")}
              </p>
            </div>
          )}
        </div>
      ))}
      {sourceUrls?.length > 0 && (
        <>
          <div className="w-full border-t-2" />
          <div className="my-4 flex flex-col gap-2 md:flex-row md:gap-8">
            <p className="text-neutral-400">
              <u>Source</u>
            </p>
            <a href={sourceUrls} target="_blank" className="flex gap-2">
              <u>{sourceUrls}</u>
              <img
                src="images/icon-new-window.svg"
                alt="Open in new tab icon"
              />
            </a>
          </div>
        </>
      )}
    </>
  );
}
