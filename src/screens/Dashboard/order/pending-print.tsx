import { ReactElement } from "react"
import DashboardHeader from "../layout/header"
import PendingPrintTable from "./tables/PendingPrintTable"
import SearchFilter from "./SearchFilter"
import OrderWarning from "./warning"

const PendingPrint=():ReactElement =>{
return(
<>
<DashboardHeader pagename="Pending print"/>
<div className="pending_order_wraper"> 
 <OrderWarning/>
 <SearchFilter/>
</div>
<PendingPrintTable/>

</>
)
}
export default PendingPrint