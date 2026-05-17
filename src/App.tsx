// src/App.tsx

import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/auth/login/page";
import CreateAccountPage from "./page/auth/create-account/page";
import DashboardPage from "./page/dashboard/page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route path="/create-account" element={<CreateAccountPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default App;
