import { useEffect, useState } from "react"

const useServiceDetails = (serviceId) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://computer-house-app.onrender.com/products/${serviceId}`)
        .then(res => res.json())
        .then(data => setProducts(data))
      }, [serviceId]);

      return [products, setProducts]
}


export default useServiceDetails;