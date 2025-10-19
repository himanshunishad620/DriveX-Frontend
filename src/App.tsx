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
import { useEffect, useState } from "react";
import { MdOutlineSignalCellularConnectedNoInternet4Bar } from "react-icons/md";

const App: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(window.navigator.onLine);
  useEffect(() => {
    const handleOnlineToggle = () => {
      setIsOnline(true);
    };
    const handleOfflineToggle = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnlineToggle);
    window.addEventListener("offline", handleOfflineToggle);
    return () => {
      window.removeEventListener("online", handleOnlineToggle);
      window.removeEventListener("offline", handleOfflineToggle);
    };
  });
  if (!isOnline)
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <MdOutlineSignalCellularConnectedNoInternet4Bar className="text-9xl text-gray-500" />
        <p className="text-center text-2xl font-bold text-gray-500 md:text-3xl">
          No Internet Connection
        </p>
        <p className="mx-3 text-center text-lg font-normal text-gray-500 md:mx-0 md:text-lg">
          Please make sure that you have stable internet connection
        </p>
      </div>
    );
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
          {/* <Route index element={<Home />} /> */}
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
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer hideProgressBar={true} autoClose={500} />
    </div>
  );
};

export default App;
