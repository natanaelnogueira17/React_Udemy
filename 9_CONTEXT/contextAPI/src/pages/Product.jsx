//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext';
import ChangeCounter from '../components/ChangeCounter';
import { useCounterContext } from '../hooks/useCounterContext';

const Product = () => {

  const {counter} =  useCounterContext();
  return (
    <>
      <h1>Products</h1>
      <p>valor do contador {counter}</p>
      <ChangeCounter/>
    </>
  )
}

export default Product