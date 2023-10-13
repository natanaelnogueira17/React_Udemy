import './App.css'
import MyForm from './components/MyForm'

function App() {
  const userCad = {
    nome:"natanael", 
    email:"natanael@nogueira",
    bio: "sou um gerente",
    role:"gerente"}

  return (
    <>
      <MyForm user={userCad}/>
    </>
  )
}

export default App
