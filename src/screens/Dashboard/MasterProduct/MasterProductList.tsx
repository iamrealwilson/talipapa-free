import { ReactElement } from "react";
import DashboardHeader from "../layout/header";
import MPwarning from "./warning";
import SearchIcon from '@mui/icons-material/Search';
import Select from "react-select";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import InfoIcon from '@mui/icons-material/Info';
import ProductListTable from "./tables/ProductListTable";
import { Link } from "react-router-dom"

const MasterProductList=():ReactElement =>{

const OptionsOne = [
    { value: 'Store without sales', label: 'Store without sales' },
    { value: 'Store with sales', label: 'Store with sales' },
];

const OptionsTwo = [
    { value: 'Channel product binding', label: 'Channel product binding' },
    { value: 'Product binding', label: 'product binding' },
];

const OptionsThree = [
    { value: 'Import/Export', label: 'Import/Export' },
];

const AddProductOptions = [
    { value: 'Add Product', label: 'Add Product' },
];

const filterOptions = [
    { value: 'All' , label: 'All' },
    { value: 'Single product' , label: 'Single product' },
    { value: 'Multiple variant' , label: 'Multiple variant' },
    { value: 'Combination' , label: 'Combination' },
    { value: 'Temporary untracked' , label: 'Temporary untracked' },
]

return(
<>
<DashboardHeader pagename="master product list" />
<div className="mp_wraper">
<MPwarning/>

<div className="px-3 mp_grid_wraper">

<div className="p-1">
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

<div className="p-1 text-xs text-gray-700 w-44">
  <Select options={OptionsOne} />
</div>
<div className="p-1 text-xs text-gray-700 w-44">
  <Select options={OptionsTwo} />
</div>

<div className="p-1 flex ml-auto items-center flex_md_col lg:justify-end text-xs col-span-3">
 <div className="mp_info_txt md_d_one">
     <span>Product Activity</span>
     <span><InfoIcon/></span>
 </div>
 <div className="mr-2 w-32">
    <Select options={OptionsThree}/>
 </div>
 <div className="py-1">
     <Link to="/product/settings">
     <button className="mpi_btn"><span>Add Product </span><ArrowDropDownIcon/></button>
     </Link>
 </div>
</div>

</div>

<div className="mt-3 px-2 flex items-center flex_md_col">
   <div className="w-64 p-2 text-xs"><Select options={filterOptions}></Select></div>
   <button className="mpi_btn ml-2 m-1">Search</button>
   <button className="mpi_btn ml-2 m-1 lite"> <span className="mr-1"><FilterListIcon/></span>Filter</button>
</div>

<div className="my-3 px-3">
  <div className="flex items-center flex_md_col">
      <div className="text-md text-gray-700 flex p-2 items-center">Filter :
      <div className="py-1 p-2 text-xs bg-gray-200 ml-2 rounded">Master Product Name</div>
      </div>
      <div className="ml-2 text-md text-gray-700 py-2 flex items-center"> Stock Status :
      <div className="py-1 p-2 text-xs bg-gray-200 ml-2 rounded">All</div>
      </div>

      <div className="flex items-center ml-2 py-2 text-sm text-indigo-700">
        <span className="small_svg"><RestartAltIcon/></span>
        <span>Reset</span>
      </div>

  </div>
</div>

</div>

<ProductListTable/>

</>
)
}
export default MasterProductList