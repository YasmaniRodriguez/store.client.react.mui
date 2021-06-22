import React from 'react';
import { makeStyles } from '@material-ui/core';
import { ItemListContainerStyle } from './ItemListContainerStyles.js';
import { ItemList } from '../../widgets/ItemList/ItemList.jsx';

const useStyles = makeStyles((theme) => ItemListContainerStyle(theme));

const products = [
    { id: 'pdt01', category: 'ctg01', name: 'mozzarella', price: '500', description: 'La pizza de mozzarella es la más clásica entre todas las recetas de pizzas. Es la que nos gusta a la mayoría. Es una receta compuesta por una masa baja y crocante con una cubierta de salsa de tomate, mozzarella, aceitunas y orégano.'},
    { id: 'pdt02', category: 'ctg01', name: 'jamón cocido y morrón', price: '500', description: 'La pizza de mozzarella jamón cocido y morrón es una variante muy rica y gustosa. Es una receta que se encuentra entre las pizzas clásicas argentinas. El secreto que tiene esta receta es el de cocinar previamente el morrón y quitarle su piel, de esta manera queda más suave y se evita que nos caiga pesado.'},
    { id: 'pdt03', category: 'ctg01', name: 'napolitana', price: '500', description: 'La pizza napolitana en Argentina, es una pizza de mozzarella con el agregado de finas rodajas de tomate natural en la superficie y un condimento a base de aceite de oliva, ajo y perejil finamente picados.'},
    { id: 'pdt04', category: 'ctg01', name: 'cuatro quesos', price: '500', description: 'La pizza 4 quesos es ideal para los amantes del queso. Como bien lo dice su nombre, es una pizza de masa baja, crocante y en la superficie está condimentada con 4 tipos de quesos diferentes. La receta que les presento es una combinación entre mozzarella, queso tipo gruyere, queso tipo roquefort y queso parmesano.'},
    { id: 'pdt05', category: 'ctg01', name: 'fugazzetta', price: '500', description: 'La pizza de fugazzeta, se caracteriza por tener una masa alta, esponjosa, crocante y en la superficie, cebolla bien fina junto con mozzarella. Algunos le agregan queso parmesano arriba de la cebolla, el cual le da un toque especial de sabor. De todas formas, los ingredientes clásicos de esta receta son el aceite de oliva, la cebolla, mozzarella y orégano.'},
    
    { id: 'pdt06', category: 'ctg02', name: 'pascualina', price: '250', description: 'Las tartas pueden ser rellanas con lo que más nos guste, en este caso, les dejo la tradicional receta de la tarta de verdura o Pascualina. Como ingredientes principales tiene, espinaca, cebolla y huevo. Una delicia.'},
    { id: 'pdt07', category: 'ctg02', name: 'brócoli y calabaza anco', price: '250', description: 'Las tartas son una rica y práctica opción a la hora de cocinar. Esta receta a base de brócolis y calabaza anco es una rica combinación y muy buena opción para aquellos que quieran cuidar la línea.'},
    { id: 'pdt08', category: 'ctg02', name: 'quiche de espárragos', price: '250', description: 'La quiche es una especie de tarta pero con la diferencia que lleva una sola tapa y en su relleno no puede faltar la crema de leche. Esta receta tiene como ingrediente principal a los espárragos, la crema de leche y huevos. Una delicia absoluta.'},
    { id: 'pdt09', category: 'ctg02', name: 'verduras', price: '250', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    { id: 'pdt10', category: 'ctg02', name: 'carne y huevo', price: '250', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    
    { id: 'pdt11', category: 'ctg03', name: 'carne suave', price: '125', description: 'Las empanadas de carnes son las más tradicionales entre la familia de las empanadas. Esta receta está realizada con carne picada vacuna, condimentada con cebolla y ají morrón. Es una receta muy suave y es apta para cocinarse en horno o fritas.'},
    { id: 'pdt12', category: 'ctg03', name: 'carne cortada a cuchillo', price: '125', description: 'Las empanadas de carnes cortadas a cuchillo son una variante de las empanadas de carne tradicionales. Esta receta está realizada con carne vacuna la cual se corta en pequeños cubos, lo que hace sentir más la presencia de la carne. Condimentada con cebolla y ají morrón. Es una receta muy suave y es apta para cocinarse en horno o fritas.'},
    { id: 'pdt13', category: 'ctg03', name: 'humita', price: '125', description: 'Las empanadas de humita, son una exquisita combinación entre salsa blanca o bechamel y choclo bien dulce. Es una receta muy fácil y simple de hacer, sus ingredientes principales son la salsa blanca y el choclo, aunque algunas recetas incorporan en su relleno la mozzarella. Las empanadas humita, son aptas para cocinarse en horno o fritas.'},
    { id: 'pdt14', category: 'ctg03', name: 'caprese', price: '125', description: 'Las empanadas caprese, son una exquisita variante de las clásicas de jamón y queso. Es una receta muy fácil y simple de hacer, sus ingredientes principales son la mozzarella, tomate natural, aceitunas negras y albahaca. Algunos le agregan el jamón cocidos, lo que les da un increíble sabor. Las empanadas capreses, son aptas para cocinarse en horno o fritas.'},
    { id: 'pdt15', category: 'ctg03', name: 'jamón y queso', price: '125', description: 'Las empanadas de jamón y queso forman parte de los gustos más clásicos de las empanadas. Es una receta muy fácil y simple de hacer, las clásicas son con mozzarella y jamón pero hay quienes les agregan huevo duro, aceituna y otros tipos de quesos, lo que les da un increíble sabor. Las empanadas de jamón y queso son aptas para cocinarse en horno o fritas.'},
    
    { id: 'pdt16', category: 'ctg04', name: 'gaseosa', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    { id: 'pdt17', category: 'ctg04', name: 'agua saborizada', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    { id: 'pdt18', category: 'ctg04', name: 'jugo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', price: '80'},
    { id: 'pdt19', category: 'ctg04', name: 'agua sin gas', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '},
    { id: 'pdt20', category: 'ctg04', name: 'cerveza', price: '80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '}
];

export const getItemList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 3000);
    })
}

export const ItemListContainer = () => {

    const classes = useStyles();

    return <section className={classes.container}>
        <ItemList/>
    </section>
}