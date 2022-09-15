import {ItemCount} from '../ItemCount/index'
import ItemList from '../ItemList/itemList';
import React, {useState, useEffect} from 'react';
// import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const FunkoFile = [
    {id: 1, title: "Godzilla",serie:'Godzilla', type:'Movie',price:"200$", image:"/Godzilla.jpg", category:'movies'},
    {id: 2, title:"Mtv the person Moon",serie:'Mtv', type:'Music',price:"200$", image:"/MtvPersonMoon.jpg", category:'music'},
    {id: 3, title:"Lebron James",serie:'Lakers', type:'Sports',price:"200$", image:"/LebronJames.jpg", category:'celebrities'},
    {id: 4, title:"Aku Aku",serie:'Crash Bandicoot', type:'VideoGame',price:"200$", image:"/AkuAku.jpg", category:'videogames'},
    {id: 5, title:"Chetooh",serie:'Chetoos', type:'Sponsors',price:"200$", image:"/Cheetoh.jpeg", category:'sponsors'},
    {id: 6, title:"Froot Loops",serie:'Froot Loops', type:'Sponsors',price:"200$", image:"/FrootLoops.jpeg", category:'sponsors'},
    {id: 7, title:"Homer Simpsons",serie:'The Simpons', type:'Cartoon',price:"200$", image:"/HomerSpecial.jpg", category:'specials'},
    {id: 8, title:"Pringles",serie:'Pringles', type:'Sponsors',price:"200$", image:"/Pringles.jpg", category:'sponsors'},
    {id: 9, title:"Macaroni",serie:'Macaroni', type:'Sponsors',price:"200$", image:"/Macaroni.jpeg", category:'sponsors'},
    {id: 10, title:"Office Mac",serie:'Mc Donald', type:'Mc Donald',price:"200$", image:"/OfficeMac.jpeg", category:'sponsors'},
    {id: 11, title:"Thanos",serie:'The Avengers', type:'Movie',price:"200$", image:"/Thanos.jpg", category:'movies'},
    {id: 12, title:"Zucaritas",serie:'Zucaritas', type:'Sponsors',price:"200$", image:"/Zucaritas.jpeg", category:'sponsors'},
    {id: 13, title:"Pikachu",serie:'Pokemon', type:'Anime',price:"200$", image:"/Pikachu.png", category:'anime'},
    {id: 14, title:"Tanjiro Kamado",serie:'Demon Slayer', type:'Anime',price:"200$", image:"/TanjiroKamado.jpg", category:'anime'},
    {id: 15, title:"Rainbow Dash", serie:'My Little Pony', type:'Cartoon', price:"200$", image:"/RainbowDash.jpg", category:'cartoon'}
];

export const ItemListCointainer = (texto) => {

    const [data, setData] = useState([]);

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(FunkoFile)
            }, 2000);
        });
            getData.then(res => setData(res.filter(FunkoFile => FunkoFile.Id === parseInt(detalleId))));    
        }, [])
  
    return (
        <>
            <ItemList  data={data}/>
            {/* <ItemCount initial={3} stock={5}/> */}
            {/* <ItemDetail data={data}/> */}
        </>
  )
}

export default ItemDetailContainer;