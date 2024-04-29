import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/component/Header/Header";
import Footer from "./components/component/Footer/Footer";

import AdminPage from "./pages/Admin/AdminPage/AdminPage";
import ImportPage from "./pages/Admin/ImportPage/ImportPage";
import UserPage from "./pages/Admin/UserPage/UserPage";
import UserDetailsPage from "./pages/Admin/UserDetailsPage/UserDetailsPage";
import AddUserPage from "./pages/Admin/AddUserPage/AddUserPage";
import RolesPage from "./pages/Admin/RolesPage/RolesPage";
import RoleDetails from "./pages/Admin/RoleDetails/RoleDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={<AdminPage />} /> */}
          <Route path="/" element={<UserPage />} />
          <Route path="/import" element={<ImportPage />} />
          <Route path="/user/:id" element={<UserDetailsPage />} />
          <Route path="/user/add" element={<AddUserPage />} />

          <Route path="/roles" element={<RolesPage />} />
          <Route path="/roledetails" element={<RoleDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
