const products = [
    { 
        id: '1', 
        name: 'vestido Marjorie', 
        price: 5580, 
        category: 'Vestidos', 
        img: 'https://cdn.shopify.com/s/files/1/0070/6353/5667/products/Or7nr14_352x512.jpg?v=1654082711',
        stock: 30, 
        description:'Vestido camisero talles XS-XL'
    },
    
    { id: '2', name: 'Vestido Mica', price: 7000, category: 'Vestidos', img:'https://cdn.shopify.com/s/files/1/0070/6353/5667/products/176495-800-auto_352x512.jpg?v=1647264071', stock: 25, description:'Vestido largo-midi. Talles XXS-L'},

    { id: '3', name: 'Sandalias Eva', price: 9200, category: 'Accesorios', img:'https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_1,q_auto:best,w_0.97125097125097,x_0.014374514374514,y_0/c_scale,w_311/apzzltasgkugoe2ifr8o.jpg', stock: 40, description:'Sandalias estampadas. Taco 7cm. Talles 35-42'},
    
     
       {id: '4', 
        name: 'Sandalias Mica', 
        price: 7500, 
        category: 'Accesorios', 
        img: 'https://media.sezane.com/image/upload/c_crop,fl_progressive:semi,h_1,q_auto:best,w_0.97125097125097,x_0.014374514374514,y_0/c_scale,w_311/vc1uaghhoxvfasfjnz4c.jpg',
        stock: 30, 
        description:'Sandalias con taco 2cm. Talles 35-42'
    },
]


export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
