const Objective = () => {
    return (
        <div className={"prose h-full p-4 flex flex-col gap-4"}>
            <h2 className={"self-center font-semibold text-xl mb-6"}>What are your goals?</h2>
            <div
                className={"flex flex-col prose-a:mt-2 prose-a:text-indigo-300 prose-a:text-xs prose-a:font-medium"}>
                <form className={"flex flex-col gap-3 w-full"}>
                    <label
                        className="text-sm flex py-3 px-5 bg-gray-200 space-x-1 rounded-xl has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-1 has-[:checked]:ring-indigo-200">
                        Weight Loss
                        <input type="checkbox" className="ml-auto p-3 focus:ring-0 rounded-md"/>
                    </label>
                    <label
                        className="text-sm flex py-3 px-5 bg-gray-200 space-x-1 rounded-xl has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-1 has-[:checked]:ring-indigo-200">
                        Muscle Gain
                        <input type="checkbox" className="ml-auto p-3 focus:ring-0 rounded-md"/>
                    </label>
                    <label
                        className="text-sm flex py-3 px-5 bg-gray-200 space-x-1 rounded-xl has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-1 has-[:checked]:ring-indigo-200">
                        Flexibility and Mobility
                        <input type="checkbox" className="ml-auto p-3 focus:ring-0 rounded-md"/>
                    </label>
                    <label
                        className="text-sm flex py-3 px-5 bg-gray-200 space-x-1 rounded-xl has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-1 has-[:checked]:ring-indigo-200">
                        General Fitness
                        <input type="checkbox" className="ml-auto p-3 focus:ring-0 rounded-md"/>
                    </label>
                    <label
                        className="text-sm flex py-3 px-5 bg-gray-200 space-x-1 rounded-xl has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-1 has-[:checked]:ring-indigo-200">
                        Event - specific training
                        <input type="checkbox" className="ml-auto p-3 focus:ring-0 rounded-md"/>
                    </label>
                    <label
                        className="text-sm flex py-3 px-5 bg-gray-200 space-x-1 rounded-xl has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-1 has-[:checked]:ring-indigo-200">
                        Mindfulness and Mental Health
                        <input type="checkbox" className="ml-auto p-3 focus:ring-0 rounded-md"/>
                    </label>
                </form>
            </div>
            <button
                className={"mt-auto mb-14 w-full py-3.5 rounded-xl text-white text-base font-semibold bg-gradient-to-r from-indigo-200 to-indigo-400"}>
                Confirm
            </button>
        </div>
    );
};

export default Objective;
