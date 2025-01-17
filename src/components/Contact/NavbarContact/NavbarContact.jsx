// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../../common/Navbar/Navbar";
// import Megha2 from "..//..//..//../public/Images/contactUs/t2.jpg";

const NavbarContact = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const menuClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        className="
            bg-no-repeat   bg-top bg-cover h-[80vh] xs:h-[65vh] lg:h-[100vh] xl:h-[100vh] 2xl:h-[100vh]  flex flex-col justify-between"
        style={{
          backgroundImage: `url(${"https://i.ibb.co/8dSzJZg/t2-66c42000acf02.webp"})`,
        }}
      >
        <Navbar></Navbar>
        {/* bg img footer content */}
        <div className="heroImgParent hidden">
          <div>
            <h2 className="heroImgTitle">Contact</h2>
            <p className=" heroImgContentPara ">
              Home{" "}
              <span>
                {" "}
                <FaAngleRight></FaAngleRight>
              </span>{" "}
              Contact
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarContact;
