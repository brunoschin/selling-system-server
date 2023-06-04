import { Product } from '../models/Product';
import { newID } from '../Utils';

const presetProducts = [
    {
        id: newID(),
        name: 'Cafeteira Elétrica Britânia CP15 15 Cafés Preto',
        price: 121.24,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN5dv6lMKDZHbYLWfWeKt801BR_SO2HBUEzILBHP1pBjnEiLnwFJO_VMrjckT-fdsv5vM&usqp=CAU'
    },
    {
        id: newID(),
        name: 'Café 500g Pilão - PILAO',
        price: 19.99,
        image: 'https://a-static.mlcdn.com.br/800x560/cafe-almofada-500g-pilao-pilao/pechinshopoficial/88f57eb89a9d11ed8cd24201ac185019/8de67f88d52ee612d2ef39962946e9df.jpeg'
    },
    {
        id: newID(),
        name: 'Cafeteira Elétrica Coffee Red, PCA031, 127v, Lenoxx',
        price: 125.90,
        image: 'https://m.media-amazon.com/images/I/51QxnMzQbDL._AC_SL1000_.jpg'
    },
    {
        id: newID(),
        name: 'Cafeteira Italiana Elétrica Cadence Gran, Inox 1,5L, 110V, CAF120',
        price: 329.90,
        image: 'https://m.media-amazon.com/images/I/51y1udA7qYL._AC_SL1000_.jpg'
    },
    {
        id: newID(),
        name: 'Cafeteira Oster 2Day Red 2 em 1 com Copo Térmico - 220V',
        price: 149.90,
        image: 'https://m.media-amazon.com/images/I/410-1m4s+XL._AC_SL1000_.jpg'
    },
    {
        id: newID(),
        name: 'Caneca Geek Nerd No Coffee No Forcee',
        price: 24.99,
        image: 'https://m.media-amazon.com/images/I/81Q3rAxJobL._AC_SL1500_.jpg'
    },
    {
        id: newID(),
        name: 'Coffee Mais Grãos │ Kit Clássico e Fazendas → 1 Clássico + 1 Chapada de Minas + 1 Mantiqueira de Minas + 1 Cerrado Mineiro │Café Super Especial │ 100% Arábica │ Torra Média │250g x 4',
        price: 99.90,
        quantity: 12,
        image: 'https://m.media-amazon.com/images/I/616Q2kvKGyL._AC_SL1000_.jpg'
    },
    {
        id: newID(),
        name: 'Coffee Mais │Café Super Especial ARARA em Grãos │100% Arábica │ Torra Média │250g',
        price: 21.50,
        image: 'https://m.media-amazon.com/images/I/61Wb8+dnL2L._AC_SL1500_.jpg'
    },

]

export default presetProducts as Product[] 