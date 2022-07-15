import { ReactElement } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import DHMenu from "./Menu";
import { Link } from "react-router-dom"

const DHSidebar=(props: any):ReactElement =>{
return(
<div className={`dh_sidebar ${props.active?'show':''}`}>
  <div className="dh_sidebar_title active">
     <DashboardIcon/> 
     <Link to="/dashboard"><span>Dashboard</span></Link>
  </div>
  <div className="dhs_menu_wraper scrollbar_one">

  <DHMenu
    Icon = {ShoppingCartOutlinedIcon}
    name="Orders"
    menus={[
      {
       type:"link",
       name:"All Orders",
       to: "/orders/landing"
      },
      {
        type:"menu",
        name:"Order Process",
        links: [
          {name:"Pending Order",to:"/order/pending"},
          {name:"Pending Print Order",to:"/order/pending-print"},
          {name:"To Be Collected",to:"/order/pending-collected"},
          {name:"Shipped",to:"/order/shipped"},
          {name:"Stored",to:"/order/stored"},
        ]
      },
      {
        type:"link",
        name:"Abnormal Order",
        to: "/order/abnormal"
      },
      {
        type:"link",
        name:"Operation Record",
        to: "/"
      }
    ]}
  />

 <DHMenu
    Icon = {ShoppingBagOutlinedIcon}
    name="Master Product"
    menus={[
      {type:"link",name:"Master Product List",to:"/master/product-list"},
      {type:"link",name:"Price Management",to:"/master/price-management"},
      {
        type:"link",
        name:"Product Settings",
        to: "/product/settings"
      }
    ]}
  />

  <DHMenu
    Icon = {DeviceHubIcon}
    name="Channel Product"
    menus={[]}
  />

  <DHMenu
    Icon = {ViewInArIcon}
    name="Stock"
    menus={[]}
  />

  <DHMenu
    Icon = {WarehouseIcon}
    name="WareHouse"
    menus={[]}
  />

  <DHMenu
    Icon = {BookmarkIcon}
    name="Promotion"
    menus={[]}
  />
  <DHMenu
    Icon = {PeopleAltOutlinedIcon}
    name="Promotion"
    menus={[]}
  />

  <DHMenu
    Icon = {BarChartOutlinedIcon}
    name="Reports"
    menus={[
      {
        type:"menu",
        name:"Sales Report",
        links: [
          {name:"Order Report",to:"/report/order-report"},
          {name:"Master Product Sales",to:"/"},
          {name:"Master Product Activity",to:"/"},
          {name:"Product Sales",to:"/report/product-sales"},
          {name:"Variants Sales",to:""},
          {name:"Channel Sales",to:"/"},
          {name:"Store Sales",to:"/report/store-sales"}
        ]
      },
    ]}
  />

  <DHMenu
    Icon = {AttachmentOutlinedIcon}
    name="Integration"
    menus={[]}
  />

  </div>
</div>
)
}
export default DHSidebar