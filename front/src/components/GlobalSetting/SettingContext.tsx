import { createContext, ReactNode, useContext, useEffect } from "react";
import i18n from "../../locales/i18n.ts";
import useLocalStorage from "../../hooks/useLocalStorage.ts";

type Theme = "light" | "dark";
type Language = "en" | "ko";

type ContextType = {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  switchLanguage: () => void;
};

const ThemeAndLanguageContext = createContext<ContextType | undefined>(
  undefined,
);

export const useThemeAndLanguage = () => {
  return useContext(ThemeAndLanguageContext)!;
};

const ThemeAndLanguageProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [language, setLanguage] = useLocalStorage("i18n", "ko");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const switchLanguage = () => {
    setLanguage(language === "ko" ? "en" : "ko");
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeAndLanguageContext.Provider
      value={{ theme, language, toggleTheme, switchLanguage }}
    >
      {children}
    </ThemeAndLanguageContext.Provider>
  );
};

export default ThemeAndLanguageProvider;
