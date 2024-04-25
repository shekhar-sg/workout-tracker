import {SVGProps} from "react";

interface profileIconProps extends SVGProps<SVGSVGElement> {
}

const ProfileIcon = (props: profileIconProps) => {
    return (
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
             {...props}
        >
            <path
                d="M1.22491 20.5494C1.22491 19.1056 1.79845 17.721 2.81935 16.7001C3.84025 15.6792 5.22489 15.1057 6.66866 15.1057H17.5562C18.9999 15.1057 20.3846 15.6792 21.4055 16.7001C22.4264 17.721 22.9999 19.1056 22.9999 20.5494C22.9999 21.2713 22.7131 21.9636 22.2027 22.4741C21.6922 22.9845 20.9999 23.2713 20.278 23.2713H3.94679C3.2249 23.2713 2.53258 22.9845 2.02213 22.4741C1.51168 21.9636 1.22491 21.2713 1.22491 20.5494Z"
                stroke="#7F7F7F" stroke-width="2" stroke-linejoin="round"/>
            <path
                d="M12.1123 9.66166C14.3672 9.66166 16.1951 7.83372 16.1951 5.57884C16.1951 3.32397 14.3672 1.49603 12.1123 1.49603C9.85742 1.49603 8.02948 3.32397 8.02948 5.57884C8.02948 7.83372 9.85742 9.66166 12.1123 9.66166Z"
                stroke="#7F7F7F" stroke-width="2"/>
        </svg>
    );
};

export default ProfileIcon;