import React,{useState, useEffect} from "react";
function

const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

export default products;



