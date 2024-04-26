import {schedule} from "./workout-tracker.tsx";

export interface WorkoutToggleProps {
    data: {

        schedule: schedule,
        index: number
    }
}

const WorkoutToggle = (props: WorkoutToggleProps) => {
    const {schedule:{title,image,time}, index} = props.data;

    return (
        <div
            className={"flex items-center justify-between px-3 py-2 h-[75px] shadow-lg rounded-xl"}>
            <div className={"flex items-center gap-2"}>
                <img
                    src={image}

                    alt={"img"}
                    className={"size-[50px] rounded-full bg-indigo-200"}/>
                <div className={"flex flex-col gap-1"}>
                    <p>{title}</p>
                    <span>{time}</span>
                </div>
            </div>
            <button>
                <label
                    htmlFor={`${index}`}
                    className={"flex items-center cursor-pointer select-none"}
                >
                    <div className={"relative"}>
                        <input
                            type="checkbox"
                            id={`${index}`}
                            className={"peer sr-only"}
                        />
                        <div
                            className={"block h-8 rounded-full transition bg-gray-300 peer-checked:bg-indigo-300 w-14"}
                        ></div>
                        <div
                            className={"absolute w-6 h-6 transition bg-gray-400 rounded-full left-1 top-1 peer-checked:translate-x-full peer-checked:bg-indigo-700"}
                        ></div>
                    </div>
                </label>
            </button>
        </div>
    );
};

export default WorkoutToggle;
