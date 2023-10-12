import styles from './MyComponent.module.css'
// a chamada do styles se transforma em um objeto e os atributos podem ser acessados pelo component
const MyComponent = () => {
  return (
    <div>
      <p className={styles.p_1}>este é o paragradfo do meu componente</p>
    </div>
  )
}

export default MyComponent