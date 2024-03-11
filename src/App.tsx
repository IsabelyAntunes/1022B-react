//Componente React
//um componente é uma função que retorna jsx
import './App.css'
function App() {
  let nome = "Isabely"
  let sobrenome = "Antunes da Silva"
  return (
    <>
      <h1 className="nome">Nome: {nome}</h1>
      <p className="sobrenome"> {sobrenome} </p>
    </>
  )// Retorna JSX - JavaScript XML
}

export default App
