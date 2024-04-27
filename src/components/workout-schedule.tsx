import BackIcon from "../icons/back-icon.tsx";
import CHe from "../icons/forward-icon.tsx";
import {addMonths, format, getDaysInMonth, subMonths} from "date-fns";
import {useMemo, useState} from "react";
import "../../node_modules/swiper/swiper-bundle.min.css"
import {Swiper, SwiperSlide} from "swiper/react"

const WorkoutSchedule = () => {
    const today = new Date(Date.now());
    const [month, setMonth] = useState(today);
    const [activeDate, setActiveDate] = useState(today.getDay());

    const days = useMemo(() => {
        const daysInMonth = getDaysInMonth(month);
        return Array.from({length: daysInMonth}, (_, k) => k + 1).map((day) => {
            const tempMonth = new Date(month);
            tempMonth.setDate(day);
            return {
                date: day,
                dayOfWeek: format(tempMonth, "EEE")
            }
        })
    }, [month])

    const hours = useMemo(() => {
        return Array.from({length: 24}, (_, k) => k + 1).map((item) => {
            const tempHour = new Date(month);
            tempHour.setHours(item,0,0,0);
            return format(tempHour, "HH:mm a")
        })
    }, [month])

    return <div className={"space-y-4 pb-4 w-full overflow-hidden"}>
        <div className={"flex justify-center gap-2 tex prose-p:text-xs"}>
            <button onClick={() => {
                setMonth(subMonths(month, 1))
            }}>
                <BackIcon className={"size-4"} strokeWidth={4}/>
            </button>
            <p>{format(month, "MMM yyyy")}</p>
            <button onClick={() => {
                setMonth(addMonths(month, 1))

            }}>
                <CHe className={"size-4"} strokeWidth={4}/>
            </button>
        </div>
        <div
            className={'px-5'}
        ><Swiper
            className={"w-full prose prose-headings:m-0 prose-p:m-0 prose-p:text-xs prose-p:text-gray-900 prose-p:font-semibold"}
            slidesPerView={"auto"}
            spaceBetween={8}
            initialSlide={today.getDate() - 1}
        >
            {
                days.map((item, index) => {
                    const {date, dayOfWeek} = item
                    const isActive = activeDate === date;
                    return (
                        <SwiperSlide
                            key={index}
                            onClick={() => {
                                setActiveDate(date)
                            }}
                            style={{
                                width: "4rem",
                            }}
                        >
                            <button
                                className={`w-full pt-2 pb-3 rounded-lg cursor-pointer justify-center items-center hover:gradient-custom transition-all duration-75 ${isActive ? "gradient-custom  text-white" : ""}`}>
                                <span className={"text-inherit"}> {dayOfWeek} </span>
                                <br/>
                                <span className={`text-2xl font-semibold text-inherit`}>
                                    {date}
                                </span>
                            </button>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper></div>
        <ul>
            {
                hours.map((item) => {
                    return (
                        <li key={item} className={"px-4 border-b-2 border-gray-200 text-xs font-semibold py-2 m-0"}>
                            {item}
                        </li>
                    )
                })}
        </ul>
    </div>
};

export default WorkoutSchedule;
