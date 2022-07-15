import { ReactElement  } from "react"
import { MdClose } from "react-icons/md"
import FilterCategory from "../order/FilterCategory"
import Select from "react-select"

const ProductFilter=(props:any):ReactElement =>{

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
<>
<div className="order_filterbox_wraper">

 <div className="order_filterbox">
  <div className="ofi_header">
      <h4>Filter</h4>
      <div className="ofi_close" onClick={e=>props.close()}><MdClose/></div>
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
      <button className="ofia_btn mr-3 text-gray-700" onClick={e=>props.close()}>Cancel</button>
      <button className="ofia_btn text-gray-700 confirm">Confirm</button>
    </div>
  </div>
 </div>

</div>
</>
)
}
export default ProductFilter