import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/component/Header/Header";
import Footer from "./components/component/Footer/Footer";

import AdminPage from "./pages/Admin/AdminPage/AdminPage";
import ImportPage from "./pages/Admin/ImportPage/ImportPage";
import UserPage from "./pages/Admin/UserPage/UserPage";
import UserDetailsPage from "./pages/Admin/UserDetailsPage/UserDetailsPage";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
