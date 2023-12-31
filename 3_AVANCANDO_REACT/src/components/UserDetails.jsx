
const UserDetails = ({id, nome, idade, profissao}) => {
  return (
    <div>
        <h2>Detalhes Pessoa</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
       {idade >= 18 ? (
          <p>Usuário está habilitado a tirar a carteira de motorista.</p>
       ) : (
        <p>Usuário não está habilitado a tirar a carteira de motorista.</p>
       )}
    </div>
  )
}

export default UserDetails