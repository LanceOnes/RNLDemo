import { Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import Mainpage from "../pages/Gender/Mainpage";
import EditGenderPage from "../pages/Gender/EditGenderPage";
import DeleteGenderPage from "../pages/Gender/DeleteGenderPage";


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Mainpage />} />
                    <Route path="/gender/edit" element={<EditGenderPage />} />
                    <Route path="/gender/delete" element={<DeleteGenderPage />} />
                </Route>

            </Routes>
        </>
    )
}

export default AppRoutes;