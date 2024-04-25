import BackIcon from "../icons/back-icon.tsx";
import {useLocation, useNavigate} from "react-router-dom";

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div className={"flex items-center justify-center mb-2 py-4 sticky top-0"}>
            <button className={"absolute left-5"}
                    onClick={() => navigate(-1)}
            >
                <BackIcon/>
            </button>
            <h2 className={"m-0 font-semibold text-xl"}>workout {location.pathname.split("/")}</h2>
        </div>
    );
};

export default Header;
