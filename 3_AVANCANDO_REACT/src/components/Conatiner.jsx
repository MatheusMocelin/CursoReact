
const Conatiner = ({children, myValue}) => {
  return (
    <div>
        <h2>Esta é o título do Container</h2>
        {children}
        <p>O Valor é: {myValue}</p>
    </div>
  )
}

export default Conatiner