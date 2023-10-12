const ExecutionFunction = ({children, myFunction})=>{
    return(
        <>
            <button onClick={myFunction}>Clique aqui</button>
            {children}
        </>
    )
};

export default ExecutionFunction;