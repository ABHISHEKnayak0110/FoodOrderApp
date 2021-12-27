import React ,{useState}from 'react'
import { Item } from '../ItemList/Item'


export default function SideSection({filterItem}) {
    const[itrue ,Setitrue] = useState(true)
    function make(valu){
        if(itrue === true){
            filterItem(valu)
            Setitrue(false)
        }
        else if(itrue ===false){
            filterItem("All")
            Setitrue(true)
        }

    }
    return (
        <>
           <div className='sideHead'>
           <h1 id='sideh1'> Fiter Food</h1>
           <h4>Check boxes below to norrow food search result.</h4>
           </div>
            <div className="firstFilter">
            <h2 className='sideh2'>By Season</h2>
            <input type="checkbox" value ="winter" onChange={(e) => make(e.target.value)}/> <label>winter</label> <br/>
            <input type="checkbox"  value ="rainy" onClick={(e) => filterItem(e.target.value)}/> <label>rainy</label>  <br/>
            <input type="checkbox" value ="summer" onClick={(e) => filterItem(e.target.value)}/> <label>summer</label>  <br/>
            </div>
            <div className="firstFilter">
            <h2 className='sideh2'>By Meal</h2>
            <input type="checkbox" value ="breakfast" onClick={(e) => filterItem(e.target.value)}/> <label>Breakfast</label> <br/>
            <input type="checkbox"  value ="lunch" onClick={(e) => filterItem(e.target.value)}/> <label>Lunch</label>  <br/>
            <input type="checkbox"  value ="dinner" onClick={(e) => filterItem(e.target.value)}/> <label>Dinner</label>  <br/>
            </div>
            <div className="firstFilter">
            <h2 className='sideh2'>Sweet Things</h2>
            <input type="checkbox"value ="chocolate" onClick={(e) => filterItem(e.target.value)}/> <label>Chocolate</label> <br/>
            <input type="checkbox"  value ="Ice-Cream" onClick={(e) => filterItem(e.target.value)}/> <label>Ice-Cream</label>  <br/>
            <input type="checkbox" value ="Cake" onClick={(e) => filterItem(e.target.value)}/> <label>Cakes</label>  <br/>
            </div>
        </>
    )
}
