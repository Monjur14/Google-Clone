import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/user.png";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
    return <div className="flex items-center gap-2">
        <span className="w-10 h-10 grid place-items-center rounded-full hover:bg-black/[0.05] cursor-pointer"><TbGridDots size={24} color="#5f6368"/></span>
        <div className="cursor-pointer h-10 w-10 rounded-full relative grid place-items-center">
            <span className="absolute">
                <img src={ProfileRing} alt="" />
            </span>
            <span className="absolute w-[80%]">
                <img src={Profile} alt="" />
            </span>
        </div>
    </div>;
};

export default ProfileIcon;
