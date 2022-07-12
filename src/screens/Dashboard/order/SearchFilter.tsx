import { ReactElement , useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import { MdClose } from "react-icons/md";
import FilterCategory from "./FilterCategory";
import Select from "react-select"

const SearchFilter=():ReactElement =>{
const [FIlter,setFilter] = useState(false)

const sourceOptions = [
  {value:"Market",label:"Market"},
  {value:"Seller",label:"Seller"},
  {value:"Buyer",label:"Buyer"},
]

const shortbyOptions = [
  {value:"Newest",label:"Newest"},
  {value:"Oldest",label:"Oldest"}
]

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
    </div> 
    
    <button className="orf_search">Search</button>
    <div className="orf_filter text-gray-700" onClick={e=>setFilter(true)}>
        <FilterListIcon/>
        <span>Filter</span>
    </div>
 </div>

 {FIlter?

 <div className="order_filterbox_wraper">

 <div className="order_filterbox">
  <div className="ofi_header">
      <h4>Filter</h4>
      <div className="ofi_close" onClick={e=>setFilter(false)}><MdClose/></div>
  </div>

  <div className="ofi_filter_wraper">
    <div className="ofi_filter grid xm:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
     
     <div className="ofi_filter_item flex flex-col">
       <span className="text-gray-700 mb-3">Select Master Category</span>
       <FilterCategory/>
     </div>

     <div className="ofi_filter_item flex flex-col">
       <span className="text-gray-700 mb-3">On Sale Shop</span>
       <input type="text" placeholder="On Sale Shop"/>
     </div>

     <div className="ofi_filter_item flex flex-col">
       <span className="text-gray-700 mb-3">Product Sources</span>
       <Select options={sourceOptions}/>
     </div>

     <div className="ofi_filter_item flex flex-col">
       <span className="text-gray-700 mb-3">Create time</span>
       <input type="date" placeholder="Create Time"
       />
     </div>

     <div className="ofi_filter_item flex flex-col">
       <span className="text-gray-700 mb-3">Sort By</span>
       <Select options={shortbyOptions}/>
     </div>

    </div>
  </div>

  <div className="ofi_action">
    <div></div>
    <div>
      <button className="ofia_btn mr-3 text-gray-700" onClick={e=>setFilter(false)}>Cancel</button>
      <button className="ofia_btn text-gray-700 confirm">Confirm</button>
    </div>
  </div>
 </div>

</div>:null}

</div>
)
}
export default SearchFilter