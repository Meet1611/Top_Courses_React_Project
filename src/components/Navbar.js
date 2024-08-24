import React from "react";
import './Navbar.css';
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const Navbar = ( { isLikedClicked,setIsLikedClicked} ) => {

  function likeHandler() {
    setIsLikedClicked(!isLikedClicked);
  }

  return (
    <div className="relative">
      <nav className="bg-[#1f1c36] py-4">
        <h1 className="text-3xl font-bold text-center text-white">Top Courses</h1>
      </nav>
      <div className="absolute right-12 top-3 h-[40px] w-[40px] rounded-full bg-white flex justify-center items-center cursor-pointer bounce">
        <buttom className="cursor-pointer" onClick={likeHandler}>
          {
            isLikedClicked ? 
            (<FcLike size="1.75rem" color="#e74c3c" />) : 
            (<FcLikePlaceholder fontSize="1.75rem" color="#e74c3c" />)
          }  
        </buttom>
      </div>
    </div>
  );
};

export default Navbar;
