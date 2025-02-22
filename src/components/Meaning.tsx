export default function Meaning({ meanings }) {
  console.log("meanings::: ", meanings);
  // console.log("meaning?.definitions::: ", meanings?.[0]?.definitions);
  return (
    <>
      {meanings?.map((meaning, index) => (
        <div key={index}>
          <span className="flex gap-4 items-center">
            <p>{meaning?.partOfSpeech}</p>
            <div className="w-full border-t-1"></div>
          </span>
          <p>Meaning</p>
          <ul className="list-disc">
            {meaning.definitions?.map((definition, index) => (
              <li key={index}>{definition?.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
