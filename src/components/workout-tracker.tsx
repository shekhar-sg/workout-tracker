import AlertIcon from "../icons/alert-icon.tsx";
import {Link} from "react-router-dom";

const WorkoutTracker = () => {
    return (
        <div
            className={"prose prose-h3:text-base prose-a:cursor-pointer prose-headings:m-0 prose-p:text-xs prose-p:m-0 normal-case h-full p-4 flex flex-col gap-4"}>
            <div className={"space-y-16 text-[10px]"}>
                <div className={"space-y-3"}>
                    <div className={"bg-blue-600 h-[90px] rounded-xl"}></div>
                    <div
                        className={"flex items-center gap-2 justify-start p-2 rounded-xl bg-gradient-to-r from-indigo-200 via-stone-100 to-stone-50 via-60%"}>
                        <AlertIcon className={"size-5 text-indigo-600"}/>
                        <h4 className={"font-medium text-[13px] w-4/5"}>
                            You've burned fewer calories than yesterday. Time to get moving!
                        </h4>
                    </div>
                </div>
                <div className={"space-y-4"}>
                    <div
                        className={"prose-h3:font-semibold font-medium text-gray-500 prose-p:text-gray-900 space-y-5 "}>
                        <div
                            className={"flex justify-between items-center prose-a:text-xs prose-a:no-underline prose-a:text-gray-500"}>
                            <h3>Upcoming Workout</h3>
                            <Link
                            to={"/schedule"}
                            >See more</Link>
                        </div>
                        <div
                            className={"flex items-center justify-between px-3 py-2 h-[75px] shadow-lg rounded-xl"}>
                            <div className={"flex items-center gap-2"}>
                                <img
                                    src={"https://s3-alpha-sig.figma.com/img/4aee/a404/269733701b8604f00f8ab3dbc8874dc4?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YRoQWw1HXgEYtTY7Vg-M2g5IhiKck5VPpcn0Jugib1uL3YWAQL9qngsOoqDKslwiVHm92OampIuJOJkCdMcWDYlxGYqOFHZVpM8s2z1NyIbEcAiKz~icWxqUXjtf4EAuTX9PwtEQlsCSC0eZ1sedcvdPPiuRHDN4gBuCPv2QbJdkmyGb-r7idogspouJ~KeCGnL22lnRm6d3tNchIqngW8S7bW5iSmzqzL9ZwQbhV5Gc~KAC4rG2HVSKRnt9USxdvf6EDrMtSycuyrzitLLWZsB8H3GV-v-dOdoYeRvYsvk7FYyo0Aaj6F-TrXDcnfWOmeBAu9FtArLfMihHELXaSA__"}

                                    alt={"img"}
                                    className={"size-[50px] rounded-full bg-indigo-200"}/>
                                <div className={"flex flex-col gap-1"}>
                                    <p>Full Body Workout</p>
                                    <span>Today 3pm</span>
                                </div>
                            </div>
                            <button>
                                <label
                                    htmlFor="toggle"
                                    className={"flex items-center cursor-pointer select-none"}
                                >
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            id="toggle"
                                            className="peer sr-only"
                                        />
                                        <div
                                            className={"block h-8 rounded-full bg-gray-300 peer-checked:bg-indigo-300 w-14"}
                                        ></div>
                                        <div
                                            className={"absolute w-6 h-6 transition bg-gray-400 rounded-full left-1 top-1 peer-checked:translate-x-full peer-checked:bg-indigo-700"}
                                        ></div>
                                    </div>
                                </label>
                            </button>
                        </div>
                        <div
                            className={"flex items-center justify-between px-3 py-2 h-[75px] shadow-lg rounded-xl"}>
                            <div className={"flex items-center gap-2"}>
                                <img
                                    src={"https://s3-alpha-sig.figma.com/img/5688/dda6/63ce83a9876ee1cadf652148a636fe39?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LCVi-OLBARFS8CJMirhiIxYuvtOOZKuXaw14X5Bda9jB~plQ49VQ-gXRpxy6n5eIf0BX1e0F3~8sTtcQDAeskGfs635BvILCuh1LslPeKEF1x6tf0uDbiTUMW6CL7m1jhjpvGSKHccWIEL8byxMduA5IC6OCdY-krdwZPuOGk--rJGCSGdxrhH92kbIi2TXOzj89Py2GJWon8AGdX4LrRqfF74z5DG-nml1geYuzL66iXVGnfZXvfKC22y0gO-RlhHmBJsKzioTyRa2sCt5OLcQWS9yohzo1St2vkQmAVr6KCtO-FivraIhKokIBBX4dQf2icqUd-ERUq8C9Fdv0nQ__"}
                                    alt={"img"}
                                    className={"size-[50px] rounded-full bg-indigo-100"}/>
                                <div className={"flex flex-col gap-1"}>
                                    <p>Full Body Workout</p>
                                    <span>Today 3pm</span>
                                </div>
                            </div>
                            <button>
                                <label
                                    htmlFor="grip"
                                    className={"flex items-center cursor-pointer select-none"}
                                >
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            id="grip"
                                            className="peer sr-only"
                                        />
                                        <div
                                            className={"block h-8 rounded-full bg-gray-300 peer-checked:bg-indigo-300 w-14"}
                                        ></div>
                                        <div
                                            className={"absolute w-6 h-6 transition bg-gray-400 rounded-full left-1 top-1 peer-checked:translate-x-full peer-checked:bg-indigo-700"}
                                        ></div>
                                    </div>
                                </label>
                            </button>
                        </div>
                    </div>
                    <div className={"space-y-5"}>
                        <h3>What Do You Want to Train</h3>
                        <div className={"flex justify-between items-start p-4 rounded-2xl bg-indigo-300"}>
                            <div className={"space-y-1 font-medium text-gray-800"}>
                                <p>Full Body Workout</p>
                                <div className={'flex flex-col'}>
                                    <span>Arms</span>
                                    <span>Chest</span>
                                </div>
                            </div>
                            <img
                                alt={"img"}
                                src={"https://s3-alpha-sig.figma.com/img/23ae/977c/32610d884493905711642300c8cc67c0?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PCvWTbZ5NjUumO0m8v5MjXz6bJHmGbsYJb4EYWTl0mPfkcGnUBjwosLVe7DtUuaziR-CNpluc9dwXWY589sUOzBZ0mcPkjWbd46xnrBVrc12gFYYI19CWtg5Gu6QQrXoVomP4CE0--ylPpaqYOcUQXjg2Giyro9koG87sf1qH4u3NwtuV4pzkKNVp-FbF7F5uG4R~ZaZH7QUYNcNv1PW667PNSgkJ7zHDV4XPckVeHESpnAUY~BWKYhOGOTaRhTLjc5gaOv58Kx96OP8PiaU0XbOXVgh-kVkiDl1tA0ypsTrc9HFWQQovr87-31FWxfssbwvrBn53tT4GDwxrLP0kw__"}
                                className={"m-0 size-[100px] rounded-full bg-indigo-200"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default WorkoutTracker;
