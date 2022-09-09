import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";


export const authContext = createContext();



export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth Provider");
  return context;
};
export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  const ResetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        ResetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
