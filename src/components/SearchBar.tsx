import { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => Promise<void>;
  isLoading: boolean;
}

export default function SearchBar({ onSearch, isLoading }: SearchBarProps) {
  const [searchWord, setSearchWord] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchWord);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <input
          type="text"
          placeholder="Search for any word..."
          className="bg-neutral-300 dark:bg-neutral-700 selection:bg-primary selection:text-primary-foreground h-16 w-full min-w-0 rounded-lg px-6 py-1 text-base shadow-xs transition-[color,box-shadow focus-visible:ring-0 focus-visible:outline-0 focus-visible:border-2 focus-visible:border-primary-accent caret-primary-accent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          disabled={isLoading}
        />
        <button
          className="absolute inset-y-0 right-0 p-6 cursor-pointer flex items-center"
          disabled={isLoading}
        >
          <img
            src="/images/icon-search.svg"
            alt="Search Icon"
            className={`size-6 ${isLoading ? "opacity-50" : ""}`}
          />
        </button>
      </form>
    </>
  );
}
