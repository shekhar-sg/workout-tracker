import {Link} from "react-router-dom";
import {FacebookIcon, GoogleIcon} from "../../icons/icons.tsx";

const Login = () => {
    return (
        <div className={"prose h-svh p-4 flex flex-col gap-4"}>
            <h2 className={"self-start font-semibold text-xl mb-6"}>Welcome Back</h2>
            <div
                className={"flex h-full flex-col "}>
                <form className={"flex flex-col gap-6 w-full mb-4"}>
                    <div>
                        <input type={"email"} placeholder={"Email"}
                               className={"w-full px-5 py-4 text-sm bg-stone-200 border-none focus:ring-stone-400 rounded-xl"}
                        />
                    </div>
                    <div>
                        <input type={"password"} placeholder={"password"}
                               className={"w-full px-5 py-4 text-sm bg-stone-200 border-none focus:ring-stone-400 rounded-xl"}
                        />
                    </div>
                </form>
                <Link to={"#"} className={"text-xs text-indigo-400 "}>Forgot your Password?</Link>
                 <Link
                    to={"/"}
                    className={"text-center no-underline mt-auto py-3.5 rounded-xl text-white text-md font-semibold bg-gradient-to-r from-indigo-200 to-indigo-400"}>
                    Sign In
                </Link>
            </div>
            <div className={"space-y-5 mt-auto mb-4"}>
                <div className={"divider"}>or</div>
                <div className={"flex justify-center gap-5 w-full"}>
                    <button className={"h-11 w-11 p-3 ring-1 ring-neutral-500 rounded-md"}>
                        <GoogleIcon/>
                    </button>
                    <button className={"h-11 w-11 p-3 ring-1 ring-neutral-500 rounded-md"}>
                        <FacebookIcon/>
                    </button>
                </div>
                <p className={"font-medium text-xs prose-a:text-indigo-400 text-center"}>Don't have an account?
                    <Link to={"/signup"}> Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
