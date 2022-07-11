import { ReactElement } from "react";
import DashboardHeader from "../layout/header";
import OrderWarning from "./warning";
import SearchFilter from "./SearchFilter";
import ShippedTable from "./tables/ShippedTable";

const ShippedOrder=():ReactElement =>{
return(
<>
<DashboardHeader pagename="Shipped Order"/>
<div className="pending_order_wraper"> 
 <OrderWarning/>
 <SearchFilter/>
</div>
<ShippedTable/>
</>
)
}

export default ShippedOrder