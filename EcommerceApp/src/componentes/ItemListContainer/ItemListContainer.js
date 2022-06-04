import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../asynmock'
import ItemList from '../ItemList/ItemList'

function ItemListContainer(props) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    // const productsComponets = products.map(product => {
    //     return (
    //         <li key={product.id}>
    //             {product.name}
    //         </li>
    //     )
    // })
    return (
        <div id='contenedor'>
            <h1 className='Titulo'>{props.greeting}</h1>
            <ul>
            <ItemList products={products} />
        </ul>
        </div>
    )
}

export default ItemListContainer