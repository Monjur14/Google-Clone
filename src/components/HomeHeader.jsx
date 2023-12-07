import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
    return <div className="flex justify-end items-center gap-4 py-3 px-3">
        <h3 className="cursor-pointer hover:underline">Gmail</h3>
        <h3 className="cursor-pointer hover:underline">Images</h3>
        <ProfileIcon/>
    </div>;
};

export default HomeHeader;
