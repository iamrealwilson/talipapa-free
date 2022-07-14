import { ReactElement } from "react";
import DashboardHeader from "../layout/header";
import MPwarning from "./warning";
import SearchIcon from '@mui/icons-material/Search';
import Select from "react-select";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FilterListIcon from '@mui/icons-material/FilterList';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import InfoIcon from '@mui/icons-material/Info';

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

<div className="p-2">
  <div className="mp_select_input">
     <div className="px-2">
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

<div className="p-2 text-xs text-gray-700 w-44">
  <Select options={OptionsOne} />
</div>
<div className="p-2 text-xs text-gray-700 w-44">
  <Select options={OptionsTwo} />
</div>

<div className="p-2 flex ml-auto items-center justify-end text-xs col-span-3">
 <div className="mp_info_txt">
     <span>Product Activity</span>
     <span><InfoIcon/></span>
 </div>
 <div className="mx-2 w-32">
    <Select options={OptionsThree}/>
 </div>
 <div>
     <button className="mpi_btn"><span>Add Product </span><ArrowDropDownIcon/></button>
 </div>
</div>

</div>

<div className="mt-3 px-5 flex items-center">
   <div className="w-72"><Select options={filterOptions}></Select></div>
   <button className="mpi_btn ml-2">Search</button>
   <button className="mpi_btn ml-2 lite"> <span className="mr-1"><FilterListIcon/></span>Filter</button>
</div>

<div className="my-3 px-5">
  <div className="flex items-center">
      <div className="text-md text-gray-700 flex items-center">Filter :
      <div className="py-1 px-2 text-xs bg-gray-200 ml-2 rounded">Master Product Name</div>
      </div>
      <div className="ml-2 text-md text-gray-700 flex items-center"> Stock Status :
      <div className="py-1 px-2 text-xs bg-gray-200 ml-2 rounded">All</div>
      </div>

      <div className="flex items-center ml-2 text-sm text-indigo-700">
        <span className="small_svg"><RestartAltIcon/></span>
        <span>Reset</span>
      </div>

  </div>
</div>

</div>
<div className="mp_product_table">
  <div className="mppt_header">
     <div className="mppt_tab_btn active">
         <span>All</span>
         <div className="mppt_btn_sub">0</div>
     </div>

     <div className="mppt_tab_btn">
         <span>Single product</span>
         <div className="mppt_btn_sub">0</div>
     </div>

     <div className="mppt_tab_btn">
         <span>Multiple variant</span>
         <div className="mppt_btn_sub">0</div>
     </div>

     <div className="mppt_tab_btn">
         <span>Combination</span>
         <div className="mppt_btn_sub">0</div>
     </div>

     <div className="mppt_tab_btn">
         <span>Temporary Untracked</span>
         <div className="mppt_btn_sub">0</div>
     </div>
  </div>

  <div className="px-2 table_overflow">
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all" type="checkbox" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Master product & image
                </th>
                <th scope="col" className="px-6 py-3">
                    Varient
                </th>
                <th scope="col" className="px-6 py-3">
                    Master SKU
                </th>
                <th scope="col" className="px-6 py-3">
                    Available Stock
                </th>
                <th scope="col" className="px-6 py-3">
                <div className="mp_info_txt">
                  <span>Stock Status</span>
                <span><InfoIcon/></span>
                </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Barcode
                </th>
                <th scope="col" className="px-6 py-3">
                    Binded product
                </th>
                <th scope="col" className="px-6 py-3">
                    Bind Store
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
          

        </tbody>
    </table>
</div>
</div>

</div>

</>
)
}
export default MasterProductList