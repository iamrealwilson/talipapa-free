import { ReactElement , useState } from "react"
import InfoIcon from '@mui/icons-material/Info';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

const PriceManagementTable=():ReactElement =>{

const [Tab,setTab] = useState('price')    

return(
<>
<div className="mp_product_table">
  <div className="overflow-x-auto"> 
  <div className="mppt_header">
     <div className={`mppt_tab_btn ${Tab==='price'?'active':''} `}
      onClick={e=>setTab('price')}
     >
         <span>Price list</span>
     </div>

     <div className={`mppt_tab_btn ${Tab==='update'?'active':''} `}
     onClick={e=>setTab('update')}
     >
         <span>Update Failed</span>
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
                    Master SKU
                </th>
                <th scope="col" className="px-6 py-3">
                  <div className="mp_info_txt">
                   <span>Default price</span>
                  <span><InfoIcon/></span>
                   </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Store Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Created Time
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
export default PriceManagementTable