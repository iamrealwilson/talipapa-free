import { ReactElement , useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

const MPwarning=():ReactElement =>{
const [open,setOpen] = useState(true)

return(
<>
{open?
<div className="mpwarning_wraper">
 <div className="mpwarning">
     <div className="flex items-center justify-between">
        <div className="flex items-center"> 
        <div className="pr-1"><InfoIcon/></div>
        <div className="text-sm text-indigo-700">
            Master SKU Auto-Bind Setting (Not Enable) Click here to jump to 
            the page for setting up Master Product automatic binding
        </div>
        </div>
        <div className="cursor-pointer pl-2" onClick={e=>open?setOpen(false):setOpen(true)}>
          <CloseIcon/>
        </div>
     </div>
 </div>
</div>:null
}
</>
)
}
export default MPwarning