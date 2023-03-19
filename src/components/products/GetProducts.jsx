import { useEffect, useState } from "react";

const url = 'https://api.noroff.dev/api/v1/online-shop';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function getProducts(url) {

            const response = await fetch(url);
            const results = await response.json();
            setProducts(results);
            console.log((products));
        }

        getProducts(url);
    }, )

    // if (products.length > 24) {
    //     return <div>
    //         <p>{products.title}</p>
    //     </div>
    // }

    if (products.length > 24) {
        return <div>{products.map((product) => (
            <>
            <h3>{product.title}</h3>
            
            <img src={product.imageUrl} alt={product.title} />
            </>
        ))}</div>
    }

    return null
}

export default Products;