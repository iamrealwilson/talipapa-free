import { ReactElement , useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const FilterCategory=(): ReactElement=>{
const [ShowFilter,setShowFilter] = useState(false)

const [selectedOne,setSelectedOne] = useState('')
const [selectedTwo,setSelectedTwo] = useState('')
const [selectedThree,setSelectedThree] = useState('')

const [MainCategory,setMainCategory] = useState<{id:string,name:string}[]>([
  {id: '1',name:'Book & magazine'},
  {id: '2',name:'Electronics'},
  {id: '3',name:'Agriculture'},
])

const [SubCategory,setSubCategory] = useState<{id:string,parentId:string,name:string}[]>([
  {id:'1',parentId:'1',name:'Ebook'},
  {id:'2',parentId:'1',name:'Audio Book'},
  {id:'3',parentId:'1',name:'Others'},
  {id:'4',parentId:'2',name:'Laptop'},
  {id:'5',parentId:'2',name:'Mobile'}
])
const [SubChild,setSubChild] = useState<{id:string,parentId:string,name:string}[]>([
  {id:'1',parentId:'4',name:'Asus'},
  {id:'2',parentId:'4',name:'Dell'}
])

const [BoxItemsTwo,setBoxItemsTwo] = useState<{id:string,parentId:string,name:string}[]>([])
const [BoxItemsThree,setBoxItemsThree] = useState<{id:string,parentId:string,name:string}[]>([])


function IfSubcategory(id:any){
  let result = SubCategory.filter(item=>{return item.parentId === id})
  return result
}

function IfSubChild(id:any){
  let result = SubChild.filter(item=>{return item.parentId === id})
  return result
}

function SetBoxTwo(id:any){
  try{
  let result = SubCategory.filter(item=>{return item.parentId === id})
  setBoxItemsTwo(result)
  setSelectedOne(id)
  }catch(err){}
}

function SetBoxThree(id:any){
  try{
  let result = SubChild.filter(item=>{return item.parentId === id})
  setBoxItemsThree(result)
  setSelectedTwo(id)
  }catch(err){}
}

function getMainCategoryName(id:any):any{
  let result = MainCategory.filter(list=>{return list.id===id})
  return result[0].name
}

return(
<div className="relative">
  <div className="ofc_selected" onClick={e=>ShowFilter?setShowFilter(false):setShowFilter(true)}>
    {selectedOne===''?
    <span className="text-gray-300">Select Master Category</span>:
    <span className="text-gray-700">{getMainCategoryName(selectedOne)}</span>
    }
    <div className={`text-gray-700 ${ShowFilter?`rotate-180`:''}`}>
      <KeyboardArrowDownIcon/>
    </div>
  </div>  

{ShowFilter?
  <div className="ofc_box grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3"
  style={{zIndex:"110"}}
  >
   
   <div className="relative">
     <div className="ofc_box_item">
      
      {MainCategory.map((item:any):any=>{
        return (
         <div key={item.id}>
         {IfSubcategory(item.id).length > 0?
          <div className={`ofcb_link_item text-gray-700 ${item.id===selectedOne?'active':''} `}
           onClick={e=>SetBoxTwo(item.id)}
          >
           <span>{item.name}</span>
           <ChevronRightIcon/>
          </div>:
          <div className={`ofcb_link_item text-gray-700 ${item.id===selectedOne?'active':''} `}
          onClick={e=>SetBoxTwo(item.id)}
          >
          <span>{item.name}</span>
         </div>
         } 
         </div> 
        )
      })}

     </div>
   </div>

   <div className="relative">
     <div className="ofc_box_item">
       {BoxItemsTwo.map((list:any):any=>{
        return(
          <div key={list.id}>
          {IfSubChild(list.id).length > 0?  
          <div className={`ofcb_link_item text-gray-700 ${list.id===selectedTwo?'active':''} `}
           onClick={e=>SetBoxThree(list.id)}
          >
          <span>{list.name}</span>
          <ChevronRightIcon/>
          </div>:
          <div className={`ofcb_link_item text-gray-700 ${list.id===selectedTwo?'active':''} `}
          onClick={e=>SetBoxThree(list.id)}
          >
          <span>{list.name}</span>
          </div>
          }
          </div>
        )
       })}
     </div>
   </div>

   <div className="relative">
     <div className="ofc_box_item">
       {
         BoxItemsThree.map(list=>{
          return (
           <div className={`ofcb_link_item text-gray-700 ${list.id===selectedThree?'active':''} `} key={list.id}
            onClick={e=>setSelectedThree(list.id)}
           >
           <span>{list.name}</span>
           </div> 
          )
         })
       }
     </div>
   </div>

  </div>:null
}

</div>
)
}
export default FilterCategory