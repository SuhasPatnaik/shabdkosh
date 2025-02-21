import { useState } from "react";
import "./App.css";
import Dictionary from "./components/Dictionary";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import axios from "axios";

interface Phonetic {
  text: string;
  audio?: string;
}

interface DictionaryData {
  word: string;
  phonetics: Phonetic[];
}

function App() {
  const [data, setData] = useState<DictionaryData | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchWord: string) => {
    if (!searchWord.trim()) {
      setError("Please enter a word to search");
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
        setError("Word not found");
      } else {
        setError("An error occurred while fetching the data");
      }
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  console.log(data);

  return (
    <>
      <div className="py-6 px-6">
        <Header />
        <SearchBar onSearch={handleSearch} isLoading={loading} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {data && <Dictionary word={data.word} phonetics={data.phonetics} />}
      </div>
    </>
  );
}

export default App;
