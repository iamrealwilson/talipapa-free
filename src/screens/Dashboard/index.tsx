import { ReactElement } from "react";
import DashboardHeader from "./layout/header";

const Dashboard=():ReactElement =>{
return(
<>
<main className="dashboard_wraper">
<DashboardHeader pagename="Dashboard"/>

</main>
</>
)
}
export default Dashboard