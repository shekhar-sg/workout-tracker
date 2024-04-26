import HomeIcon from "../icons/home-icon.tsx";
import ScheduleIcon from "../icons/schedule-icon.tsx";
import CameraIcon from "../icons/camera-icon.tsx";
import ProfileIcon from "../icons/profile-icon.tsx";
import SearchIcon from "../icons/searchIcon.tsx";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer
            className={"max-w-[500px] fixed left-0 bottom-0 right-0 w-full h-[76px] flex justify-around gap-16 items-center bg-white"}>
            <div className={"flex gap-10"}>
                <Link to={'/'} className={"size-7 rounded-full"}>
                    <HomeIcon viewBox={"0 0 30 30"}/>
                </Link>
                <Link className={"size-7 rounded-full"}
                      to={"/schedule"}
                >
                    <ScheduleIcon viewBox={"0 0 30 30"}/>
                </Link>
            </div>
            <div className={"flex gap-10"}>
                <Link to={"#"} className={"size-7 rounded-full"}>
                    <CameraIcon viewBox={"0 0 30 30"}/>
                </Link>
                <Link to={"/intro"} className={"size-7 rounded-full"}>
                    <ProfileIcon viewBox={"0 0 30 30"}/>
                </Link>
            </div>
            <Link
                to={"#"}
                className={"absolute inset-x-0 -top-7 mx-auto size-16 rounded-full bg-gradient-to-r from-indigo-100 via-30% to-95% to-indigo-400 flex items-center justify-center"}>
                <SearchIcon strokeWidth={1.5} className={"size-7"}/>
            </Link>
        </footer>
    );
};

export default Footer;
