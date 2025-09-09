import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";
import type { WrapperProps } from "../../types/ComponentsProps";
import Loader from "./Loader";

const PrivateRoute: React.FC<WrapperProps> = ({ children }) => {
  const { isAuthenticated, isAuthenticating } = useAuthContext();
  if (isAuthenticating) return <Loader />;
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to={"/"} replace={true} />
  );
};

export default PrivateRoute;
