import "./App.css";
import { Routes, Route } from "react-router-dom";
import MealsPage from "./components/Layout/MealsPage";
import WelcomePage from "./components/Layout/WelcomePage";
import LoginPage from "./components/Layout/LoginPage";
import Home from "./components/Layout/Home";
import CreateAccount from "./components/Layout/CreateAccount";
import LoginAsAdmin from "./components/Layout/LoginAsAdmin";
import AdminPannel from "./components/Layout/AdminPannel";
function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login/loginasadmin" element={<LoginAsAdmin />} />
        <Route path="/login/home" element={<Home />} />
        <Route
          path="/login/loginasadmin/adminPannel"
          element={<AdminPannel />}
        />
        <Route path="/login/home/mealsPage" element={<MealsPage />} />
      </Routes>
    </>
  );
}

export default App;
