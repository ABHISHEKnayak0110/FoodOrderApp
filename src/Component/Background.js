import React ,{useState} from 'react'
import Header from './Header'
import { Item } from './ItemList/Item'



export default function Background() {
    const[t, setT] = useState(false)

    const listRender = () =>{
        
        console.log("i am clicked")
          t ? setT(false) : setT(true);
        
    }

    return (
        <div  >
         <Header/>
         <input type="checkbox" onClick={listRender} /> value check
        { t ? Item.map((e)=> <img src={e.img} width="200px" height="300px"/>) : ""}
              
        </div>
    )
}
