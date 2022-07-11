import { ReactElement } from "react";

const NavBadge=(props: any):ReactElement =>{
return(
<div className="dh_badge mr-2">
  <div className="dh_badge_colored">{props.name}</div>
  <span className="text-gray-700">{props.title}</span>
</div>
)
}

export default NavBadge