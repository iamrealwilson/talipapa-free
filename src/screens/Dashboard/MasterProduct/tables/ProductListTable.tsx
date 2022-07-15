import { ReactElement , useState } from "react"
import InfoIcon from '@mui/icons-material/Info';

const ProductListTable=():ReactElement =>{
 
const [Tab,setTab] = useState('all')    

return(
<>
<div className="mp_product_table">
  <div className="overflow-x-auto"> 
  <div className="mppt_header">
     <div className={`mppt_tab_btn ${Tab==='all'?'active':''}`}
      onClick={e=>setTab('all')}
     >
         <span>All</span>
         <div className="mppt_btn_sub">0</div>
     </div>

     <div className={`mppt_tab_btn ${Tab==='single'?'active':''}`}
      onClick={e=>setTab('single')}>
         <span>Single product</span>
         <div className="mppt_btn_sub">0</div>
     </div>

     <div className={`mppt_tab_btn ${Tab==='multiple'?'active':''}`}
      onClick={e=>setTab('multiple')}>
         <span>Multiple variant</span>
         <div className="mppt_btn_sub">0</div>
     </div>

     <div className={`mppt_tab_btn ${Tab==='combination'?'active':''}`}
      onClick={e=>setTab('combination')}>
         <span>Combination</span>
         <div className="mppt_btn_sub">0</div>
     </div>

     <div className={`mppt_tab_btn ${Tab==='untracked'?'active':''}`}
      onClick={e=>setTab('untracked')}>
         <span>Temporary Untracked</span>
         <div className="mppt_btn_sub">0</div>
     </div>
  </div>
  </div>

<div className="px-2 table_overflow table_overflow">
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
export default ProductListTable