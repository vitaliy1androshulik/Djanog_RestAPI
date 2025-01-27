import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import CategoryCreatePage from "./pages/Category/CategoryCreatePage.tsx";
// import CategoryCreatePage from "./pages/Category/CategoryCreatePage.tsx";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="categories">
                        <Route index element={<CategoryListPage />} />
                        <Route path="create" element={<CategoryCreatePage />} />
                        {/*<Route path="edit/:id" element={<EditCategoryPage />} />*/}
                        {/*<Route path=":id" element={<ViewCategoryPage />} />*/}
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;