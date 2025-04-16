import ProtectedRoute from "./components/ProtectedRoute";
import { Home, Login, Register, NotFound } from "./pages";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Logout = () => {
  localStorage.clear();
  return <Navigate to={"/login"} />;
};

const RegisterAndLogout = () => {
  localStorage.clear();
  return <Register />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
