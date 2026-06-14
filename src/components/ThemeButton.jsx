import { useTheme } from "../hook/useTheme.js";
import { Moon , Lightbulb } from 'pixelarticons/react'

export function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-button  w-auto h-auto px-4 py-2 text-sm font-semibold transition-transform hover:translate-1 focus:outline-0 focus:ring-2 focus:ring-yellow-300"
      aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
    >
      {theme === "dark" ? <Lightbulb /> : <Moon />}
    </button>
  );
}
