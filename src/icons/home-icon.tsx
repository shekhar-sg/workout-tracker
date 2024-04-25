import {SVGProps} from "react";

export interface homeIconProps extends SVGProps<SVGSVGElement> {
}
const HomeIcon = (props:homeIconProps) => {

    return (
        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg"
             {...props}
        >
            <path
                d="M23.8419 10.6616C23.8419 10.3909 23.7343 10.1313 23.5429 9.93985C23.3515 9.74844 23.0919 9.6409 22.8212 9.6409C22.5505 9.6409 22.2908 9.74844 22.0994 9.93985C21.908 10.1313 21.8005 10.3909 21.8005 10.6616H23.8419ZM4.78874 10.6616C4.78874 10.3909 4.6812 10.1313 4.48978 9.93985C4.29837 9.74844 4.03875 9.6409 3.76804 9.6409C3.49733 9.6409 3.23771 9.74844 3.04629 9.93985C2.85487 10.1313 2.74734 10.3909 2.74734 10.6616H4.78874ZM24.8217 14.1048C24.9152 14.2051 25.0279 14.2855 25.1531 14.3413C25.2783 14.3971 25.4134 14.4271 25.5505 14.4295C25.6875 14.4319 25.8237 14.4067 25.9508 14.3554C26.0779 14.304 26.1933 14.2276 26.2902 14.1307C26.3872 14.0338 26.4636 13.9183 26.5149 13.7912C26.5662 13.6641 26.5915 13.528 26.589 13.3909C26.5866 13.2539 26.5566 13.1187 26.5008 12.9935C26.445 12.8683 26.3646 12.7556 26.2643 12.6622L24.8217 14.1048ZM13.2946 1.13504L14.0159 0.413742C13.8245 0.222598 13.5651 0.115234 13.2946 0.115234C13.0241 0.115234 12.7647 0.222598 12.5733 0.413742L13.2946 1.13504ZM0.324867 12.6622C0.224584 12.7556 0.14415 12.8683 0.0883622 12.9935C0.0325747 13.1187 0.00257694 13.2539 0.00015885 13.3909C-0.00225924 13.528 0.0229516 13.6641 0.0742876 13.7912C0.125623 13.9183 0.202033 14.0338 0.298957 14.1307C0.395881 14.2276 0.511335 14.304 0.63843 14.3554C0.765526 14.4067 0.901659 14.4319 1.03871 14.4295C1.17576 14.4271 1.31092 14.3971 1.43612 14.3413C1.56133 14.2855 1.67402 14.2051 1.76746 14.1048L0.324867 12.6622ZM6.48991 26.6526H20.0993V24.6112H6.48991V26.6526ZM23.8419 22.91V10.6616H21.8005V22.91H23.8419ZM4.78874 22.91V10.6616H2.74734V22.91H4.78874ZM26.2643 12.6622L14.0159 0.413742L12.5733 1.85634L24.8217 14.1048L26.2643 12.6622ZM12.5733 0.413742L0.324867 12.6622L1.76746 14.1048L14.0159 1.85634L12.5733 0.413742ZM20.0993 26.6526C21.0919 26.6526 22.0438 26.2583 22.7457 25.5564C23.4476 24.8546 23.8419 23.9026 23.8419 22.91H21.8005C21.8005 23.8491 21.0383 24.6112 20.0993 24.6112V26.6526ZM6.48991 24.6112C5.55087 24.6112 4.78874 23.8491 4.78874 22.91H2.74734C2.74734 23.9026 3.14164 24.8546 3.84351 25.5564C4.54538 26.2583 5.49732 26.6526 6.48991 26.6526V24.6112Z"
                fill="#7F7F7F"/>
        </svg>

    );
};

export default HomeIcon;
