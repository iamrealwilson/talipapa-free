import { ReactElement } from "react";
import DashboardHeader from "../layout/header";
import SearchIcon from '@mui/icons-material/Search';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Select from "react-select";
import InfoIcon from '@mui/icons-material/Info';

const ProductSaleReport=():ReactElement =>{

const shortOptions = [
    { value: 'Qty Sales High to low', label: 'Qty Sales High to low' },
    { value: 'Qty Sales low to High', label: 'Qty Sales low to High' },
    { value: 'Price High to low', label: 'Price High to low' },
    { value: 'Price low to High', label: 'Price low to High' }
]

const categoryOptions = [
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Beauty and fitnes', label: 'Beauty and fitnes' },
    { value: 'Books', label: 'Books' },
]

return(
<>
<div className="ps_sale_wraper">
<DashboardHeader pagename="Product Sales Report" />
<div>
  <div className="bg-white">  
  <div className="px-5 py-3 flex items-center">
      <span className="text-gray-700 text-sm">Store : </span> 
      <div className="form-check mx-2">
      <input className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-indigo-100 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" id="flexCheckDefault3"/>
      </div>
      <span className="text-gray-700 text-sm">All</span>
  </div>  
   
  <div className="grid px-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">

   <div className="p-2 flex items-center ps_sm_col">
     <span className="text-sm text-gray-700 w-24">Keyword :</span>
     <div className="ps_select_input">
        <div className="pr-2">
           <select className="bg-white text-gray-700">
               <option>Product Name</option>
               <option>Product Price</option>
           </select> 
        </div>
        <div>
            <input type="text" placeholder="Please enter content"/>
        </div>
        <div className="p-1 text-gray-700 bg-gray-100">
           <SearchIcon/>
        </div>
     </div>
   </div>

   <div className="p-2 flex items-center ps_sm_col">
     <span className="text-sm text-gray-700 w-16">Time :</span>
     <div className="ps_date_input">
        <div className="pr-2">
           <input type="date"/>
        </div>
        <div className="px-2"><ArrowRightAltIcon/></div>
        <div>
            <input type="date" />
        </div>
     </div>
   </div>

   <div className="p-2 flex items-center ps_sm_col">
     <span className="text-sm text-gray-700 w-24">Short By :</span>
     <div className="ps_dropdown_select text-sm">
     <Select options={shortOptions}/>
     </div>
   </div>

   <div className="p-2 flex items-center ps_sm_col">
     <span className="text-sm text-gray-700 w-24">Category :</span>
     <div className="ps_dropdown_select text-sm">
     <Select options={categoryOptions}/>
     </div>
   </div>

  </div>

  <div className="flex justify-center items-center py-5">
    <button className="px-4 bg-indigo-600 text-white py-2 text-sm rounded hover:bg-indigo-700">Search</button>
    <button className="px-4 bg-gray-100 text-gray-700 py-2 border text-sm rounded hover:bg-gray-200 ml-3">Reset</button>
  </div>
</div>

<div className="p-3 ps_dasitem_wraper">
 
 <div className="p-2">
 <div className="ps_dasitem ps_dasitem_one">
    <div className="flex item-center justify-between">
        <span className="text-gray-500 text-lg">Total Products</span>
        <div className="ps_dasitem_infobtn">
            i
        </div>
    </div>
    <div className="mt-5 text-2xl text-gray-600">
        0
    </div>
 </div>
 </div>

 <div className="p-2">
 <div className="ps_dasitem ps_dasitem_two">
    <div className="flex item-center justify-between">
        <span className="text-gray-500 text-lg">Valid Orders</span>
        <div className="ps_dasitem_infobtn">
            i
        </div>
    </div>
    <div className="mt-5 text-2xl text-gray-700">
        0
    </div>
 </div>
 </div>

<div className="p-2">
 <div className="ps_dasitem ps_dasitem_three">
    <div className="flex item-center justify-between">
        <span className="text-gray-500 text-lg">Total Qty Sold</span>
        <div className="ps_dasitem_infobtn">
            i
        </div>
    </div>
    <div className="mt-5 text-2xl text-gray-700">
        0
    </div>
 </div>
 </div>

 <div className="p-2">
 <div className="ps_dasitem ps_dasitem_four">
    <div className="flex item-center justify-between">
        <span className="text-gray-500 text-lg">Product Original Price Income</span>
        <div className="ps_dasitem_infobtn">
            i
        </div>
    </div>
    <div className="mt-5 text-2xl text-gray-700">
    0
    </div>
 </div>
 </div>

 <div className="p-2">
 <div className="ps_dasitem ps_dasitem_five">
    <div className="flex item-center justify-between">
        <span className="text-gray-500 text-lg">Total Valid Buyer</span>
        <div className="ps_dasitem_infobtn">
            i
        </div>
    </div>
    <div className="mt-5 text-2xl text-gray-700">
    € 0
    </div>
 </div>
 </div>

</div>

</div>
</div>
</>
)
}
export default ProductSaleReport