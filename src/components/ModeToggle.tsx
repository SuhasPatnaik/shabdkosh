import { Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Switch
        id="theme-switch"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        className="w-[2.5rem] data-[state=checked]:bg-primary-accent data-[state=unchecked]:bg-slate-500"
      />
      <Moon className="size-6 text-slate-500 dark:text-primary-accent" />
    </div>
  );
}
