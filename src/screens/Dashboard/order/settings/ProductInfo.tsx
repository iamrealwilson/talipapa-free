import { ReactElement } from "react"
import { Link } from "react-router-dom"
import InfoIcon from '@mui/icons-material/Info';

const ProductInfoSetting=()=>{
return(
<div className="p-2">
<div className="overflow-x-auto relative sm:rounded-lg">
<table className="w-full text-left text-gray-500 dark:text-gray-400">
<thead className="text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-400">
  <tr className="down_shadow">
      <th scope="col" className="py-3 px-6">
          Name
      </th>
      <th scope="col" className="py-3 px-6">
          Default price 
          <Link to="/"><span className="ml-2 underline text-violet-700">Mass edit clear</span></Link>
      </th>
      <th scope="col" className="flex items-center py-3 px-6">
          Available Stock
          <div className="osi_citem_icon"><InfoIcon/></div>
          <Link to="/"><span className="ml-2 underline text-violet-700">Mass edit clear</span></Link>
      </th>
      <th scope="col" className="py-3 px-6">
          Barcode
      </th>
  </tr>
</thead>
<tbody>
  <tr className="dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          -
      </th>

      <td className="py-4 px-6">

        <div className="osi_cost_inptop">
        <div className="text-gray-700 px-3">
          <select className="bg-white">
           <option>£</option>
           <option>$</option>
          </select>
         </div>
         <input type="number" placeholder="Please Enter"
         style={{borderLeft:"1px solid rgba(0,0,0,0.2)"}}
         />
        </div>

      </td>
      <td className="py-4 px-6">
         
        <div className="osi_cost_item col-span-2">
          <div className="osi_cost_inptop">
            <input type="text" placeholder="Enter source URL"/>
            <div className="text-gray-500 px-3 text-sm">0/200</div>
          </div>
        </div>

      </td>
      <td className="py-4 px-6">
          
      <div className="osi_cost_item col-span-2">
          <div className="osi_cost_inptop">
            <input type="text" placeholder="Enter source URL"/>
            <div className="text-gray-500 px-3 text-sm">0/100</div>
          </div>
        </div>

      </td>
  </tr>   
</tbody>
</table>
</div>
</div>
)
}
export default ProductInfoSetting