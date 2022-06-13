import { useState, useEffect} from 'react'
import { getProductById } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        })
    }, [])

    return (
        <>
            <h1>Especificaciones</h1>
            <ItemDetail {...product}/>
        </>
    )
}

export default ItemDetailContainer