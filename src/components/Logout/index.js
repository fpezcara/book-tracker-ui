import { useEffect } from "react";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";
import { logoutUser } from "../../utils/requests";

const Logout = () => {
  const navigate = useNavigate();
  Cookies.remove("userId");

  useEffect(() => {
    const performLogout = async () => {
      try {
        await logoutUser();

        navigate("/login");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    performLogout();
  }, [navigate]);
};

export default Logout;
