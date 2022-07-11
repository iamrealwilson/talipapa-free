import { ReactElement , useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom"

const OrderWarning=():ReactElement =>{
const [hidden,setHidden] = useState(false)

return(
<div className={`order_warning_wraper ${hidden?'hide':''} `}>
 <div className="order_warning">
    <div className="ord_warning_icon">!</div>
    <div className="px-2 text-gray-600">
        In order to ensure that the order is allocated to the correct
        warehouse and realize the deduction of MSKU inventory, please ensure
        to set the shipping ware house settings in
        <Link to="/">[Order Setting - Shipping Warehouse]</Link>
    </div>
    <div className="ord_warning_close" onClick={e=>setHidden(true)}>
      <CloseIcon/>
    </div> 
 </div>
</div>
)
}
export default OrderWarning