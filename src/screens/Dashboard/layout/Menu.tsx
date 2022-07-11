import { ReactElement, useState , useRef } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Link } from "react-router-dom"
import { ManOutlined } from "@mui/icons-material";

const DHMenu=(props: any):ReactElement =>{
const [Opned,setOpned] = useState(false)
const [SubOpned,setSubOpned] = useState(false)
const menuRef = useRef(null)


return(
<>
<div className={`dhs_menu ${Opned?'active':''}`} onClick={e=>Opned?setOpned(false):setOpned(true)}>
 <div>
   <props.Icon/>
   <span>{props.name}</span>
 </div>
 <div className="dsh_toggle">
 <KeyboardArrowDownOutlinedIcon/>
 </div>
</div>
<div className={`dhs_menu_lists ${Opned?'active':''}`}>
  {
    props.menus.map((menu:any):any=>{
      return ( 
      <>  
      {menu.type==='link'?
      <div className="dhs_list_item" key={menu.name}>{menu.name}</div>:
      <div className="dhs_sub_menu" 
      onClick={e=>SubOpned?setSubOpned(false):setSubOpned(true)}>
        <div className="dhs_list_item" key={menu.name}>{menu.name} 
        <KeyboardArrowDownOutlinedIcon/>
        </div>
        <div className={`dhs_menu_lists ${SubOpned?'active':''}`}
        style={{
          height: SubOpned?"200px":"0px",
          transition: "0.3s ease-in-out"
        }}
        >

        {
          menu.links.map((list:any):any=>{
            return <div className="dhs_list_item sub" key={list.name}>
              <Link to={list.to}>{list.name}</Link>
            </div>
          })
        }
        </div>
      </div>
      }
      </>
      )
    })
  }

</div>
</>
)
}
export default DHMenu