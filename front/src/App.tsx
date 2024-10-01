import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthProvider from "@components/Auth/AuthProvider.tsx";
import Error from "@page/Error.tsx";
import Home from "@page/Home.tsx";
import Login from "@page/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/user" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        <Route element={<AuthProvider />}>
          <Route path={"/user"} element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
