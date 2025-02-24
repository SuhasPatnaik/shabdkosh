import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function FontMenu({ fontFamily, onFontChange }) {
  const selectedFont =
    fontFamily === "Inter"
      ? "Sans Serif"
      : fontFamily === "Lora"
      ? "Serif"
      : "Mono";

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <div className="flex gap-2">
            <p>{selectedFont}</p>
            <img src="/images/icon-arrow-down.svg" alt="Down arrow indicator" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-none shadow-primary-accent/70 shadow-[0px_0px_16px_4px] mt-2">
          <DropdownMenuItem
            className="cursor-pointer font-sans"
            onClick={() => onFontChange("sansserif")}
          >
            Sans Serif
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer font-serif"
            onClick={() => onFontChange("serif")}
          >
            Serif
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer font-mono"
            onClick={() => onFontChange("mono")}
          >
            Mono
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
