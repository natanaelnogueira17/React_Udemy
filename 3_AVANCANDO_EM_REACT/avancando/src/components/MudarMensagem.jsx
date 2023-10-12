const MudarMensagem = ({mudarText})=>{
    const messeges = ['ola', 'hello', 'nice to meet too'];
return(

 <div>
    <button onClick={()=>mudarText(messeges[0])}>1</button>
    <button onClick={()=>mudarText(messeges[1])}>2</button>
    <button onClick={()=>mudarText(messeges[2])}>3</button>
    
</div>

)

};
export default MudarMensagem;