import { useState } from "react";

export default function ManageData(){
    let someData = 10;
    const [number, setNumber] = useState(1);
    return(
        <div>
            <p>Valor: {someData}</p>
            <button onClick={()=>someData=15}>click variavel</button>
            <hr />
            <p>usando useState</p>
            <p>Valor: {number}</p>
            <button onClick={()=>setNumber(number+1)}>clique useState</button>
        </div>
    )
};