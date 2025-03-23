import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../../constants";
import Cookies from "js-cookie";

const Logout = () => {
  const navigate = useNavigate();

  axios
    .delete(`${API_URL}/session`, { withCredentials: true })
    .then((res) => {
      if (res.status === 204) {
        Cookies.remove("_book_tracker_session");
        Cookies.remove("userId");

        navigate("/login");
      }
    })
    .catch((err) => console.log(err));
};

export default Logout;
