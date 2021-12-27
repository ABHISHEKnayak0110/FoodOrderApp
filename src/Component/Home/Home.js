import React,{useState} from 'react'
import { Item } from '../ItemList/Item'
import Menu from '../Menu/Menu'
import SideSection from '../SideSection/SideSection'

export default function Home() {
    const[items , Setitems] = useState(Item)
      function filterItem(val){
          const filteri = Item.filter((item) => item.category === val || item.meal ===val || item.All ===val)
          Setitems(filteri)
      }
    return (
        <div className='Homediv'>
        <aside className='sidebar'>
            <SideSection filterItem={filterItem}/>
        </aside>
             <main>
            <Menu item= {items}/>   
             </main>
        </div>
    )
}
