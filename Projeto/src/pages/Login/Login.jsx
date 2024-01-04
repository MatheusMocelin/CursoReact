import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar se campos obrigatórios estão preenchidos
    if (!email || !password) {
      setErrorMessage("É necessário preencher e-mail e senha!");
      return;
    }

    const user = {
      email,
      password,
    };

    console.log(user);

    // Lógica para autenticação ou envio de dados
    // ...

    // Limpar campos e mensagem de erro após o envio
    setEmail("");
    setPassword("");
    setErrorMessage("");
  };

  return (
    <div id="login">
      <h2>Bem Vindo</h2>
      <p>Faça Login para acessar o sistema</p>

      {errorMessage && (
  <p style={{ color: "red", textShadow: "1px 1px 1px rgba(0, 0, 0, 0.5)" }}>
    {errorMessage}
  </p>
)}




      <form onSubmit={handleSubmit}>
        <label>
          <span>Usuário:</span>
          <input
            type="text"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <input type="submit" value="Entrar" />
        <p>
          Esqueceu a senha? <Link to="/recuperarsenha">Clique aqui</Link>
        </p>
      </form>
      <p>
        Para realizar um novo cadastro{" "}
        <Link to="/cadastro">Clique aqui</Link>
      </p>
      <div></div>
    </div>
  );
};

export default Login;
