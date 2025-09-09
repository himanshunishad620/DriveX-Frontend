import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";
import type { WrapperProps } from "../../types/ComponentsProps";
import Loader from "./Loader";

const PublicRoute: React.FC<WrapperProps> = ({ children }) => {
  const { isAuthenticated, isAuthenticating } = useAuthContext();
  if (isAuthenticating) return <Loader />;
  return isAuthenticated ? <Navigate to={"/dashboard"} /> : <>{children}</>;
};

export default PublicRoute;
