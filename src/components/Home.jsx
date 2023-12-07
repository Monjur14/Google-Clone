import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
    return <div className="flex flex-col justify-between h-[100vh]">
        <HomeHeader/>
        <SearchInput/>
        <Footer/>
    </div>;
};

export default Home;
