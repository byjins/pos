import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import i18n from "locales/i18n";
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

export const ThemeAndLanguageProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [language, setLanguage] = useState<Language>("ko");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const switchLanguage = () => {
    setLanguage((prevLang) => (prevLang === "ko" ? "en" : "ko"));
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

export const useThemeAndLanguage = () => {
  return useContext(ThemeAndLanguageContext)!;
};
