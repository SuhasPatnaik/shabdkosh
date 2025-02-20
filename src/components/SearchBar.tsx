import { Input } from "./ui/input";

export default function SearchBar() {
  return (
    <Input
      type="text"
      className="bg-neutral-300 dark:bg-neutral-700"
      placeholder="Search for any word..."
    />
  );
}
