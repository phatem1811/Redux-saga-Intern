
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import App from "../components/App"
import CreateEdit from "../components/CreateEdit"


const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/user" />} />
                <Route path="/user" element={<App />} />
                <Route path="/user/create" element={<CreateEdit />} />
                <Route path="/user/:id" element={<CreateEdit />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;