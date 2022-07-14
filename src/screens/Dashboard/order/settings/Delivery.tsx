import { ReactElement } from "react";

const DeliverySetting=():ReactElement =>{
return(
<div className="py-2">
<div className="px-5 font-md text-gray-700">Package Size</div>

<div className="setting_delivery_wraper grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
    
    <div className="p-2">
    <span className="text-sm text-gray-700">Length</span>
    <div className="sdw_item_input">
        <div className="sdwi_input">
        <input type="number" placeholder="Should be between 1-999,999" />
        </div>
        <div className="px-2">
        <select>
        <option>cm</option>
        <option>in</option>
        </select>
        </div>
    </div>
    </div>

    <div className="p-2">
    <span className="text-sm text-gray-700">Width</span>
    <div className="sdw_item_input">
        <div className="sdwi_input">
        <input type="number" placeholder="Should be between 1-999,999" />
        </div>
        <div className="px-2">
        <select>
        <option>cm</option>
        <option>in</option>
        </select>
        </div>
    </div>
    </div>

    <div className="p-2">
    <span className="text-sm text-gray-700">Height</span>
    <div className="sdw_item_input">
        <div className="sdwi_input">
        <input type="number" placeholder="Should be between 1-999,999" />
        </div>
        <div className="px-2">
        <select>
        <option>cm</option>
        <option>in</option>
        </select>
        </div>
    </div>
    </div>

    <div className="p-2">
    <span className="text-sm text-gray-700">Weight</span>
    <div className="sdw_item_input">
        <div className="sdwi_input">
        <input type="number" placeholder="Should be between 1-999,999" />
        </div>
        <div className="px-2">
        <select>
        <option>g</option>
        <option>ml</option>
        </select>
        </div>
    </div>
    </div>

</div>  

<div className="px-5">
<span className="text-sm text-gray-800">Preorder</span>
<div className="flex items-center">
  
<div className="flex items-center mb-3 mt-3">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-50 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
</div>
<div className="flex items-center ml-3">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-50 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
</div>

</div>
</div>

</div>
)
}
export default DeliverySetting