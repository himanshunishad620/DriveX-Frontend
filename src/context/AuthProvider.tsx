import { createContext, useContext, useEffect, useState } from "react";
import type { AuthContextType } from "../types/HookProps";
import type { WrapperProps } from "../types/ComponentsProps";
import { useVerifyTokenMutation } from "../api/authApi";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<WrapperProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);
  const [verifyToken] = useVerifyTokenMutation();

  useEffect(() => {
    async function verify() {
      setIsAuthenticating(true);
      try {
        const res = await verifyToken();
        doLogin(res.data.decoded._id);
      } catch (error) {
        console.log("Not Found");
      } finally {
        setIsAuthenticating(false);
      }
    }
    verify();
  }, [isAuthenticated]);

  const doLogin = (id: string) => {
    setIsAuthenticated(true);
    setUserId(id);
  };

  const doLogout = () => {
    setIsAuthenticated(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        doLogin,
        doLogout,
        userId,
        isAuthenticating,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook — named export only
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used inside an AuthProvider");
  }
  return context;
};

// import { createContext, useContext, useState } from "react";
// import type { WrapperProps } from "../types/ComponentsProps";
// import type { AuthContextType } from "../types/HookProps";

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// const AuthProvider: React.FC<WrapperProps> = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
//   const [userId, setUserId] = useState<string | null>("");
//   const [name, setName] = useState<string | null>("");

//   const login = (id: string, userName: string) => {
//     setIsAuthenticated(true);
//     setUserId(id);
//     setName(userName);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUserId(null);
//     setName(null);
//   };
//   return (
//     <AuthContext.Provider
//       value={{ isAuthenticated, login, name, userId, logout }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
// export const useAuthContext = () => useContext(AuthContext);
// // export const useAuthContext = () => {
// //   const context = useContext(AuthContext);
// //   if (!context) {
// //     throw new Error("useAuthContext must be used inside an AuthProvider");
// //   }
// //   return context;
// // };
// export default AuthProvider;
