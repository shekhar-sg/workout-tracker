const Slide = () => {
    return (
        <div
            className={`flex h-full p-4 flex-col items-center gap-16 prose prose-p:text-[16px] prose-a:text-indigo-300 prose-p:leading-5 prose-p:text-gray-500 prose-p:font-medium font-montserrat prose-headings:m-0 prose-headings:text-neutral-800 prose-h2:font-semibold prose-headings:text-xl prose-headings:my-4 prose-img:m-0`}>
            <a className={"self-end"}>Skip</a>
            <img
                src={"https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xx1mI1U-yJ6RmuGEo1mtRxHwwalaBLHZWGd10bTpoVmUionEoDQZuviVQ6WoVzNDOsHl~0yy0ilAOlhE7bkA4vHBJH0DbqU9dwhXfqlk6jw1xdyF0f33oy5zbojfG2QWYudfPu~cYNQINXjXYkZuoLCeasONMGowwLq3P1TygHCHF51hwYNk8gOjU0dslJ3zLmSMuhiEV3cmW2V2OTu0zfQmANaaxPYR-14ZtD7PkGhKKhgMQo6kBHsZkBqZQsc-HfhFMCRjiJeSb-UlF5I~pJ1kggf-mor3DrAaPZhP7ikYQBqvZSZnFpga9F46Saa4bffCCrUiL1kG9lJ93vZx2Q__"}
                width={"282px"} height={"282px"} alt={""}
            />
            <div>
                <h2>Track Your Goal</h2>
                <p>
                    Don’t worry if you have trouble determining your goals,
                    We can help you determine your goals and
                    track your goals
                </p>
            </div>
            <button
                className={"size-12 mt-8 mr-1 ring-2 self-end ring-indigo-400 ring-offset-4 rounded-full bg-gradient-to-r from-indigo-200 to-indigo-400"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}
                     stroke="currentColor" className="h-5 mx-auto text-white ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                </svg>
            </button>
        </div>
    );
};

export default Slide;
