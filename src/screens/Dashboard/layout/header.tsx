import { ReactElement } from "react";
import NavBadge from "./Badge";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DHSidebar from "./Sidebar";
import { FaBars } from "react-icons/fa"
import { MdClose } from "react-icons/md"
import { useState } from "react";

const DashboardHeader=(props: any):ReactElement =>{
const [Sidebar,setSidebar] = useState(false)

return(
<>
<header className="dashboard_header">
  <div className="dh_start">

   <div className="dh_menu_toggle" onClick={e=>Sidebar?setSidebar(false):setSidebar(true)}>
     {Sidebar?<MdClose/>:<FaBars/>}
   </div>  

   <div className="dh_title ml-2 text-gray-700">
     {props.pagename.length > 15?props.pagename.substr(0,15) + "...":props.pagename}
   </div>


   </div>

  <div className="dh_middle">
     <div className="dh_dropdown_wraper text-gray-600">
       <ContactSupportIcon/> <span>Help Center</span>
     </div> 
     <div className="dh_dropdown_wraper text-gray-600">
      <span>English</span>
      <div className="ml-2 pb-2"><KeyboardArrowDownIcon/></div>
     </div>  

     <div className="dh_dropdown_wraper text-gray-600 no_border">
       <PersonIcon/> <span>Wilsonmarasigan@alo.com</span> 
       <div className="ml-2 pb-2"><KeyboardArrowDownIcon/></div>
     </div> 
  </div>

  <DHSidebar active={Sidebar}/>
</header>
</>
)
}
export default DashboardHeader