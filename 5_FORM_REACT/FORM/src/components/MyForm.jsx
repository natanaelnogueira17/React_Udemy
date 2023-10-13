import { useState } from 'react'
import './MyForm.module.css'
const MyForm = ({user})=>{
    //grenciamento de dados
    const [nome, setNome] = useState(user? user.nome : "");
    const [email, setEmail] = useState(user? user.email : "");
    const [bio, setBio] = useState(user? user.bio: "");
    const [role, setRole] = useState(user?user.role:"");

    const hanleChange = (e)=>{
       setNome(e.target.value);
       console.log(nome);
    }

    console.log(email);

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert('enviando o formulario');
        console.log(nome, email, bio, role);
        setNome("");
        setEmail("");
        setBio("");
        setRole("");
    }

    const handleTextArea = (e)=>{
            setBio(e.target.value);
    }

    const handleRole = (e)=>{
        setRole(e.target.value);
        console.log(role);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" >Nome: </label>
                    <input type="text" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={hanleChange}
                    value={nome}/>
                </div>
                <br/>
                {/**label envolvendo o imput */}
                <div>
                    <label>
                        <span>Email</span>
                        <input type="email"
                         placeholder='digite seu email'
                         onChange={(e)=> setEmail(e.target.value)}
                         value={email}/>
                    </label>
                    <br/>
                    <label>
                        <span>Bio</span>
                        <textarea name="Bio"
                         id="bio"
                           placeholder='Descricao do usuário'
                           onChange={handleTextArea}
                           value={bio}></textarea>
                    </label>
                    <br />
                    <label>
                        <span>Funcao no sistema</span>
                        <select name="role" id="role" 
                        onChange={handleRole} 
                        value={role}>
                            <option value="admin">Admin</option>
                            <option value="cliente">Cliente</option>
                            <option value="gerente">Gerente</option>
                        </select>
                    </label>
                </div>
                <input type="submit" />            
            </form>

        </div>
    )
}

export default MyForm