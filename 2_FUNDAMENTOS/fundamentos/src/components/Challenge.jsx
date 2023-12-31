
const Challenge = () => {

    const a = 10;
    const b = 20; 

    return(
        <div>
            <div>
                <h2>Primeiro Valor é {a}</h2> 
                <h2>Segundo valor é {b}</h2>
            </div>
           
           <div>
            <button onClick={() => console.log("A soma dos valores é: " + (a+b))}>Clique aqui para somar os valores</button>
           </div>
        </div>

    );
};

export default Challenge;