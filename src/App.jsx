import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
