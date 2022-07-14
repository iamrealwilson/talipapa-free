import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactElement } from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";

import LandingPage from "./screens/landing-page";
import Dashboard from "./screens/Dashboard";
import PendingOrder from "./screens/Dashboard/order/pending";
import PendingPrint from "./screens/Dashboard/order/pending-print";
import PendingCollected from "./screens/Dashboard/order/pending-collected";
import ShippedOrder from "./screens/Dashboard/order/order-shipped";
import StoredOrder from "./screens/Dashboard/order/order-stored";
import AbnormalOrder from "./screens/Dashboard/order/order-abnormal";
import OrderLanding from "./screens/Dashboard/order/orders-landing";
import OrderSetting from "./screens/Dashboard/order/order-settings";

const App = (): ReactElement => {
return (
<>
<BrowserRouter>
  <Routes>
   <Route path="/" element={<LandingPage/>}></Route>
   <Route path="/dashboard" element={<Dashboard/>}></Route>
   <Route path="/orders/landing" element={<OrderLanding/>} ></Route>
   <Route path="/order/pending" element={<PendingOrder/>}></Route>
   <Route path="/order/pending-print" element={<PendingPrint/>}></Route>
   <Route path="/order/pending-collected" element={<PendingCollected/>}></Route>
   <Route path="/order/shipped" element={<ShippedOrder/>} ></Route>
   <Route path="/order/stored" element={<StoredOrder/>} ></Route>
   <Route path="/order/abnormal" element={<AbnormalOrder/>}></Route>
   <Route path="/order/settings" element={<OrderSetting/>}></Route>
  </Routes>
</BrowserRouter>
</>
);
};

export default App;
