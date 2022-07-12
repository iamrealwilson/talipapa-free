import { ReactElement } from "react"
import DashboardHeader from "../layout/header"
import SearchFilter from "./SearchFilter"
import CollectedTable from "./tables/CollectedTable"
import OrderWarning from "./warning"

const  PendingCollected=():ReactElement =>{
return(
<>
<DashboardHeader pagename="To be collected"/>
<div className="pending_order_wraper"> 
 <OrderWarning/>

 <SearchFilter/>
</div>
<CollectedTable/>
</>
)
}
export default PendingCollected