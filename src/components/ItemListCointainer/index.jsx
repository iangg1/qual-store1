import {ItemCount} from '../ItemCount/index'
import ItemList from '../ItemList/itemList';
import React, {useState, useEffect} from 'react';

const FunkoFile = [
    {id: 1, title: "Godzilla",serie:'Godzilla', type:'Movie',price:"200$", image:"./Godzilla.jpg",},
    {id: 2, title:"Mtv the person Moon",serie:'Mtv', type:'Music',price:"200$", image:"./MtvPersonMoon.jpg"},
    {id: 3, title:"Lebron James",serie:'Lakers', type:'Sports',price:"200$", image:"./LebronJames.jpg"},
    {id: 4, title:"Tanjiro Kamado",serie:'Demon Slayer', type:'Anime',price:"200$", image:"./TanjiroKamado.jpg"}
];

export const ItemListCointainer = (texto) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(FunkoFile)
            }, 2000);
        });
        getData.then(res => setData(res))

    }, [])
  
    // const onAdd = (quantity) => {
    //     console.log('compraste ${quantity} unidades')
    // }

    return (
        <>
            <ItemList  data={data}/>
            <ItemCount initial={3} stock={5}/> 
        </>
  )
}

export default ItemListCointainer;