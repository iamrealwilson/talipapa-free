import { ReactElement } from "react";
import DashboardHeader from "../layout/header";
import OrderWarning from "./warning";
import SearchFilter from "./SearchFilter";
import StoredTable from "./tables/StoredTable";

const StoredOrder=():ReactElement =>{
return(
<>
<DashboardHeader pagename="Shipped Order"/>
<div className="pending_order_wraper"> 
 <OrderWarning/>
 <SearchFilter/>
</div>
<StoredTable/>
</>
)
}

export default StoredOrder