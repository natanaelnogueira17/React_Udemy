import React, { useState } from 'react'
import styles from  './Registro.module.css'

const Registro = () => {
    const [displayName, setDisplayName] = useState('');
    const [displayEmail, setDisplayEmail] = useState('');
    const [displayPassword, setDisplayPassword] = useState('');
    const [displayComfirmPassword, setDisplayComfirmPassword] = useState('');
    const [error, setError] = useState('') ;


    const handleSubmit = (e)=>{
        e.preventDefault()
        setError("")
        
        const user = {
            displayName,
            displayEmail,
            displayPassword
        };
        
        if(displayPassword != displayComfirmPassword){
            setError("Não foi possível confirmar a senha.")
            return;
        }

        console.log(user)
    }


  return (
    <div className={styles.Registro}>
       <form onSubmit={handleSubmit}>
       <h1>Cadastre-se para postar</h1>
       <p>Crie seu usuario e compartilhe suas histórias</p>
        <label>
            <span>Nome:</span>
            <input required type="text" name='displayName' placeholder='Nome do usuario' value={displayName} onChange={(e)=>{setDisplayName(e.target.value)}} />
        </label>
        <label>
            <span>Email:</span>
            <input required type="email" name='displayEmail' placeholder='Email do usuario' value={displayEmail} onChange={(e)=>{setDisplayEmail(e.target.value)}} />
        </label>
        <label>
            <span>Senha:</span>
            <input required type="password" name='displayPassword' placeholder='Senha do usuario' value={displayPassword} onChange={(e)=>{setDisplayPassword(e.target.value)}} />
        </label>
        <label>
            <span>Comfirme a Senha:</span>
            <input required type="password" name='displayComfirmPassword' placeholder='Confirme a Senha' value={displayComfirmPassword} onChange={(e)=>{setDisplayComfirmPassword(e.target.value)}}/>
        </label>
         
        <input type="submit" value= 'Cadastrar' name='Cadastrar'/>
        {error&& <p className='error'>{error}</p>}
       </form>
    </div>
  )
}

export default Registro