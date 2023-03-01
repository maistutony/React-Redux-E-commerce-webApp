import { useEffect } from "react";
import axios from "axios";
function Products(props) {
    const {isLoading,products,setProducts,setIsLoading,setError}=props;
    console.log(isLoading,products)
  
  useEffect(()=>{
    const fetchProducts = async () => {
        try {
          const response = await axios.get("https://dummyjson.com/products");
          const data = await response.data;
          setProducts(data);
          setIsLoading(false);
        } catch (error) {
      setError(error.message)
        }
      };
    fetchProducts()
  },[setProducts,setIsLoading,setError]);

}
export default Products;
