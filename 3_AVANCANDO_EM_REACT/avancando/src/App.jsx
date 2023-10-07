
import City from "./assets/city.jpg"
import ManageData from "./components/ManageData"
function App() {
  

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
      </div>
    </div>
  )
}

export default App
