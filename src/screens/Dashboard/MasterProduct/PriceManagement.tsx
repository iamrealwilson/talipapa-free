import { ReactElement, useState } from "react";
import DashboardHeader from "../layout/header";
import SearchIcon from '@mui/icons-material/Search';
import Select from "react-select";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import PriceManagementTable from "./tables/PriceManagementTeable";
import CloseIcon from '@mui/icons-material/Close';
import SyncIcon from '@mui/icons-material/Sync';
import ProductFilter from "./Filter";

const MPPriceManagement=():ReactElement =>{
const [warning,setWarning] = useState(true)
const [Filter,setFilter] = useState(false)

const inputOptions = [
    { value: 'Import/Export', label: 'Import/Export' },
];

function CloseFilter(){
   setFilter(false)
}

return(
<>
<DashboardHeader pagename="Price Management" />
<div className="mp_wraper">

{warning?
<div className="mpwarning_wraper">
 <div className="mpwarning">
     <div className="flex items-center justify-between">
        <div className="flex items-center"> 
        <div className="text-sm text-gray-700">
            Master SKU Auto-Bind Setting (Not Enable) Click here to jump to 
            the page for setting up Master Product automatic binding
        </div>
        </div>
        <div className="cursor-pointer pl-2" onClick={e=>warning?setWarning(false):setWarning(true)}>
          <CloseIcon/>
        </div>
     </div>
 </div>
</div>:null
}


<div className="px-3 mp_grid_wraper">

<div className="px-1 py-2">
  <div className="mp_select_input">
     <div className="p-1">
         <select>
             <option>Master Product Name</option>
             <option>Product Name</option>
         </select>
     </div>
     <div className="mp_border_right">
        <input type="text" placeholder="Please Enter"/> 
     </div> 
     <div className="mp_input_searchicon">
        <SearchIcon/>
     </div>
  </div>  
</div>

<div className="flex items-center flex_md_col">
   <div className="w-64 p-1 text-xs mp_select_input mr-2">
       <input type="text" className="h-7"
        placeholder="Store Name"
       />
    </div>
   <button className="mpi_btn mr-2 m-1">Search</button>
   <button className="mpi_btn lite m-1" onClick={e=>setFilter(true)}> <span className="mr-1"><FilterListIcon/></span>Filter</button>
</div>

<div className="p-1 flex ml-auto items-center flex_md_col lg:justify-end text-xs col-span-3">
 <div className="mr-2 w-32">
    <Select options={inputOptions}/>
 </div>
 <div className="py-1">
     <button className="mpi_btn">
         <div className="mpi_btn_icon"><SyncIcon/></div>
         <span>Sync Promotion </span>
    </button>
 </div>
</div>

</div>

</div>

<PriceManagementTable/>
{Filter?<ProductFilter close={CloseFilter}/>:null}
</>
)
}
export default MPPriceManagement