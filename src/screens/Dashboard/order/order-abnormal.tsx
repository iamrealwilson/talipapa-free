import { ReactElement } from "react";
import DashboardHeader from "../layout/header";
import OrderWarning from "./warning";
import SearchFilter from "./SearchFilter";
import AbnormalTable from "./tables/AbnormalTable";

const AbnormalOrder=():ReactElement =>{
return(
<>
<DashboardHeader pagename="Abnormal Order"/>
<div className="pending_order_wraper"> 
 <OrderWarning/>
 <SearchFilter/>
</div>
<AbnormalTable/>
</>
)
}
export default AbnormalOrder