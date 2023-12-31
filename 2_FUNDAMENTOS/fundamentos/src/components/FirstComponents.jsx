// comentário em linha

import MyComponent from "./MyComponent";

/*
  Multi line
*/
const FirstComponent = () => {
    return (
        <div>
            {/* Comentário */}
            <h1>Meu primeiro Componente</h1>
            <p className="Teste">Teste</p>
            <MyComponent/>
        </div>
    );
};

export default FirstComponent;