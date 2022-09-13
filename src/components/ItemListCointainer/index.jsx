import {ItemCount} from '../ItemCount/index'
import ItemList from '../ItemList/itemList';
import React, {useState, useEffect} from 'react';
// import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const FunkoFile = [
    {id: 1, title: "Godzilla",serie:'Godzilla', type:'Movie',price:"200$", image:"./Godzilla.jpg", category:'movies'},
    {id: 2, title:"Mtv the person Moon",serie:'Mtv', type:'Music',price:"200$", image:"./MtvPersonMoon.jpg", category:'music'},
    {id: 3, title:"Lebron James",serie:'Lakers', type:'Sports',price:"200$", image:"./LebronJames.jpg", category:'celebrities'},
    {id: 4, title:"Tanjiro Kamado",serie:'Demon Slayer', type:'Anime',price:"200$", image:"./TanjiroKamado.jpg", category:'anime'},
    {id: 5, title:"Rainbow Dash", serie:'My Little Pony', type:'Cartoon', price:"200$", image:"./RainbowDash.jpg", category:'cartoon'}
];

export const ItemListCointainer = (texto) => {

    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(FunkoFile)
            }, 2000);
        });
        if (categoriaId){
            getData.then(res => setData(res.filter(FunkoFile => FunkoFile.category === categoriaId)));    
        } else {
            getData.then(res => setData(res))
        }
        

    }, [categoriaId])
  
    // const onAdd = (quantity) => {
    //     console.log('compraste ${quantity} unidades')
    // }

    return (
        <>
            <ItemList  data={data}/>
            {/* <ItemCount initial={3} stock={5}/> */}
            {/* <ItemDetail data={data}/> */}
        </>
  )
}

export default ItemListCointainer;