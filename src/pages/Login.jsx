import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo-2.png";
import CustomButton from "../components/CustomButton";

import "./Login.scss";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="login-container">
            <img src={logo} className="logo" alt="Full Stack Club" />
            <div className="button-container">
                <CustomButton onClick={() => navigate("/")}>
                    Entrar
                </CustomButton>
            </div>
        </div>
    );
};

export default Login;
