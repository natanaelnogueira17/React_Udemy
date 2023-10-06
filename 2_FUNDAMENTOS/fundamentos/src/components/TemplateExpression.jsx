const TemplateExpression = ()=>{
    const name = 'natanael'
    const data = {
        age: 31,
        job: 'programmer'
    };
    return(
        <div>
            <p>ola {name}, tudo bem ?</p>
            <p>Sua profissao é {data.job}</p>
            <p>sua idade é {data.age} anos</p>
        </div>

    )
}

export default TemplateExpression;