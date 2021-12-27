import React from 'react'
import { Item } from '../ItemList/Item'
import Menu from '../Menu/Menu'

export default function Popular() {
    return (
        <div className='Popular'>
            <h2 className='popularh1'>Our Popular Foods</h2>
            <Menu item ={Item}/>
           
        </div>
    )
}
