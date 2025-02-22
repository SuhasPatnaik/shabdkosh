import FontMenu from "./FontMenu";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <>
      <div className="flex justify-between pb-6">
        <img src="/images/logo.svg" alt="Shabdkosh app logo" />
        <div className="flex gap-4 items-center">
          <FontMenu />
          <div className="h-6 border-l border-solid border-gray-500 dark:border-white"></div>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
