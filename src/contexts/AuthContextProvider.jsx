import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AuthContextProvider({ children }) {
  const API = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      setAuthLoading(true);
      try {
        const response = await axios.get(`${API}/users/auth/cookie/me`, {
          withCredentials: true,
        });
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
        setUser(null);
      } finally
      {
        setAuthLoading(false);
      }
    };
    checkAuth();
  }, [API]);

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(
        `${API}/users/auth/cookie/login`,
        { email, password },
        { withCredentials: true },
      );
      setUser(response.data.user);

      console.log(response);
      return true;
    } catch (error) {
      console.error(error);
      setUser(null);
      return null;
    }
  };

  const logout = async () => {
    try {
      await axios.post(
        `${API}/users/auth/cookie/logout`,
        {},
        { withCredentials: true },
      );
    } catch (error) {
      console.error(error);
    } finally {
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ API, authLoading, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
