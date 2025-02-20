import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function FontMenu() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <div className="flex gap-2">
            <p>Fonts</p>
            <img src="/images/icon-arrow-down.svg" alt="Down arrow indicator" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Sans Serif</DropdownMenuItem>
          <DropdownMenuItem>Serif</DropdownMenuItem>
          <DropdownMenuItem>Mono</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
