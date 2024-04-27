import {useLocation, useNavigate} from "react-router-dom";
import {ChevronLeftIcon} from "../icons/icons.tsx";

const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div className={"flex items-center justify-center mb-2 py-4 sticky top-0 backdrop-blur-md z-20"}>
            <button className={"absolute left-5"}
                    onClick={() => navigate(-1)}
            >
                <ChevronLeftIcon/>
            </button>
            <h2 className={"m-0 font-semibold text-xl"}>workout {location.pathname.split("/")}</h2>
        </div>
    );
};

export default Header;
