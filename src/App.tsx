import { Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import Images from "./pages/dashboard/pages/Images";
import Media from "./pages/dashboard/pages/Media";
import Document from "./pages/dashboard/pages/Document";
import Home from "./pages/dashboard/pages/Home";
import Others from "./pages/dashboard/pages/Others";
import PrivateRoute from "./components/other/PrivateRoute";
import PublicRoute from "./components/other/PublicRoute";
import NotFound from "./components/other/NotFound";
import { FileUploadProvider } from "./context/FileUploadProvider";
import { ToastContainer } from "react-toastify";
import LandingPage from "./pages/LandingPage";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Offline from "./components/UI/other/Offline";
import useIsOnline from "./hooks/useIsOnline";

const App: React.FC = () => {
  const { isOnline } = useIsOnline();
  if (!isOnline) return <Offline />;
  return (
    <div className="h-[100dvh] w-screen">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <FileUploadProvider>
                <DashboardLayout />
              </FileUploadProvider>
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="image" element={<Images />} />
          <Route path="media" element={<Media />} />
          <Route path="document" element={<Document />} />
          <Route path="other" element={<Others />} />
        </Route>
        <Route
          path="/auth"
          element={
            <PublicRoute>
              <Outlet />
            </PublicRoute>
          }
        >
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer hideProgressBar={true} autoClose={500} />
    </div>
  );
};

export default App;
