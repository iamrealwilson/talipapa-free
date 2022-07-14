import { ReactElement } from "react";
import InfoIcon from '@mui/icons-material/Info';

const CostInfo=():ReactElement =>{
return(
<div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  py-3 px-5">

<div className="osi_cost_item p-2 lg:col-span-2 md:col-span-1 sm:col-span-1">
    <div className="flex items-center">
    <span className="text-gray-700">Source URL</span>
    <div className="osi_citem_icon"><InfoIcon/></div>
    </div>
    <div className="osi_cost_inptop">
    <input type="text" placeholder="Enter source URL"/>
    <div className="text-gray-500 px-3 text-sm">0/150</div>
    </div>
</div>

<div className="osi_cost_item p-2">
    <div className="flex items-center">
    <span className="text-gray-700">Purchase Time</span>
    <div className="osi_citem_icon"><InfoIcon/></div>
    </div>
    <div className="osi_cost_inptop">
    <input type="text" placeholder="Please Enter"
        style={{borderRight: "1px solid rgba(0,0,0,0.2)"}}
    />
    <div className="text-gray-700 px-3">
        <select className="bg-white">
        <option>hour</option>
        <option>Day</option>
        <option>week</option>
        </select>
    </div>
    </div>
</div>

<div className="osi_cost_item p-2">
    <div className="flex items-center">
    <span className="text-gray-700">Sales tax amount</span>
    <div className="osi_citem_icon"><InfoIcon/></div>
    </div>

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

</div>

</div>
)
}
export default CostInfo