import { useState } from "react";
import axios from "axios";
import "./App.css";
import { DictionaryData } from "./types";

import Dictionary from "./components/Dictionary";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

function App() {
  const [fontFamily, setFontFamily] = useState("Inter");
  const [data, setData] = useState<DictionaryData | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchWord: string) => {
    if (!searchWord.trim()) {
      setData(null);
      setError("Whoops, can't be empty...");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      if (response.data && response.data.length > 0) {
        setData(response.data[0]);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setError("404: Word Not Found");
      } else {
        setError("An error occurred while fetching the data");
      }
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const handleFontChange = (selectedFont: string) => {
    const fontFamily = selectedFont.trim().toLowerCase();
    if (fontFamily === "serif") {
      setFontFamily("Lora");
    } else if (fontFamily === "mono") {
      setFontFamily("Inconsolata");
    } else {
      setFontFamily("Inter");
    }
  };

  console.log(data);

  return (
    <>
      <div style={{ fontFamily: fontFamily }}>
        <main className="py-6 px-6 mx-auto md:py-10 md:px-8 lg:max-w-[60vw]">
          <Header fontFamily={fontFamily} onFontChange={handleFontChange} />
          <SearchBar
            onSearch={handleSearch}
            isLoading={loading}
            hasError={error}
          />
          {error && <p className="text-warning mt-4">{error}</p>}
          {data && (
            <Dictionary
              word={data.word}
              phonetics={data.phonetics}
              meanings={data.meanings}
              sourceUrls={data.sourceUrls}
            />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
