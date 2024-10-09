import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthProvider from "@components/Auth/AuthProvider.tsx";
import Error from "@page/Error.tsx";
import Home from "@page/Home";
import ThemeAndLanguageProvider from "@components/GlobalSetting/SettingContext.tsx";

function App() {
  return (
    <ThemeAndLanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route element={<AuthProvider />}>
            <Route path={"/user"} element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeAndLanguageProvider>
  );
}

export default App;
