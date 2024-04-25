import {createBrowserRouter} from "react-router-dom";
import WorkoutTracker from "./components/workout-tracker.tsx";
import WorkoutSchedule from "./components/workout-schedule.tsx";
import Slide from "./components/slide.tsx";
import Layout from "./pages/layout.tsx";
import Login from "./components/forms/login.tsx";
import SignUp from "./components/forms/sign-up.tsx";
import Objective from "./components/forms/objective.tsx";

const router = createBrowserRouter([
    {
        path: "/intro",
        Component: Slide
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/signup",
        Component: SignUp
    },
    {
        path: "/",
        Component: Objective
    },
    {
        Component: Layout,
        children: [
            {
                path: "/tracker",
                Component: WorkoutTracker
            },
            {
                path: "/schedule",
                Component: WorkoutSchedule
            },
        ]
    },
])

export default router;