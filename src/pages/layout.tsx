import Header from "../components/header.tsx";
import Footer from "../components/footer.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <main
            className={"mb-32"}
            >
            <Outlet/>
            </main>
            <Footer/>
        </>
    );
};

export default Layout;
