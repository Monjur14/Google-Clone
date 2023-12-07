import { quickLinks, settingMenu } from "../utils/Constants";

const Footer = () => {
    return <div className="px-3 py-2 flex flex-col gap-2">
        <div>
            <h4>Bangladesh</h4>
        </div>
        <hr className="w-full h-[1.2px] bg-black/20"/>
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
            <div className="flex gap-4">
                <h3 className="cursor-pointer hover:underline">About</h3>
                <h3 className="cursor-pointer hover:underline">Advertising</h3>
                <h3 className="cursor-pointer hover:underline">Business</h3>
                <h3 className="cursor-pointer hover:underline hidden md:block">How Search Works</h3>
            </div>
            <div className="flex gap-4">
                <h3 className="cursor-pointer hover:underline">Privacy</h3>
                <h3 className="cursor-pointer hover:underline">Terms</h3>
                <h3 className="cursor-pointer hover:underline">Settings</h3>
            </div>
        </div>
    </div>;
};

export default Footer;
