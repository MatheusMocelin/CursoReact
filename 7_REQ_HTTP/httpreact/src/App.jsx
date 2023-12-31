import './App.css'

import { useState } from 'react';

//4 - custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
    const [products, setProducts] = useState([]);

      //4 - Custom hook
      const {data: items, httpConfig, loading, error} = useFetch(url);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");

   

  
    //1 - Resgatando dados
    /*useEffect(() =>{
      async function fetchData(){

          const res = await fetch(url);

          const data = await res.json();

          setProducts(data);


      }

      fetchData();
      
    }, []);*/


    //2 - Add de produtos

    const handleSubmit = async(e) => {
        e.preventDefault();

        const product = {
          name,
          price,
        };
       
        /*const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        // 3 - Carregamento dinâmico
        const addedProduct = await res.json();

        setProducts((prevProducts) => [...prevProducts, addedProduct]);*/

        //5 - Refatorando Post

        httpConfig(product, "POST");

        console.log(product);

        setName("");
        setPrice("");

    };

  return (
    <div className='App'>
      <h1>Lista de Produtos</h1>
      
      {/*6 - Loading*/}
      {loading &&  
        <p><img src="./loading.svg"/> Carregando dados...</p>
      }
      {error && <p>{error}</p>}
      {!error && (<ul>
        {items && items.map((product) => 
        <li key={product.id}>
          {product.name} - R$: {product.price}
            <button onClick={() => httpConfig(product.id, "DELETE")}>Delete</button>            
        </li>
        )}
      </ul>)}
      <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)}/>
            </label>
            <label>
              Preço:
              <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)}/>
            </label>
            {/*7 - State de Loading no post */}
            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
          </form>
      </div>
    </div>
  )
}

export default App
