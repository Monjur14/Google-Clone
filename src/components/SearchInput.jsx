import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../assets/google-logo.png";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = () => {
    const { query } = useParams()
    const [searchQuery, setSearchQuery] = useState(query || "")
    const navigate = useNavigate()

    const searchQueryHandler = (event) => {
        if(event.key === "Enter" && searchQuery.length > 0) {
            navigate(`/${searchQuery}/${1}`)
        }
    }
    const searchQueryHandler2 = () => {
        if(searchQuery.length > 0){
            navigate(`/${searchQuery}/${1}`)
        }
    }
    return <div className="w-full flex flex-col items-center gap-6">
        <img src={Logo} alt="" className="w-[230px] md:w-[300px]"/>
        <div className="h-[46px] w-[90%] md:w-[600px] flex items-center gap-3 px-2 md:px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
        <AiOutlineSearch size={24}/>
        <input type="text" className="grow outline-none text-lg"
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuery}  
        autoFocus  
        />
        <div className="flex gap-2 items-center">
            {searchQuery && 
                <IoMdClose size={24} onClick={() => setSearchQuery("")} className="cursor-pointer hidden md:block"/>
            }
            <img src={MicIcon} className="w-[27px] cursor-pointer" alt="" />
            <img src={ImageIcon} alt="" className="w-[27px] hidden md:block cursor-pointer"/>
        </div>
        </div>
        <div className="space-x-2 text-black/90">
            <button className="py-2 px-5 bg-[#f8f9fa] border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 rounded-md" onClick={searchQueryHandler2}>Google Search</button>
            <button className="py-2 px-5 bg-[#f8f9fa] border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 rounded-md">I'm Felling Lucky</button>
        </div>

    </div>;
};

export default SearchInput;
