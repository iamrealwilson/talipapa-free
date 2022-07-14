import { ReactElement , useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';

const MediaSetting=():ReactElement =>{

return(
<>
<div className="flex items-center py-3">
    <div className="osi_citem_icon"><InfoIcon/></div>
    <span className="text-sm text-gray-600 ml-2">Product Image Max.9</span>
    <div>

    </div>
</div>

<div className="p-3 flex items-center">
  <div className="mediaSettingFilepicker">
      <input type="file" multiple/>
      <AddIcon/>
  </div>
</div>

</>
)
}
export default MediaSetting