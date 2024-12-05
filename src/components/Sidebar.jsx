import CustomButton from "./CustomButton";

import "./Sidebar.scss";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    return (
        <div className="sidebar-container">
            <div className="logo">
                <img src={logo} alt="Full Satck Club" />
            </div>

            <div className="sign-out">
                <CustomButton onClick={() => navigate("/login")}>
                    Sair
                </CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
