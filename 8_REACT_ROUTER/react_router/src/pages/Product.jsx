import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";

const Product = () => {

    //*4 - Rota Dinamica */
    const {id} = useParams();

    //5 - Carregamento dado individual
    const url = "http://localhost:3000/products/" + id;

    const {data: Product, loading, error} = useFetch(url);

  return (
     <>
        <p>ID do Produto: {id}</p>
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando ...</p>}
        {Product && (
            <div>
            <h1>{Product.name}</h1>
            <p>RS: {Product.price}</p>
            {/*6 - Nested routes */}
            <Link to={`/products/${Product.id}/info`}>Mais Informações</Link>
        </div>
        )}
        
     </>
  )
}

export default Product