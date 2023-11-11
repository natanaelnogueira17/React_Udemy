import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const url = "http://localhost:3000/products"
  const [products, setProducts] = useState([]);
  const [nome, setNome] = useState('');
  const [price, setPrice] = useState('');
   
  
  useEffect(()=>{
    async function getData(){
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
      
    }
    getData();
  },[products]) //ele esta monitorando a lista de product e recarreagando toda vez que for alterada

  const handleSubmit =  async (e)=>{    
   e.preventDefault();
    const product = {
      name : nome,
      price : price
    };
    
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product)
    })

    setNome("");
    setPrice("")
  }

  return (
    <>
    <div>
      <h1>lista de produtos</h1>
      {products.map((product)=>(
        <li key={product.id}>{product.name} - R${product.price}</li>
      ))}    
    </div>
    <br />
    <br />
    <div>
        <form onSubmit={handleSubmit}>
          <label >
            Nome: 
            <input value={nome} type="text" name='name' onChange={(e)=>setNome(e.target.value)}/>
          </label>
          <br /><br />
          <label>
            Preço: 
            <input type="number" value={price} name="price" onChange={(e)=>setPrice(e.target.value)}/>
          </label>
          <input type="submit" value="criar"/>
        </form>

    </div>

   </>
  )
}

export default App