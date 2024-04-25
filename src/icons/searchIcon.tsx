import {SVGProps} from "react";

export interface searchIconProps extends SVGProps<SVGSVGElement> {
}

const SearchIcon = (props: searchIconProps) => {
    return (
        <svg className="feather feather-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round"
             strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"
             {...props}
        >
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" x2="16.65" y1="21" y2="16.65"/>
        </svg>

    );
};

export default SearchIcon;
