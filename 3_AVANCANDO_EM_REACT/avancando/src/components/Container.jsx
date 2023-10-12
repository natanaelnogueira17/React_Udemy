
const Container = ({children, value})=>{
    return(
        <div>
            <h1>Este é meu Container</h1>  
            <p>valor: {value}</p>
            {children}  
        </div>
        )
};
export default Container;