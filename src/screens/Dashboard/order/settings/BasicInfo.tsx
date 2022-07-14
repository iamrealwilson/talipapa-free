import { ReactElement , useState } from "react";
import Select from 'react-select';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const BasicInfo=()=>{
const [ProductDesc,setProductDesc] = useState<any>(null)

const categoryOptions = [
    { value: 'Electronic', label: 'Electronic' },
    { value: 'Books', label: 'Books' },
    { value: 'Cars', label: 'Cars' },
];

const SellingOptions = [
    { value: 'Selling', label: 'Selling' },
    { value: 'Buying', label: 'Buying' }
];

const slifeOptions = [
    { value: 'No Sheif Life', label: 'No Sheif Life' },
    { value: 'Sheif Life', label: 'Sheif Life' }
];



return(
<>
<div className="p-4">

<div className="py-2">
   <div className="flex items-center">
       <span className="text-red-500 mr-1 mt-1">*</span>
       <span className="text-gray-700 text-sm">Product Name</span>
   </div>
   <div className="binfo_setting_input">
      <div>
         <input type="text" placeholder="Please Enter"/> 
      </div>
      <div className="text-gray-500 px-2">
         0/300
      </div>
   </div>
</div>

<div className="py-2">
   <div className="flex items-center">
       <span className="text-gray-700 text-sm">Select Master Category</span>
   </div>

   <div className="mt-3 binfo_setting_select">
   <Select
        options={categoryOptions}
    />
   </div>
</div>

<div className="py-2">
   <div className="flex items-center">
       <span className="text-gray-700 text-sm">Select Master Category</span>
   </div>

   <div className="mt-3 binfo_setting_select">
   <Select
        options={SellingOptions}
    />
   </div>
</div>

<div className="py-2">
<span className="text-sm text-gray-800">Condition</span>
<div className="flex items-center">
  
<div className="flex items-center mb-3 mt-3">
    <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-50 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">New</label>
</div>
<div className="flex items-center ml-3">
    <input checked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-50 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Used</label>
</div>
</div>
</div>

<div className="py-2">
   <div className="flex items-center">
       <span className="text-gray-700 text-sm">Sheif Life</span>
   </div>

   <div className="mt-3 lg:w-72">
   <Select
        options={slifeOptions}
    />
   </div>
</div>

<div className="py-2">
   <div className="flex items-center">
       <span className="text-gray-700 text-sm">Minimum purchase quality</span>
   </div>
   <div className="binfo_setting_input">
      <div>
         <input type="number" min={1} value="1" 
         onChange={e=>{}}
         placeholder="Please Enter"/> 
      </div>
   </div>
</div>


<div className="py-2">
   <div className="flex items-center">  
       <span className="text-gray-700 text-sm">Description</span>
   </div>
   <div className="binfo_setting_textarea">
      <div className="my-2">
         <textarea placeholder="Please Enter" rows={6}></textarea> 
      </div>
      <div className="text-gray-500 px-2 text-right text-sm">
         0/800
      </div>
   </div>
</div>

<div className="py-2">
   <div className="flex items-center">  
       <span className="text-gray-700 text-sm">Product Description</span>
   </div>
   <div className="mt-2 border binfo_richtext">
   <Editor
    editorState={ProductDesc}
    toolbarClassName="toolbarClassName"
    wrapperClassName="wrapperClassName"
    editorClassName="editorClassName"
    onEditorStateChange={setProductDesc}
   />
   </div>
</div>

</div>

<div className="binfo_settings_bottom">
   <button className="binfo_action_btn mr-2">Cancel</button>
   <button className="binfo_action_btn save">Save Update</button>
</div>

</>
)
}
export default BasicInfo