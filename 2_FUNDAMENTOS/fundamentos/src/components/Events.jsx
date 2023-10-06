import MyComponent from "./MyComponent"

const Events =()=>{
    const handleClick=(e)=>{
        console.log(e)
        console.log("disparou o evento")
    }

    const renderSomething = (x) =>{
        if(x){
            return <p>O x é verdadeiro</p>   
        }else{
           return  <MyComponent/>
        }
    }

    return(
        <div>
            <div>
            <button onClick={handleClick}>Clique Aqui</button>
            <button onClick={()=>console.log('funcao inline')}>clique novamente</button>

            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;