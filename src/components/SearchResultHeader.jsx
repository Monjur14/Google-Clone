import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import Logo from "../assets/google-logo.png";
import SearchInput from "./SearchInput";
import ProfileIcon from "./ProfileIcon";
import { Context } from "../utils/ContextApi";
import { menu } from "../utils/Constants";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchResultHeader = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState(query || "");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && searchQuery.length > 0) {
      navigate(`/${searchQuery}/${1}`);
    }
  };
  const [selectedMenu, setSelectedMenu] = useState("All")
  const clickHandler = (menui) => {
    setSelectedMenu(menui.name)
  }

  return (
    <div className="p-[10px] pb-2 md:pr-5 md:pt-3 border-b border-[#ebebeb] flex md:block flex-col items-center sticky top-0 bg-white">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center grow">
          <img src={Logo} alt="" className="hidden md:block w-[92px] mr-7 cursor-pointer" />
          <div className="h-[46px] w-[90%] md:w-[600px] flex items-center gap-3 px-2 md:px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0">
            <AiOutlineSearch size={24} />
            <input
              type="text"
              className="grow outline-none text-lg"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
              autoFocus
            />
            <div className="flex gap-2 items-center">
              {searchQuery && (
                <IoMdClose
                  size={24}
                  onClick={() => setSearchQuery("")}
                  className="cursor-pointer hidden md:block"
                />
              )}
              <img src={MicIcon} className="w-[27px] cursor-pointer" alt="" />
              <img
                src={ImageIcon}
                alt=""
                className="w-[27px] hidden md:block cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="hidden md:block"><ProfileIcon/></div>
      </div>
      <div className="flex items-center gap-6 mt-4">
        {menu.map((item, index) => (
            <span className={`flex items-center gap-1.5 cursor-pointer text-[#5f6368] ${selectedMenu === item.name ? "text-[#1a73e8] font-semibold" : ""}`} key={index}
            onClick={() => clickHandler(item)} >
                <p className="hidden md:block">{item.icon}</p>
                <h2>{item.name}</h2>
            </span>
        ))}
      </div>
    </div>
  );
};

export default SearchResultHeader;
