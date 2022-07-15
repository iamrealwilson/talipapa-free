import { ReactElement , useState } from "react";
import DashboardHeader from "../layout/header";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom"
import CostInfo from "./settings/CostInfo";
import DeliverySetting from "./settings/Delivery";
import ProductInfoSetting from "./settings/ProductInfo";
import MediaSetting from "./settings/MediaSetting";
import BasicInfo from "./settings/BasicInfo";

const OrderSetting=()=>{
const [cuBox,setCuBox] = useState('')

return(
<div className="order_setting_wraper">
<DashboardHeader pagename="Order Settings"/>

<div className="product_setting_wraper">
<div className="relative">
<div className="order_settings scrollbar_one">


  <div className="order_setting_item rounded">
    <div className="flex items-center py-3 px-4 justify-between cursor-pointer down_shadow" onClick={e=>cuBox==='binfo'?setCuBox(''):setCuBox('binfo')}>
     <div className="text-gray-700 flex items-center">
       <span className="text-lg mr-5">Basic Information</span>
       <div className="py-2 px-5 rounded text-sm border">Master Product Reference</div>
      </div>  
     <div className={`transition duration-200 ${cuBox==='binfo'?'rotate-180':''}`}><KeyboardArrowDownIcon/></div>
    </div>  
    
    <div className={`h-0 overflow-hidden transition-all duration-200 ${cuBox==='binfo'?'h-auto':''}`}>
      <BasicInfo/>
    </div>
  </div>


<div className="order_setting_item rounded">
<div className="flex items-center py-3 px-4 justify-between cursor-pointer down_shadow" onClick={e=>cuBox==='pinfo'?setCuBox(''):setCuBox('pinfo')}>
<div className="text-gray-700 flex items-center">
<span className="text-lg mr-5">Product Information</span>
</div>  
<div className={`transition duration-200 ${cuBox==='pinfo'?'rotate-180':''}`}><KeyboardArrowDownIcon/></div>
</div>  

<div className={`h-0 overflow-hidden transition-all duration-200 ${cuBox==='pinfo'?'h-auto':''}`}>

 <ProductInfoSetting/>

</div>
</div>


  <div className="order_setting_item rounded">
    <div className="flex items-center py-3 px-4 justify-between cursor-pointer down_shadow" onClick={e=>cuBox==='minfo'?setCuBox(''):setCuBox('minfo')}>
     <div className="text-gray-700 flex items-center">
       <span className="text-lg mr-5">Media Settings</span>
      </div>  
     <div className={`transition duration-200 ${cuBox==='minfo'?'rotate-180':''}`}><KeyboardArrowDownIcon/></div>
    </div>  
    
    <div className={`h-0 overflow-hidden transition-all duration-200 ${cuBox==='minfo'?'h-auto':''}`}>
      <div className="p-2">

      <MediaSetting/>        
 
      </div>
    </div>
  </div>


  <div className="order_setting_item rounded">
    <div className="flex items-center py-3 px-4 justify-between cursor-pointer down_shadow" onClick={e=>cuBox==='dinfo'?setCuBox(''):setCuBox('dinfo')}>
     <div className="text-gray-700 flex items-center">
       <span className="text-lg mr-5">Delivery</span>
      </div>  
     <div className={`transition duration-200 ${cuBox==='dinfo'?'rotate-180':''}`}><KeyboardArrowDownIcon/></div>
    </div>  
    
    <div className={`h-0 overflow-hidden transition-all duration-200 ${cuBox==='dinfo'?'h-auto':''}`}>
     <DeliverySetting/>
    </div>
  </div>


  <div className="order_setting_item rounded">
    <div className="flex items-center py-3 px-4 justify-between cursor-pointer down_shadow" onClick={e=>cuBox==='cinfo'?setCuBox(''):setCuBox('cinfo')}>
     <div className="text-gray-700 flex items-center">
       <span className="text-lg mr-5">Cost Information</span>
       
      </div>  
     <div className={`transition duration-200 ${cuBox==='cinfo'?'rotate-180':''}`}><KeyboardArrowDownIcon/></div>
    </div>  
    
    <div className={`h-0 overflow-hidden transition-all duration-200 ${cuBox==='cinfo'?'h-auto':''}`}>
      <CostInfo/>
    </div>


  </div>


</div>
</div>

<div className="py-5 ml-3">
<div className="product_setting_nav_wraper">
  <div className={`psn_item ${cuBox==='binfo'?'active':""}`}
  onClick={e=>setCuBox('binfo')}>
    <div className="psn_item_dot"></div>
    <div className="psn_item_text px-5">Basic Information</div>
  </div>

  <div className={`psn_item ${cuBox==='pinfo'?'active':''}`}
  onClick={e=>setCuBox('pinfo')}>
    <div className="psn_item_dot"></div>
    <div className="psn_item_text px-5">Product Information</div>
  </div>

  <div className={`psn_item ${cuBox==='minfo'?'active':""}`}
  onClick={e=>setCuBox('minfo')}>
    <div className="psn_item_dot"></div>
    <div className="psn_item_text px-5">Media Settings</div>
  </div>

  <div className={`psn_item ${cuBox==='dinfo'?'active':""}`}
  onClick={e=>setCuBox('dinfo')}>
    <div className="psn_item_dot"></div>
    <div className="psn_item_text px-5">Delivery</div>
  </div>

  <div className={`psn_item ${cuBox==='cinfo'?'active':""}`}
  onClick={e=>setCuBox('cinfo')}>
    <div className="psn_item_dot"></div>
    <div className="psn_item_text px-5">Cost Information</div>
  </div>
</div>
</div>

</div>

</div>
)
}
export default OrderSetting