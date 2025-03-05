import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import RuralContext from "./components/context/ruralContext";
const ProtectedLayout = ({ children }) => {
  const { isLoggedIn, setLoggedIn } = useContext(RuralContext);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedLayout;
