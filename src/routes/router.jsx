import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/Public";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PublicLayout />}>
                        <Route path="/" element={<HomePage />} />


                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;