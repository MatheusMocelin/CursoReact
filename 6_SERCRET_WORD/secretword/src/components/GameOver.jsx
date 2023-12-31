import  './GameOver.css';

const GameOver = ({retry, score}) => {
  return (
    <div>
      <div>
        {/*Insert image*/}
        <img src="/img.jpg" alt="gameover" />
      </div>
        <h1>Fim de Jogo!</h1>
        <h2>
          A sua pontuação foi: <span>{score}</span>
        </h2>
        <button onClick={retry}>Reiniciar Jogo</button>
    </div>
  )
}

export default GameOver