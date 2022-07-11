import { ReactElement } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';

const SearchFilter=():ReactElement =>{
return(
<div className="order_searchfilter_wraper">
 <div className="orf_search_top">
    <div className="orf_dropsearch">
      <div className="orfd_dropdown">
        <span className="text-gray-700">Order ID</span>
        <div><ArrowDropDownIcon/></div> 
      </div> 
      <div className="orfd_input">
        <input type="text" placeholder="Separate multiple info with commas or s..." />
      </div>
    </div>
    <div className="orf_dropdown">
        <span className="text-gray-400">Country</span>
        <div><ArrowDropDownIcon/></div> 
    </div>
    <div className="orf_input">
    <input type="text" placeholder="Channel" />
    </div>
 </div>

 <div className="orf_search_bottom py-3">
    <div className="orf_input">
     <input type="text" placeholder="Store Name" />
    </div>
    <div className="orf_dropdown">
        <span className="text-gray-400">Create At Descending</span>
        <div><ArrowDropDownIcon/></div> 
    </div>

    <div className="orf_dropdown">
        <span className="text-gray-700">Order ID</span>
        <div><ArrowDropDownIcon/></div> 
      </div> 
    
    <button className="orf_search">Search</button>
    <div className="orf_filter text-gray-700">
        <FilterListIcon/>
        <span>Filter</span>
    </div>
 </div>
</div>
)
}
export default SearchFilter