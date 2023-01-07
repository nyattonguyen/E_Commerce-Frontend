import React from 'react'
import Card from "../Card/Card"
import './List.scss'

const data = [
    {
        id: 1,
        img:'https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Coat',
        isNew:true,
        oldPrice:19,
        price:12
    },
    {
        id: 2,
        img:'https://images.pexels.com/photos/1425248/pexels-photo-1425248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Skirt',
        oldPrice:19,
        price:12
    },
    {
        id: 3,
        img:'https://images.pexels.com/photos/10370348/pexels-photo-10370348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Hat',
        isNew:true,
        oldPrice:190,
        price:120
    },
    {
        id: 4,
        img:'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title:'Bag',
        isNew:true,
        oldPrice:190,
        price:120
    }
]
function List() {
  return (
    <div className='list'>
        {data.map((item) => (
            <Card item={item} key={item.id}  />
        ))}
    </div>
  )
}

export default List