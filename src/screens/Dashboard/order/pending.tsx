import { ReactElement } from "react";
import DashboardHeader from "../layout/header";
import PendingTable from "./tables/PendingTable";
import SearchFilter from "./SearchFilter";
import OrderWarning from "./warning";

const PendingOrder=():ReactElement =>{
return(
<>
<DashboardHeader pagename="Pending"/>
<div className="pending_order_wraper"> 
 <OrderWarning/>

 <SearchFilter/>
</div>
<PendingTable/>

</>
)
}
export default PendingOrder