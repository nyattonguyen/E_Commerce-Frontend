import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";


function Cart() {
    const data = [
        {
            id: 1,
            img:'https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Coat',
            isNew:true,
            oldPrice:19,
            price:12,
            desc:'aaa....aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
        },
        {
            id: 2,
            img:'https://images.pexels.com/photos/1425248/pexels-photo-1425248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title:'Skirt',
            oldPrice:19,
            price:12,
            desc:'aaaa....'

        },
        // {
        //     id: 3,
        //     img:'https://images.pexels.com/photos/10370348/pexels-photo-10370348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        //     title:'Hat',
        //     isNew:true,
        //     oldPrice:190,
        //     price:120,
        //     desc:'aaaaa......'

        // },
        // {
        //     id: 4,
        //     img:'https://images.pexels.com/photos/842959/pexels-photo-842959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        //     title:'Bag',
        //     isNew:true,
        //     oldPrice:190,
        //     price:120,
        //     desc:'acb'

        // }
    ]

  return (
    <div className="cart">
        <h1>Products in your cart</h1>
        {data.map(item =>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 30)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlinedIcon className="delete" />
            </div>
            ))}
            <div className="total">
                <span>Subtotal</span>
                <span>$120</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className="reset">
                Reset Cart
            </span>
    </div>
  )
}

export default Cart