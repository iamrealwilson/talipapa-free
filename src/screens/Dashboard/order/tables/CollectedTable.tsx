import { ReactElement , useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CollectedTable=()=>{
const [TableTab,setTableTab] = useState('unassigned')

return(
<>
<div className="order_table_header">
   <div className="pth_tab_button">
     
   </div>
   <div>
   
   <button className="pth_export_btn mb-2">
       <span>Export</span> 
       <KeyboardArrowDownIcon/>
    </button>

   </div>
</div>
<div className="order_table_tab">
  <button className={`${TableTab==='unassigned'?'active':''}`}
  onClick={e=>setTableTab('unassigned')}
  >
      <span className="mr-2 text-gray-700">Unassigned Warehouse</span>
      <div className="ott_badge">0</div>
  </button>
  <button className={`${TableTab==='own'?'active':''}`}
  onClick={e=>setTableTab('own')}
  >
      <span className="mr-2 text-gray-700">Own Warehouse</span>
      <div className="ott_badge">0</div>
  </button>
</div>

{TableTab==='unassigned'?
<div className="px-2 table_overflow">
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all" type="checkbox" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Orders
                </th>
                <th scope="col" className="px-6 py-3">
                    Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Variant/SKU
                </th>
                <th scope="col" className="px-6 py-3">
                    Warehouse/Outbound Order
                </th>
                <th scope="col" className="px-6 py-3">
                    QTY
                </th>
                <th scope="col" className="px-6 py-3">
                    Total
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Apple MacBook Pro 17
                </th>
                <td className="px-6 py-4">
                    Sliver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    3
                </td>
                <td className="px-6 py-4">
                    10
                </td>
                <td className="px-6 py-4">
                <button type="button" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <VisibilityIcon/>
                </button>
                <button className="h-10 p-2 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">
                    <EditIcon/>
                </button>
                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    <DeleteForeverIcon/>
                </button>
                </td>
            </tr>

        </tbody>
    </table>
</div>
</div>:null
}


{TableTab==='own'?
<div className="px-2 table_overflow">
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all" type="checkbox" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Orders
                </th>
                <th scope="col" className="px-6 py-3">
                    Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Variant/SKU
                </th>
                <th scope="col" className="px-6 py-3">
                    Warehouse/Outbound Order
                </th>
                <th scope="col" className="px-6 py-3">
                    QTY
                </th>
                <th scope="col" className="px-6 py-3">
                    Total
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-1" type="checkbox" 
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label htmlFor="checkbox-table-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Apple Iphone 13
                </th>
                <td className="px-6 py-4">
                    Black
                </td>
                <td className="px-6 py-4">
                    Mobile
                </td>
                <td className="px-6 py-4">
                    $1299
                </td>
                <td className="px-6 py-4">
                    7
                </td>
                <td className="px-6 py-4">
                    15
                </td>
                <td className="px-6 py-4">
                <button type="button" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                    <VisibilityIcon/>
                </button>
                <button className="h-10 p-2 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800">
                    <EditIcon/>
                </button>
                <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    <DeleteForeverIcon/>
                </button>
                </td>
            </tr>

        </tbody>
    </table>
</div>
</div>:null
}



</>
)
}
export default CollectedTable