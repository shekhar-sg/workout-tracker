import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className={"prose h-[100vh] p-4 flex flex-col gap-4"}>
            <h2 className={"self-start font-semibold text-xl mb-6"}>Welcome Back</h2>
            <div
                className={"flex h-full flex-col "}>
                <form className={"flex flex-col gap-6 w-full mb-8"}>
                    <div>
                        <input type={"text"} placeholder={"First Name"}
                               className={"peer w-full px-5 py-4 text-sm bg-stone-200 border-none focus:ring-stone-400 rounded-xl"}
                        />
                    </div>
                    <div>
                        <input type={"text"} placeholder={"Last Name"}
                               className={"w-full px-5 py-4 text-sm bg-stone-200 border-none focus:ring-stone-400 rounded-xl"}
                        />
                    </div>
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
                    <div className={"flex items-center gap-2 text-xs prose-a:text-indigo-400"}>
                        <input type={"checkbox"}
                               className={"w-5 h-5 text-indigo-400 focus:ring-0 transition-colors duration-300 rounded-md"}/>
                        <label htmlFor={"checkbox"}>By proceeding, I agree to all <Link to={"#"}>T&C</Link> and <Link
                            to={"#"}
                        >Privacy
                            Policy</Link></label>
                    </div>
                </form>
                <Link
                    to={"/"}
                    className={"text-center no-underline mt-auto py-3.5 rounded-xl text-white text-md font-semibold bg-gradient-to-r from-indigo-200 to-indigo-400"}>
                    Create An Account
                </Link>
            </div>
            <div className={"space-y-5 mt-auto mb-4"}>
                <div className={"divider"}>or</div>
                <div className={"flex justify-center gap-5 w-full"}>
                    <button className={"h-11 w-11 p-3 ring-1 ring-neutral-500 rounded-md"}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%"
                             viewBox="0 0 48 48">
                            <path fill="#FFC107"
                                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            <path fill="#FF3D00"
                                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                            <path fill="#4CAF50"
                                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                            <path fill="#1976D2"
                                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                    </button>
                    <button className={"h-11 w-11 p-3 ring-1 ring-neutral-500 rounded-md"}>
                        <svg fill="#1A7AEB" height="100%" width="100%" version="1.1" id="Layer_1"
                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 310 310" xmlSpace="preserve">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0}></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g id="XMLID_834_">
                                    <path id="XMLID_835_"
                                          d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064 c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996 V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545 C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703 c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <p className={"font-medium text-xs prose-a:text-indigo-400 text-center"}>Already have an account?
                    <Link to={"/login"}> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
