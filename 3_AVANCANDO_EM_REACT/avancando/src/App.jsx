
import { useState } from "react"
import City from "./assets/city.jpg"
import CarDetails from "./components/CarDetails"

import ExecutionFunction from "./components/ExecuteFunction"
import ListRender from "./components/ListRender"
import ManageData from "./components/ManageData"

import Menssage from "./components/Menssage"
import MudarMensagem from "./components/MudarMensagem"



function App() {
  const cars = [
    {id: 1, brand : "ford", km: 0, newCar: true},
    {id: 2, brand : "wolksvagen", km : 65464, newCar : false},
    {id: 3, brand : "fiat", km : 64679, newCar : false}
  ]
  function showMsg(){
    console.log("chamando a funcao do componente pai")
  }

  
  const [msg,setMsg] = useState();

  const mudarText = (texto)=>{
    setMsg(texto)
  }


  return (
    <div>
      <h1>Avancando em React</h1>
      {/*Imagem em public */}
      <img src="/paisagem.jpg" alt="paisagem" />
      <hr />
      <h1>imagem como variável</h1>
      {/*importando da pasta assets e deixando como um componente */}
      <div>
        <img src={City} alt="cidade" />
      </div>
      <div>
        <ManageData/>
        <ListRender/>

        {/**essa parte renderiza na tela o componente com os dados do objeto sendo passado como props */}
        <h1>new Car e Used Car Here!</h1> 
        {cars.map((car)=>(
          <CarDetails key={car.id} brand={car.brand} km={car.km} newCar={car.newCar} />
          ))}
       <ExecutionFunction myFunction={showMsg}>
        <button onClick={()=> console.log("clicou no botao filho")}>Botao do children</button>
       </ExecutionFunction>

       <MudarMensagem mudarText={mudarText}/>
       <Menssage msg={msg}/>
     
      </div>
    </div>
  )
}

export default App;
