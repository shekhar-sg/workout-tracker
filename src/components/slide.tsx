import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

const Slide = () => {
    const [slide, setSlide] = useState(0);
    const navigate = useNavigate()
    return (
        <div
            className={`flex h-svh p-4 flex-col items-center gap-16 prose prose-p:text-[16px] prose-a:text-indigo-300 prose-p:leading-5 prose-p:text-gray-500 prose-p:font-medium font-montserrat prose-headings:m-0 prose-headings:text-neutral-800 prose-h2:font-semibold prose-headings:text-xl prose-headings:my-4 prose-img:m-0`}>
            <Link
                to={"/"}
                className={"self-end mr-2"}>Skip</Link>
            <img
                width={"282px"} height={"282px"} alt={"img"}
                src={slideData[slide].image}
            />
            <div>
                <h2>{slideData[slide].title}</h2>
                <p>
                    {slideData[slide].description}
                </p>
            </div>
            <button
                onClick={() => {
                    if (slide != (slideData.length - 1)) {
                        setSlide(slide + 1)
                    } else {
                        navigate("/signup")
                    }
                }}
                className={"size-12 absolute bottom-14 right-8 ring-2 self-end ring-indigo-400 ring-offset-4 rounded-full bg-gradient-to-r from-indigo-200 to-indigo-400"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}
                     stroke="currentColor" className="h-5 mx-auto text-white ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                </svg>
            </button>
        </div>
    );
};

export default Slide;

const slideData = [
    {
        title: "Track Your Goal",
        description: "Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
        image: "https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xx1mI1U-yJ6RmuGEo1mtRxHwwalaBLHZWGd10bTpoVmUionEoDQZuviVQ6WoVzNDOsHl~0yy0ilAOlhE7bkA4vHBJH0DbqU9dwhXfqlk6jw1xdyF0f33oy5zbojfG2QWYudfPu~cYNQINXjXYkZuoLCeasONMGowwLq3P1TygHCHF51hwYNk8gOjU0dslJ3zLmSMuhiEV3cmW2V2OTu0zfQmANaaxPYR-14ZtD7PkGhKKhgMQo6kBHsZkBqZQsc-HfhFMCRjiJeSb-UlF5I~pJ1kggf-mor3DrAaPZhP7ikYQBqvZSZnFpga9F46Saa4bffCCrUiL1kG9lJ93vZx2Q__"
    },
    {
        title: "Get Burn",
        description: "Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever",
        image: "https://s3-alpha-sig.figma.com/img/9958/8bb7/dbf14a6d26ec54e2ba9e71eaef184f6b?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaF8rMmvfqmePqO8U9FcI-Vj-rIs2-s2wBqi2eQU-eqSg4BT9mcxM9szMdI0l-Wx6339LRlvWmZxTo7DLkPgNY5TDpNfSrytPWvsbs7BQhx-qw579iY9Ku-U4OsgEJy-qrHnYY2XY4U4HdQRO7~bYooqRsx4Gkgy3y0WWQLGAIk3nQrhPuzhv-TaIBHiYpIoxK~S69VrUoN~bjuF3PJJ~MQY~1DYK29We51YBJ6e5P5Aft1AThbXiqrKivz8kn~NTpXZAjX7akU5N1zEPZjeoSl-O80YIJnW8udKSbgEG5nycAgUwlaqL0PdNkqh8wxmcGh3~PmJHFm03Wnmrd0sFA__"
    },
]