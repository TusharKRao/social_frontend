import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./MainPage.css";


export const MainPage = () => {

    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };



  //    const [authenticated, setAuthenticated] = useState(null);
  //    const location = useLocation();
  //    console.log(location.state.test);
  //    useEffect(() => {
  //        const loggedInUser = localStorage.getItem("authenticated");
  //        if (loggedInUser) {
  //            setAuthenticated(loggedInUser);
  //        }
  //    }, []);

  return (
    <>
      <div>
            <ProSidebar>
                <SidebarHeader>
                    <p>Logo</p>
                </SidebarHeader>
            </ProSidebar>
        </div>
    </>
  );
};






